import {RootState} from "../../store/store";
import { useSelector } from "react-redux";
import NoteListItem from "../NoteListItem/NoteListItem";
import './NoteList.css'
import AddButton from "../AddButton/AddButton";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";

function NoteList() {

    const notes = useSelector((state: RootState) => state.notes);
    const [searchText, setSearchText] = useState('');

    const filteredNotes = notes.notes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchText.toLowerCase()) ||
            note.content.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className={'listContainer'}>
            <SearchInput value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <div className="list">
                {filteredNotes.map((note) => (
                        <NoteListItem note={note} key={note.id}/>
                    )
                )}
                <AddButton/>
            </div>
        </div>

    )

}

export default NoteList
