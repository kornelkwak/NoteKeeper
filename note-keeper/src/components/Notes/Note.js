import React from "react";
import classes from './Note.module.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Note = React.forwardRef((props, ref) => {
    return (
        <div className = {classes.note} ref={ref}
             data-grid={{ x: 1, y: 0, w: 3, h: 2}}
        >
            <h2>{props.title}</h2>
            <hr />
            <p>{props.content}</p>
            <hr />
            <div className = {classes.footer}>
            </div>    
        </div>    
    )
});
 
export default Note;