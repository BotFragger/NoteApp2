import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({notes, onDelete, id, onArchive}){
    if (!notes.length){
        return  <p>Tidak ada catatan</p>;
    }
    return(
        <div className="notes-list">
            {notes.map((note) =>(
                <NoteItem 
                key={note.id}
                id={note.id}
                onDelete={()=> onDelete(note.id)}
                onArchive={()=> onArchive(note.id)}
                {...note}/>
            ))}
        </div>
    )
}

NoteList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.object),
    // id:PropTypes.string,
}

export default NoteList;