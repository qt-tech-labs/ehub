import { ICommon } from "./Common";
import { ITable } from "./Table";

export interface IClass extends ICommon {
    name: string,
    lines: number,
    tables: ITable[]
}