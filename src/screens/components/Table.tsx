import React from 'react'
import { AiOutlineSolution } from 'react-icons/ai'
import { IStudent } from '../../data/models/Student'
import { ITable } from '../../data/models/Table'
import { selectCurrentEdittingStudent, setEditingStudent } from '../../data/states/features/class/classSlice'
import { useAppDispatch, useAppSelector } from '../../data/states/hooks'
import styles from './table.module.css'

type TableProps = {
    table?: ITable
    customeClass?: string
}

type SeatProps = {
    student: IStudent
    isFirst: Boolean

}

const Seat = ({ student, isFirst }: SeatProps) => {
    const dispatch = useAppDispatch()
    const currentStudent = useAppSelector(selectCurrentEdittingStudent)

    const onSeatClick = (student: IStudent) => {
        console.log("Clicked!")
        dispatch(setEditingStudent(student))
    }
    // const wave =${currentStudent?.id == student.id ? styles.activeStudent : ''} 
    const basicCss = "w-14 h-14 rounded-full object-cover shadow-lg border border-white"
    const textCss = "cursor-pointer items-center bg-green-700 w-full h-0 group-hover:h-fit opacity-0 group-hover:opacity-100 flex flex-row p-2 absolute bottom-0 transition-all"

    return (
        <div className={`relative group ${student.isAbsenced ? 'bg-secondary' : ''} ${isFirst ? 'rounded-t-md' : 'rounded-b-md'} flex flex-col justify-center items-center flex-1 w-32 transition-all`}>
            <div className={`${student.id == currentStudent?.id ? styles.activeStudent : ''} bg-white w-14 h-14 rounded-full absolute top-5`} />
            {/* <div className='bg-black w-16 h-16 rounded-full absolute top-5' />
            <div className='bg-black w-16 h-16 rounded-full absolute top-5' /> */}
            <img src={"https://picsum.photos/200/300"}
                alt="avatar"
                className={` absolute  ${basicCss}  top-5`} />
            <span className={`text-lg transition-all mt-auto`}>
                {student.name}
            </span>
            <div onClick={() => {
                onSeatClick(student)
            }} className={`${isFirst ? 'rounded-t-md' : 'rounded-b-md'} ${textCss}`}>
                <AiOutlineSolution className='text-white hover:text-white' />
                <span className='text-white'>View details</span>
            </div>
        </div>
    )
}

const Table = ({ table, customeClass }: TableProps) => {
    return (
        <div className={`flex flex-col rounded-md bg-slate-600 h-[10rem] md:h-[15rem] transition-all ${customeClass}`}>
            {(table?.students && table.students?.length > 0) &&
                (
                    <>
                        <Seat student={table.students[0]} isFirst={true} />
                        {
                            table.students[1] &&
                            (
                                <>
                                    <div className='bg-secondary h-1 my-1 w-5/6 self-center' />
                                    <Seat student={table.students[1]} isFirst={false} />
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default Table