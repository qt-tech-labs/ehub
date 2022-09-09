import React, { useEffect } from "react"
import { useState } from "react"
import { ILine } from "../data/models/Line"
import Line from "./components/Line"
import MockProvider from "../data/mocks/MockProvider"


const Home = () => {
    const [lines, setLines] = useState<ILine[] | null>()

    useEffect(() => {
        const mockLines = MockProvider.Lines()
        setLines(mockLines)
    }, [])

    return (
        <div className='bg-white flex flex-col p-2 md:p-10'>
            <span className='text-2xl font-bold'>Table diagram</span>

            {
                lines?.map((line) => {
                    return (
                        <>
                            <Line {...line} />
                            <div className="bg-gray-300 h-[2px]" />
                        </>
                    )
                })
            }

        </div>
    )
}

export default Home