import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetNotes } from "../Actions/noteAction";
import TextTag from "../HtmlComponents/TextTags";
import NoteItem from "./NoteItem";

const NotesList = (props) => {
    const notes = useSelector((state) => {
        return state.notes.data
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startGetNotes())
    },[])
    console.log('notes', notes)
    return (
        <div className = 'col-md-6'>
            <TextTag 
                Tag='h2' 
                className='text-center text-capitalize text-primary my-4' 
                text='my notes list' 
            />

            {notes.length === 0 ? (
                <h2>no notes found</h2>
            ):(
                <div>
                    {notes.map((note) => {
                        return (
                            <div className=' mx-4 my-2'>
                                <NoteItem 
                                    key = {note._id} 
                                    note = {note} 
                                    {...note}
                                />
                            </div>
                        )
                    })}
                </div>
            )
            }
        </div>
    )
}

export default NotesList