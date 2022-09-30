import { Dictionary } from "@reduxjs/toolkit";
import { ICommon } from "./Common";
import { IStudent } from "./Student";
import { ITable } from "./Table";

export interface IClass extends ICommon {
    name: string,
    lines: number,
    tables: ITable[],
    students: Dictionary<IStudent>
}