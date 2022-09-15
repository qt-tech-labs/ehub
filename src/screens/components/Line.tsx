import React from 'react'
import { ILine } from '../../data/models/Line'
import Table from './Table'
const Line = (line: ILine) => {
    return (
        <div className='flex flex-row items-center'>
            <span className='font-bold text-5xl text-light-gray'>{line.position}</span>
            <div className='flex flex-1 overflow-scroll my-3 py-5'>
                {
                    line ? (
                        line.tables.map(table => {
                            return (
                                <Table key={table.id} table={table} customeClass="mx-2" />
                            )
                        })
                    ) : "N/A"
                }
            </div>
        </div>
    )
}

export default Line