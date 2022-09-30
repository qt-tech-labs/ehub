import { ICommon } from "./Common"
import { IClass } from "./IClass"
import { IUser } from "./IUser"

interface IStrike extends ICommon {
    title: string
}

export interface IStudent extends ICommon, IUser {
    strikes?: IStrike[]
    isAbsenced: Boolean
    class: IClass
}