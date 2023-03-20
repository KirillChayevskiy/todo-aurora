import './Stub.css'
import {RootState} from "../../store/store";
import { useSelector } from 'react-redux';

function Stub () {

    const notes = useSelector((state: RootState) => state.notes);
    console.log(notes.notes.length)
    return (
        <div className={'stubContainer'}>
            <p className={'stubTitle'}>
                {notes.notes.length
                    ? 'Выберите заметку для редактирования или создайте новую, нажав на "+"'
                    : 'Нажмите на "+", чтобы создать новую заметку'}
            </p>
        </div>
    )
}

export default Stub
