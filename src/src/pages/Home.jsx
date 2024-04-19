import React from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import NoteList from "../components/NoteList";

function Home(){
    const [notes, setNotes] = React.useState([]);

    React.useEffect(()=>{
        getActiveNotes().then(({data})=>{
            setNotes(data);
        })
    },[]);

    async function onDeleteNote(id){
        await deleteNote(id)
        const {data} = await getActiveNotes();
        setNotes(data);
    }

    async function onArchiveNote(id){
        await archiveNote(id)
        const {note} = await getActiveNotes();
        setNotes(note);
    }

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