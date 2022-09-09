import React from 'react'
import { IStudent } from '../../data/models/Student'
import { ITable } from '../../data/models/Table'

type TableProps = {
    table?: ITable
    customeClass?: string
}

type SeatProps = {
    student: IStudent
    isFirst: Boolean

}

const Seat = ({ student, isFirst }: SeatProps) => {
    return (
        <div className={`${student.isAbsenced ? 'bg-secondary' : ''} hover:scale-[1.07] transition-all cursor-pointer ${isFirst ? 'rounded-t-md' : 'rounded-b-md'}  flex justify-center items-center flex-1 w-32`}>
            {student.name}
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