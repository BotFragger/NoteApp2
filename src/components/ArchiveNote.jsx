import React from "react";
import PropTypes from "prop-types";
import NoteBody from "./NoteBody";
import { deleteNote, unarchiveNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function ArchiveNote({title, body, id, createdAt, onDelete}){
    const navigate = useNavigate();
    const handleDelete = () => {
        onDelete(id);
    }
    
    return (
        <div className="note-item">
            <NoteBody id={id} title={title} body={body} createdAt={createdAt} />
            <button className="notes-item__button-delete" onClick={handleDelete}>Hapus</button>
            <button className="notes-item__button-archive" onClick={()=> {unarchiveNote(id); navigate("/")}}>Batalkan arsip</button>
        </div>
    )
}

ArchiveNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body : PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ArchiveNote;