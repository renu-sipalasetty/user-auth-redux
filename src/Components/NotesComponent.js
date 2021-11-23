import React, { useEffect } from "react";
import TextTag from "../HtmlComponents/TextTags";
import AddNote from "./AddNote";
import NotesList from "./NotesList";

const NotesComponent = props => {
    useEffect(() => {
        if(!localStorage.getItem('JWT_Token')){
            props.history.push('/')
        }
    }, [])
    return (
        <div className = 'row'>
            <TextTag 
                Tag='h2' 
                className='text-center text-capitalize text-primary my-4' 
                text='my notes' 
            />
            <NotesList />
            <AddNote />
        </div>
    )
}

export default NotesComponent