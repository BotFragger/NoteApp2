import React from "react";
import PropTypes from "prop-types";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(()=>{
            return {title : event.target.value}
        });
    }
    onContentChangeHandler(event) {
        this.setState(()=>{
            return {body : event.target.value}
        });
    }
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return (
            <>
                <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                    <input className="add-new-page__input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeHandler}/>

                    <input className="add-new-page__input__body" type="text" placeholder="Konten" value={this.state.body} onChange={this.onContentChangeHandler}/>

                    <button className="notes-item__button-archive" type="submit">Tambah</button>
                </form>
            </>
        )
    }
}

AddNote.propTypes = {
    addNote: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string
}

export default AddNote;