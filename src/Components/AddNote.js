import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NotesForm from "./NotesForm";
import { startAddNote } from "../Actions/noteAction";
import TextTag from "../HtmlComponents/TextTags";

const AddNote = (props) => {
    const dispatch = useDispatch()
    const [isSaved, setIsSaved] = useState(false)
    // const handleIsSaved=()=>{
    //     setIsSaved(true)
    // }
    const formSubmit = (formData) => {
        dispatch(startAddNote(formData))
        setIsSaved(true)
    }
    return(
        <div className = 'col-md-6'>
            <TextTag Tag='h2' className='text-center text-capitalize text-primary my-3' text='add notes' />
            <NotesForm formSubmit = {formSubmit} isSaved = {isSaved} />
        </div>
    )
}

export default AddNote