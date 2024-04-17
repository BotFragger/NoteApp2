import React from "react";
import { addNote } from "../utils/local-data";
import AddNote from "../components/AddNote";
import { useNavigate } from "react-router-dom";


function NewNote(){
    const navigate = useNavigate();
    function addNoteHandler(notes){
        addNote(notes);
        navigate("/tambahcatatan");
    }

    return(
        <>
            <h1>Buat Catatan</h1>
            <AddNote addNote={addNoteHandler}/>
        </>
    )
}

export default NewNote;