import React from "react";
import ArchiveNote from "./ArchiveNote";
import PropTypes from "prop-types";

function ArchiveList({notes, onDelete, id}){
    if (!notes.length){
        return  <p>Tidak ada catatan</p>;
    }
    return(
        <div className="notes-list">
            {notes.map((note) =>(
                <ArchiveNote 
                    key={note.id}
                    id={id}
                    onDelete={()=> onDelete(note.id)}
                    {...note}/>
            ))}
        </div>
    )
}

ArchiveList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
}

export default ArchiveList;