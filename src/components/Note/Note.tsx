import { useDispatch, useSelector } from "react-redux";
import {removeNote, updateNote} from "../../slice/notesSlice";
import './Note.css';
import {RootState} from "../../store/store";
import Stub from "../Stub/Stub";


export interface NoteType {
    id: string;
    title: string;
    content: string;
}

function Note() {
    const dispatch = useDispatch();
    const selectedNoteId = useSelector((state: RootState) => state.notes.selectedNoteId);
    const note = useSelector((state: RootState) =>
        state.notes.notes.find((note) => note.id === selectedNoteId)
    );
    if (!note) {
        return (<Stub/>);
    }

    const handleChangeTitle = (event: any) => {
        dispatch(updateNote({ id: note.id, title: event.target.value }));
    }

    const handleChangeContent = (event: any) => {
        dispatch(updateNote({ id: note.id, content: event.target.value }));
    }

    return (
        <div className={'container'}>
            <input
                className={'title'}
                value={note.title}
                placeholder={'Заголовок'}
                onChange={handleChangeTitle}
            />
            <textarea
                className={'content'}
                value={note.content}
                onChange={handleChangeContent}
            />
        </div>
    );
}

export default Note;
