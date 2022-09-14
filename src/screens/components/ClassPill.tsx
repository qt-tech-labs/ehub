import React from "react"
import { IClass } from "../../data/models/IClass"
import { selectCurrentClass, setCurrentClass } from "../../data/states/features/class/classSlice"
import { useAppDispatch, useAppSelector } from "../../data/states/hooks"

type ClassPillTypes = {
    classRoom: IClass
}

const ClassPill = ({ classRoom }: ClassPillTypes) => {
    const appDispatch = useAppDispatch()
    const currentClass = useAppSelector(selectCurrentClass)
    return (
        <span onClick={() => {
            appDispatch(setCurrentClass(classRoom))
        }} className={`hover:scale-[1.2] transition-all cursor-pointer mx-2 px-5 py border-2 ${classRoom.id == currentClass?.id ? 'border-secondary text-secondary scale-[1.2]' : 'border-primary text-primary'} rounded-full shadow-lg`}>
            {classRoom.name}
        </span>
    )
}

export default ClassPill