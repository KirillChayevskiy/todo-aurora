import './AddButton.css'
import {addNote} from "../../slice/notesSlice";
import { useDispatch } from 'react-redux';

function AddButton() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addNote({title: '', content: ''}))
    }
    return (
        <div className={'buttonContainer'}>
            <button className={'button'} onClick={handleClick}>
                <p className={'buttonText'}>+</p>
            </button>
        </div>
    )
}

export default AddButton
