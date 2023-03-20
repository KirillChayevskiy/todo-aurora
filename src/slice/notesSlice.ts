import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import note, {NoteType} from "../components/Note/Note";
import {RootState} from "../store/store";

interface NotesState {
    notes: NoteType[];
    selectedNoteId: string | null;
}

const initialState: NotesState = {
    notes: [],
    selectedNoteId: null,
};

interface UpdateNotePayload {
    id: string;
    title?: string;
    content?: string;
}


const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: {
            reducer: (state, action: PayloadAction<NoteType>) => {
                state.notes.push(action.payload);
                state.selectedNoteId = action.payload.id
            },
            prepare: (note: Omit<NoteType, "id">) => ({
                payload: {
                    ...note,
                    id: nanoid(),
                },
            }),
        },
        updateNote: (state, action: PayloadAction<UpdateNotePayload>) => {
            const { id, title, content } = action.payload;
            const note = state.notes.find((note) => note.id === id);
            if (note) {
                if (title !== undefined) {
                    note.title = title;
                }
                if (content !== undefined) {
                    note.content = content;
                }
            }
        },
        removeNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        },
        selectNote: (state, action: PayloadAction<string>) => {
            state.selectedNoteId = action.payload;
        }
    },
});

export const { addNote, updateNote, removeNote, selectNote } = notesSlice.actions;

export default notesSlice.reducer;
