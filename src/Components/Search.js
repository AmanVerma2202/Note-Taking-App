import React from 'react'
import { BsSearch } from "react-icons/bs";

function Search({handleSearchNote}) {
  return (
    <div className="search">
        <BsSearch className='searchIcon' />
        <input onChange={(event)=>handleSearchNote(event.target.value)} type="text" placeholder="type to search..." />
    </div>
  )
}

export default Search