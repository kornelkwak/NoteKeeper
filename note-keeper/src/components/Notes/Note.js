import React from "react";
import classes from './Note.module.css';
//import Draggable from "react-draggable";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Note = (props) => {
    return (
        //<Draggable>  
        <div className = {classes.note}>
            <h2>{props.title}</h2>
            <hr />
            <p>{props.content}</p>
            <hr />
            <div className = {classes.footer}>
            </div>    
        </div>    
        //</Draggable>  
    )
};
 
export default Note;