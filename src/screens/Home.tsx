import React, { useEffect } from "react"
import { useState } from "react"
import { ILine } from "../data/models/Line"
import Line from "./components/Line"
import MockProvider from "../data/mocks/MockProvider"
import { IoAddCircleOutline } from "react-icons/io5"
import Constants from "../utils/Constants"


type HomeState = {
    lines: ILine[]
}

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        lines: []
    }
    componentDidMount(): void {
        this.setState({
            lines: MockProvider.Lines()
        })
    }

    render(): React.ReactNode {

        return (
            <div className='bg-white flex flex-col p-2 md:p-10'>
                <span className='text-2xl font-bold'>Table diagram</span>

                {
                    this.state.lines.map((line) => {
                        return (
                            <>
                                <Line {...line} />
                                <div className="bg-gray-300 h-[2px]" />
                            </>
                        )
                    })
                }

                {/* Add button */}

                <div className="flex items-center justify-center flex-col rounded-md bg-primary hover:scale-[1.03] transition-all shadow-lg mt-5 py-10 shadow-primary cursor-pointer">
                    <IoAddCircleOutline size={35} color={Constants.Colors.secondary} />
                    <span className="text-secondary">Thêm hàng mới</span>
                </div>
            </div>
        )
    }

}

export default Home