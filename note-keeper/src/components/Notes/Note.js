import React from "react";
import classes from './Note.module.css';

const Note = (props) => {
    return (
        <div className = {classes.note}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>    
        </div>    
    )
}

export default Note;