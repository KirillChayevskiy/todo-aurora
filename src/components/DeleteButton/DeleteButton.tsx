import {addNote, removeNote} from "../../slice/notesSlice";
import { useDispatch, useSelector } from 'react-redux';
import './DeleteButton.css'
import DeleteIcon from "./DeleteIcon";
import {RootState} from "../../store/store";

function DeleteButton() {
    const dispatch = useDispatch();
    const selectedNoteId = useSelector((state: RootState) => state.notes.selectedNoteId);

    const handleClick = () => {
        dispatch(removeNote(selectedNoteId!))
    }
    return (
        <div className={'deleteButtonContainer'}>
            <button className={'deleteButton'} onClick={handleClick}>
                <DeleteIcon width={'50px'} height={'50px'}/>
            </button>
        </div>
    )
}

export default DeleteButton
