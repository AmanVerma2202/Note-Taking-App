import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'
import './App.css';
import NodeList from './Components/NodeList';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {

  const [notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"this is my first note",
    date:"15/04/2021"
    },
    {
    id:nanoid(),
    text:"this is my second note",
    date:"16/04/2021"
    },
    {
    id:nanoid(),
    text:"this is my third note",
    date:"17/04/2021"
    },
    
  ]);

  const [searchText , setSearchText] = useState('')
  const [darkMode, setDarkMode]=useState(false);

  useEffect(()=>{
    const savedNotes= JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes])

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    };
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote= (id) =>{
    const newNotes=notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'darkMode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NodeList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
