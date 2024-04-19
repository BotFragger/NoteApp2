import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteBody from "./NoteBody";
import { deleteNote, archiveNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function NoteItem({title, body, id, createdAt, onDelete}){
    const navigate = useNavigate();
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        setDeleting(true);
        await deleteNote(id);
        onDelete(id);
    }
    
    return (
        <div className="note-item">
            <NoteBody id={id} title={title} body={body} createdAt={createdAt} />
            <button className="notes-item__button-delete" onClick={handleDelete} disabled={deleting}>{deleting ? "menghapus..." : "Hapus"}</button>
            <button className="notes-item__button-archive" onClick={()=> {archiveNote(id); navigate("/arsip")}}>Arsipkan</button>
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    body : PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    onDelete : PropTypes.func.isRequired
}

export default NoteItem;