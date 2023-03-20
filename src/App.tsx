import React from 'react';
import './App.css';
import Note from "./components/Note/Note";
import NoteList from "./components/NoteList/NoteList";
import DeleteButton from "./components/DeleteButton/DeleteButton";

function App() {

    return (
    <div className="App">
        <NoteList/>
        <Note/>
        <DeleteButton/>
    </div>
  );
}

export default App;
