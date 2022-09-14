import { ICommon } from "./Common";
import { LinePosition } from "./Line";
import { IStudent } from "./Student";

export interface ITable extends ICommon {
    classID: string,
    line: LinePosition,
    position: number,
    students?: IStudent[]
}
