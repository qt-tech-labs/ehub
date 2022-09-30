import { ICommon } from "./Common"

export interface IUser extends ICommon {
    email: string
    fullname?: string
    displayName?: string
    gender?: string
    phoneNumber?: string
    photoURL?: string
    address?: string
}