import { useDispatch, useSelector } from "react-redux";
import {NoteType} from "../Note/Note";
import './NoteListItem.css'
import {selectNote} from "../../slice/notesSlice";
import {RootState} from "../../store/store";
interface Props {
    note: NoteType;
}

function NoteListItem({ note }: Props) {
    const dispatch = useDispatch();
    const selectedNoteId = useSelector((state: RootState) => state.notes.selectedNoteId);

    const handleNoteClick = () => {
        dispatch(selectNote(note.id));
    };
    return (
        <li className={`itemContainer ${note.id === selectedNoteId && 'selected'}`} onClick={handleNoteClick}>
            <p className={'itemTitle'}>{note.title}</p>
            <p className={'itemContent'}>{note.content}</p>
        </li>
    )
}

export default NoteListItem
