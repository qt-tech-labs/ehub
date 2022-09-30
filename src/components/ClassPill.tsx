import React from "react"
import { IClass } from "../data/models/IClass"
import { selectCurrentClass, setCurrentClass } from "../features/home/homeSlice"
import { useAppDispatch, useAppSelector } from "../hooks"

type ClassPillTypes = {
    classRoom: IClass
}

const ClassPill = ({ classRoom }: ClassPillTypes) => {
    const appDispatch = useAppDispatch()
    const currentClass = useAppSelector(selectCurrentClass)
    return (
        <div key={classRoom.uid} onClick={() => {
            appDispatch(setCurrentClass(classRoom))
        }} className={`text-center hover:scale-[1.2] w-[8rem] transition-all cursor-pointer mx-2 px-5 py border-2 ${classRoom.uid === currentClass?.uid ? 'border-secondary text-secondary scale-[1.2]' : 'border-primary text-primary'} rounded-full shadow-lg`}>
            {classRoom.name}
        </div>
    )
}

export default ClassPill