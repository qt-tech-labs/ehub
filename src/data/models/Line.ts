import { ICommon } from "./Common";
import { ITable } from "./Table";

export enum LinePosition {
    First = 1,
    Second,
    Third,
    Fourth,
    Fiveth
}

export interface ILine extends ICommon {
    position: LinePosition
    tables: ITable[]
}