import React from "react";
import ArchiveNote from "./ArchiveNote";
import PropTypes from "prop-types";

function ArchiveList({notes, onDelete, id}){
    const archivedNotes = notes[1] || [];

    if (archivedNotes.length === 0) {
        return <p>Currently no notes available</p>;
    }

    return (
        <div className="notes-list">
            {archivedNotes.map((note) => (
                <ArchiveNote
                    key={note.id}
                    id={id}
                    onDelete={() => onDelete(note.id)}
                    {...note}
                />
            ))}
        </div>
    );
}

ArchiveList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    notes: PropTypes.array,
    id: PropTypes.string,
}

export default ArchiveList;