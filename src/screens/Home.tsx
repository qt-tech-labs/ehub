import React from "react"
import { useState } from "react"
import Table from "../components/Table"
import { ITable } from "../data/models/Table"


const Home = () => {
    const [tables, setTables] = useState<ITable[] | null>([
        {
            students: [
                {
                    id: "1",
                    name: "Jimmy",
                    isAbsenced: false
                }
            ]
        },
        {
            students: [
                {
                    id: "3",
                    name: "ahdlkaf",
                    isAbsenced: false
                },
                {
                    id: "4",
                    name: "kajdlfmmy",
                    isAbsenced: true
                }
            ]
        },
        {
            students: [
                {
                    id: "5",
                    name: "892374wue",
                    isAbsenced: false
                },
                {
                    id: "6",
                    name: "ahdkfha324",
                    isAbsenced: false
                }
            ]
        },
        {
            students: [
                {
                    id: "7",
                    name: "2uojelnfsd ",
                    isAbsenced: false
                },
                {
                    id: "8",
                    name: "20398sjldv sd",
                    isAbsenced: false
                }
            ]
        },
        {
            students: [
                {
                    id: "9",
                    name: "198kdnf3sdv",
                    isAbsenced: false
                },
                {
                    id: "10",
                    name: "aiudfo32nk dkv fd",
                    isAbsenced: false
                }
            ]
        }
    ])

    return (
        <div className='bg-white flex flex-col p-2 md:p-10'>
            <span className='text-2xl font-bold'>Tables</span>

            <div className='grid grid-cols-4 gap-4'>
                {
                    tables?.map((table) => {
                        return (
                            <Table table={table} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home