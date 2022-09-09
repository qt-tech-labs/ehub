import React from 'react'
import { ILine } from '../../data/models/Line'
import Table from './Table'
const Line = (line: ILine) => {
    return (
        <div className='flex overflow-scroll my-3'>
            {
                line ? (
                    line.tables.map(table => {
                        return (
                            <Table table={table} customeClass="mx-2" />
                        )
                    })
                ) : "N/A"
            }
        </div>
    )
}

export default Line