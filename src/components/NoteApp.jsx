import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { LocaleProvider } from "../context/LocaleContext";
import Login from "../pages/Login";
import NoteList from "./NoteList";
import Archive from "../pages/Archive";
import NewNote from "../pages/NewNote";
import NoteDetailWrapper from "../pages/NoteDetail";
import { Link } from "react-router-dom";

function NoteApp(){
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [localeContext, setLocaleContext] = useState({
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
            setLocaleContext((prevState) => {
                const newLocale = prevState.locale === 'id' ? 'en' : 'id';
                localStorage.setItem('locale', newLocale);
                return {
                    ...prevState,
                    locale: newLocale
                };
            });
        }
    });

    // React.useEffect(() => {
    //     async function fetchData() {
    //     try {
    //         const { data } = await getUserLogged();
    //         setAuthedUser(data);
    //         setInitializing(false);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    //     }
    //     fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getUserLogged();
                setAuthedUser(data);
                setInitializing(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setInitializing(false);
            }
            };
        
            if (authedUser === null) {
            fetchData();
            } 
        }, [authedUser]);

    const onLoginSuccess = async ({ accessToken }) => {
        try {
            console.log('access', accessToken)
            putAccessToken(accessToken);
            const { data } = await getUserLogged();
            setAuthedUser(data);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    // async function onLoginSuccess({accessToken}){
    //     putAccessToken(accessToken);
    //     const { data } = await getUserLogged();
    //     setAuthedUser(data);
    // }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
    };

    const toggleLocale = () => {
        const newLocale = locale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
    };

    if(initializing){
        return null;
    }

    if(authedUser === null){
        return(
            <>
                <LocaleProvider value={localeContext}>
                    <div className="app-container">
                        <header>
                            <h1>Aplikasi Catatan</h1>
                        </header>
                        <main>
                            <Routes>
                                <Route path="/*" element={<Login loginSuccess={onLoginSuccess}/>}/>
                                <Route path="/register" element={<RegisterPage/>}/>
                            </Routes>
                        </main>
                    </div>
                </LocaleProvider>
            </>
        )
    }

    return(
        <>
            <LocaleProvider value={localeContext}>
                <div className="app-container">
                    <header>
                        <h1><Link to="/notes">Aplikasi Catatan</Link></h1>
                        <Navigation logout={onLogout} name={authedUser.name}/>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/arsip" element={<Archive/>} />
                            <Route path="/tambahcatatan" element={<NewNote/>} />
                            <Route path="/notes/:id" element={<NoteDetailWrapper/>} />
                        </Routes>
                    </main>
                </div>
            </LocaleProvider>
        </>
    )
}

export default NoteApp;