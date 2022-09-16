import { ITable } from "./Table";

export enum LinePosition {
    First = 1,
    Second,
    Third,
    Fourth,
    Fiveth
}

export interface ILine {
    position: LinePosition
    tables: ITable[]
}