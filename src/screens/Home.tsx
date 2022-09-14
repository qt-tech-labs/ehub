import React from "react"
import { useState } from "react"
import Line from "./components/Line"
import MockProvider from "../data/mocks/MockProvider"
import { IoAddCircleOutline } from "react-icons/io5"
import Constants from "../utils/Constants"
import { useAppSelector } from "../data/states/hooks"
import { selectClassLines, selectCurrentClass } from "../data/states/features/class/classSlice"
import ClassPill from "./components/ClassPill"


const Home = () => {

    const [classes, setClasses] = useState(MockProvider.Classes)

    const currentClass = useAppSelector(selectCurrentClass)

    const currentLines = useAppSelector(selectClassLines)

    const generateTables = () => {
        const content = currentLines.map((line) => {
            return (
                <>
                    <Line {...line} />
                    <div className="bg-gray-300 h-[2px]" />
                </>
            )
        })
        return content
    }
    return (
        <div className='bg-white flex flex-col p-2 md:p-10'>
            <div className="flex flex-row py-2 px-5 items-center">
                <span className='text-2xl font-bold'>Sơ đồ lớp</span>
                <div className="flex-1 flex flex-row">
                    {
                        classes.map((cla) => (<ClassPill classRoom={cla} />))
                    }
                </div>
            </div>

            {currentClass && (generateTables())}

            {/* Add button */}

            <div className="flex items-center justify-center flex-col rounded-md bg-primary hover:scale-[1.03] transition-all shadow-lg mt-5 py-10 shadow-primary cursor-pointer">
                <IoAddCircleOutline size={35} color={Constants.Colors.secondary} />
                <span className="text-secondary">Thêm hàng mới</span>
            </div>

            {/* End of add button */}

        </div>
    )

}

export default Home