import React from "react";
import { getArchivedNotes, deleteNote } from "../utils/network-data";
import ArchiveList from "../components/ArchiveList";

class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:{},
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

    async componentDidMount() {
        try {
            const notes = await getArchivedNotes();
            this.setState({ notes});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        console.log(Object.values(this.state.notes))
        return (
            <>
                <div className="notes-app">
                    <section className="notes-app-body">
                        <ArchiveList
                            notes={Object.values(this.state.notes)}
                            onDelete={this.onDeleteHandler}
                        />
                    </section>
                </div>
            </>
        )
    }
}

export default Archive;