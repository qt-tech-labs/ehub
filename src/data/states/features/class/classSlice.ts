import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClass } from "../../../models/IClass";
import { ILine } from "../../../models/Line";
import { IStudent } from "../../../models/Student";
import { RootState } from "../../store";

interface IClassState {
    lines?: ILine[]
    currentEditingStudent?: IStudent
    currentClass?: IClass

}

const initialState: IClassState = {
    lines: [],
    currentEditingStudent: undefined,
    currentClass: undefined
}

export const classSlice = createSlice({
    name: 'classR',
    initialState,
    reducers: {
        addNewLine: (state, action: PayloadAction<ILine>) => {
            state.lines?.push(action.payload)
        },
        deleteLine: (state, action: PayloadAction<ILine>) => {
            // state.lines?.reduce((pr))
        },
        setEditingStudent: (state, action?: PayloadAction<IStudent | undefined>) => {
            console.log("setEditingStudent invoked! ", action?.payload ?? "Reset to null")
            state.currentEditingStudent = action?.payload
        },
        setCurrentClass: (state, action?: PayloadAction<IClass | undefined>) => {
            console.log("setCurrentClass invoked! ", action?.payload ?? "Reset to null")
            state.currentClass = action?.payload
        }
    }
})


export const { setEditingStudent, setCurrentClass } = classSlice.actions

export const selectCurrentEdittingStudent = (state: RootState) => state.classR.currentEditingStudent
export const selectCurrentClass = (state: RootState) => state.classR.currentClass

export const selectClassLines = (state: RootState) => {
    const lines: Array<ILine> = []
    state.classR.currentClass?.tables.forEach((item) => {
        const firstIndex = lines.findIndex((line => line.position === item.line))
        if (firstIndex < 0) {
            const line: ILine = {
                position: item.line,
                tables: [item]
            }
            lines.push(line)
        } else {
            lines[firstIndex].tables.push(item)
        }
    })
    return lines
}
//
export default classSlice.reducer