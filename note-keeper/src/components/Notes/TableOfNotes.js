import React, { useRef } from "react";
//import GridLayout from "react-grid-layout";
import { Responsive, WidthProvider } from "react-grid-layout";
import classes from './TableOfNotes.module.css';
import Note from './Note.js';

const ResponsiveGridLayout = WidthProvider(Responsive);

const TableOfNotes = (props) => {
    console.log(props);
    const refs = useRef([]);
    return (
        <ResponsiveGridLayout
            className={classes.table}
            breakpoints={{ lg: 1200, xs: 480, xxs: 0}}
            cols={{ lg: 4, xs: 2, xxs: 1}}
            rowHeight = {30}
            margin={[5,10]}
            // rowHeight={250}
        >
            {props.notes.map(item => 
                <div key = {item.key} data-grid={{ x: item.x, 
                                                   y: item.y, 
                                                   w: item.w, 
                                                   h: item.h,
                                         
                                                   isResizable: true,
                                                   
                            }}>    
                    <Note title = {item.title}
                          content = {item.content}
                          key = {item.key}
                          ref={(ref) => (refs.current[item.key] = ref)}   
                    />
                </div>    
            )}

        </ResponsiveGridLayout>
        
    );
}

export default TableOfNotes;