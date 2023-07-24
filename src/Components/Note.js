import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
function Note({id,text,date,handleDeleteNote}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <BsFillTrashFill className='note-delete' onClick={()=>handleDeleteNote(id) } />
        </div>

    </div>
  )
}

export default Note