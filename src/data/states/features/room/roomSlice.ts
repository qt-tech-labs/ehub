import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILine } from "../../../models/Line";

interface IRoomState {
    lines?: ILine[]
}

const initialState: IRoomState = {
    lines: []
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        addNewLine: (state, action: PayloadAction<ILine>) => {
            state.lines?.push(action.payload)
        },
        deleteLine: (state, action: PayloadAction<ILine>) => {
            // state.lines?.reduce((pr))
        }
    }
})