import React from "react";
import { showFormattedDate } from "../utils/index";
import { getArchivedNotes, deleteNote } from "../utils/network-data";
import ArchiveList from "../components/ArchiveList";

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            id:''
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    
    onDeleteHandler(id){
        deleteNote(id);
        this.setState(()=>{
            return{
                notes: getArchivedNotes(),
                id:''
            }
        });
    }

    render() {
        return (
            <>
                <div className="notes-app">
                    <section className="notes-app-body">
                        <ArchiveList
                            notes={this.state.notes}
                            onDelete={this.onDeleteHandler}
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Archive;