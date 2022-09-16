import React from "react"
import { useState } from "react"
import Line from "./components/Line"
import MockProvider from "../data/mocks/MockProvider"
import { IoCheckmarkCircleOutline as CheckMark, IoStopCircleOutline as StopIcon } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../data/states/hooks"
import { selectClassLines, selectCurrentClass, setEditingStudent } from "../data/states/features/class/classSlice"
import ClassPill from "./components/ClassPill"

type Rolling = {
    active: Boolean
    backgroundColor: string
    text: any,
    icon: any
}

const Home = () => {
    const prepare: Rolling = {
        active: false,
        backgroundColor: "bg-green-500",
        text: (<>Điểm<br />Danh</>),
        icon: CheckMark
    }
    const isRolling: Rolling = {
        active: true,
        backgroundColor: "bg-red-500",
        text: (<>Dừng<br />Lại</>),
        icon: StopIcon
    }

    const [classes, setClasses] = useState(MockProvider.Classes)
    const [lineIndex, setLineIndex] = useState(0)
    const [tableIndex, setTableIndex] = useState(0)
    const [studentIndex, setStudentIndex] = useState(0)
    const [rooling, setRolling] = useState(prepare)

    const appDispatch = useAppDispatch()

    const currentClass = useAppSelector(selectCurrentClass)

    const currentLines = useAppSelector(selectClassLines)

    const numberOfLine = currentLines.length

    const generateLines = () => {
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

    // Start to count the students
    const onCheckRoll = () => {
        if (rooling.active) {// Reset to the display mode
            setStudentIndex(0)
            setTableIndex(0)
            setLineIndex(0)
            appDispatch(setEditingStudent())
            setRolling(prepare)
        } else {
            setRolling(isRolling)
            // Set the first student of the first line
            appDispatch(setEditingStudent(currentLines[lineIndex].tables[tableIndex].students![studentIndex]))
            setStudentIndex(studentIndex + 1)
        }
    }

    // On checking the absence
    const onRoll = () => {
        console.log(lineIndex, tableIndex, studentIndex)
        if (lineIndex < numberOfLine) {
            const tableLength = currentLines[lineIndex].tables.length
            if (tableIndex < currentLines[lineIndex].tables.length) {
                if (currentLines[lineIndex].tables[tableIndex].students && studentIndex < currentLines[lineIndex].tables[tableIndex].students!.length) {
                    appDispatch(setEditingStudent(currentLines[lineIndex].tables[tableIndex].students![studentIndex]))
                    setStudentIndex(studentIndex + 1)
                } else {
                    if (tableIndex >= tableLength - 1) {
                        // Swicth line
                        switchLine()
                    } else {
                        // Switch table
                        appDispatch(setEditingStudent(currentLines[lineIndex].tables[tableIndex + 1].students![0]))
                        setStudentIndex(1)
                        setTableIndex(tableIndex + 1)
                    }
                }
            } else {
                // Switch Line
                switchLine()
            }
        } else { // After all, reset them to the init value `0`
            setStudentIndex(0)
            setTableIndex(0)
            setLineIndex(0)
            appDispatch(setEditingStudent())
        }

        function switchLine() {
            appDispatch(setEditingStudent(currentLines[lineIndex + 1].tables[0].students![0]))
            setStudentIndex(1)
            setTableIndex(0)
            setLineIndex(lineIndex + 1)
        }
    }

    return (
        <div className='bg-white flex flex-col p-2 md:p-10 relactive'>
            <div className="flex flex-row py-2 px-5 items-center">
                <span className='text-2xl font-bold'>Sơ đồ lớp</span>
                <div className="flex-1 flex flex-row overflow-scroll h-20 items-center justify-center pl-5">
                    {
                        classes.map((cla) => (<ClassPill classRoom={cla} />))
                    }
                </div>
            </div>

            {currentClass && (generateLines())}

            {/* Add button */}

            {/* <div className="flex items-center justify-center flex-col rounded-md bg-primary hover:scale-[1.03] transition-all shadow-lg mt-5 py-10 shadow-primary cursor-pointer">
                <IoAddCircleOutline size={35} color={Constants.Colors.secondary} />
                <span className="text-secondary">Thêm hàng mới</span>
            </div> */}

            {/* End of add button */}
            <div className="flex flex-col items-center justify-center absolute right-3 h-full">
                <span onClick={onCheckRoll} className={`text-white ${rooling.backgroundColor} rounded uppercase py-5 px-3 text-md font-bold flex flex-col items-center cursor-pointer text-center transition-all duration-1000`}> {React.createElement(rooling.icon, { size: 30 })}{rooling.text}</span>
                {
                    rooling && (
                        <div className="flex flex-row mt-2">
                            <span onClick={onRoll} className="bg-red-500 p-2 rounded mr-1 w-14 uppercase cursor-pointer text-white text-center transition-all">Vắng</span>
                            <span className="bg-primary text-white rounded p-2 ml-1 w-14 uppercase cursor-pointer text-center">Có</span>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default Home