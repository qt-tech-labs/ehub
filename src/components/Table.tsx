import React from 'react'
import { ITable } from '../data/models/Table'

type TableProps = {
    table?: ITable
    customeClass?: string
}

const Table = ({ table, customeClass }: TableProps) => {
    return (
        <div className={`flex flex-col rounded-md bg-slate-600 h-[10rem] md:h-[15rem] transition-all ${customeClass}`}>
            {(table?.students && table.students?.length > 0) &&
                (
                    <>
                        <div className={`${table.students[0].isAbsenced ? 'bg-secondary' : ''} rounded-t-md flex justify-center items-center flex-1`}>
                            {table.students[0].name}
                        </div>
                        {
                            table.students[1] &&
                            (
                                <>
                                    <div className='bg-secondary h-1 my-1' />
                                    <div className={`${table.students[1].isAbsenced ? 'bg-secondary' : ''} rounded-b-md flex justify-center items-center flex-1`}>
                                        {table.students[1].name}
                                    </div>
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