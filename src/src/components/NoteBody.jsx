import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/";

function NoteBody({title, body, id, createdAt}) {
    const createdDate = new Date(createdAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    
    });
    return (
        <>
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{createdDate}</p>
            <p className="note-item__body">{body}</p>
        </>
    )
}

NoteBody.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id:PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export  default NoteBody;