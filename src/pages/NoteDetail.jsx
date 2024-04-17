import React from "react";
import { useParams } from "react-router-dom";
import NoteBody from "../components/NoteBody";
import { getNote } from "../utils/local-data";
import PropTypes from "prop-types";

function NoteDetailWrapper(){
    const {id} = useParams();
    if (getNote(id)=== undefined){
        return <p>Note dengan id {id} tidak tersedia</p>
    }
    return <NoteDetail id={id} />;
}

class NoteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: getNote(props.id)
        };

    }
    render() {
        if(this.state.detail === null){
            return <p>Catatan tidak ditemukan</p>
        }
        return (
            <section>
                <NoteBody {...this.state.detail}/>
            </section>
        )
    }
}

NoteDetailWrapper.propTypes = {
    id: PropTypes.string,
}

export default NoteDetailWrapper;