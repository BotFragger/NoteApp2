import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteBody from "../components/NoteBody";
import { getNote } from "../utils/network-data";
import PropTypes from "prop-types";

function NoteDetailWrapper(){
    const {id} = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() =>{
        const fetchData = async () =>{
            const detailCatatan = await getNote(id);
            setDetail(detailCatatan.data);
        }
        fetchData();
    },[id]);

    if (detail=== null){
        return <p>Note dengan id {id} tidak tersedia</p>
    }
    return (
        <section>
            <NoteBody {...detail}/>
        </section>
    )
}

NoteDetailWrapper.propTypes = {
    id: PropTypes.string,
}

export default NoteDetailWrapper;