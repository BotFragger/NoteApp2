import React from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import Navigation from "../components/Navigation";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             notes: getActiveNotes(),
//         }
//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//         this.onArchiveHandler = this.onArchiveHandler.bind(this);
//     }
    
//     onDeleteHandler(id){
//         deleteNote(id);
//         this.setState(()=>{
//             return{
//                 notes: getActiveNotes()
//             }
//         });
//     }

//     onArchiveHandler(id){
//         archiveNote(id);
//         this.setState(()=>{
//             return{
//                 notes: getActiveNotes()
//             }
//         });
//     }

//     render() {
//         return (
//             <>
//                 <div className="notes-app">
//                     <header>
//                         <nav className="navigation">
//                             <ul>
//                                 <li><Navigation/></li>
//                             </ul>
//                         </nav>
//                     </header>
//                     <section className="notes-app-body">
//                         <NoteList
//                             id={this.state.id}
//                             notes={this.state.notes}
//                             onDelete={this.onDeleteHandler}
//                             onArchive= {this.onArchiveHandler} 
//                         />
//                     </section>
//                 </div>
//             </>
//         )
//     }
// }

function Home(){
    // const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    // const [keyword, setKeyword] = React.useState(()=>{
    //     return searchParams.get('keyword') || ''
    // });

    // const {locale} = React.useContext(LocaleContext);

    React.useEffect(()=>{
        getActiveNotes().then(({data})=>{
            setNotes(data);
        })
    },[]);

    async function onDeleteNote(id){
        await deleteNote(id)
        const {note} = await getActiveNotes();
        setNotes(note);
    }

    async function onArchiveNote(id){
        await archiveNote(id)
        const {note} = await getActiveNotes();
        setNotes(note);
    }
    console.log(notes)

    return (
        <section>
            <NoteList
                notes={notes}
                onDelete={onDeleteNote}
                onArchive={onArchiveNote}
            />
        </section>
    )
}
export default Home;