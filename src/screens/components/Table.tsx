import React from 'react'
import { AiOutlineEdit, AiOutlineSolution } from 'react-icons/ai'
import { IStudent } from '../../data/models/Student'
import { ITable } from '../../data/models/Table'
import { setEditingStudent } from '../../data/states/features/class/classSlice'
import { useAppDispatch } from '../../data/states/hooks'

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
    const onSeatClick = (student: IStudent) => {
        console.log("Clicked!")
        dispatch(setEditingStudent(student))
    }
    return (
        <div className={`group ${student.isAbsenced ? 'bg-secondary' : ''} ${isFirst ? 'rounded-t-md' : 'rounded-b-md'} flex flex-col justify-center items-center flex-1 w-32 hover:scale-[1.07] transition-all`}>
            <span className={` group-hover:font-bold text-lg transition-all`}>{student.name}</span>
            <div className='group-hover:opacity-100 opacity-0 flex flex-row border px-2 py-[0.1rem] border-gray-400 rounded-md transition-opacity'>
                <AiOutlineSolution className='cursor-pointer text-gray-400 hover:text-white' onClick={() => {
                    onSeatClick(student)
                }} />
                <AiOutlineEdit className='cursor-pointer text-gray-400 hover:text-white' />
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