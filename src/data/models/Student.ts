import { ICommon } from "./Common"

interface IStrike extends ICommon {
    title: string
}

export interface IStudent extends ICommon {
    name: string
    strikes?: IStrike[]
    isAbsenced: Boolean
}