import { v4 as uuidv4 } from "uuid";
import { IClass } from "../models/IClass";
import { ILine, LinePosition } from "../models/Line"
import { ITable } from "../models/Table"
import tableJson from './table_test.json'
import classJson from './class_test.json'

function getTables(classId: string, line: LinePosition) {
    var index = 1
    const tables: ITable[] = []
    while (index < 12) {

        // Json parse is the best way to pass object as value in JS
        const table = <ITable>JSON.parse(JSON.stringify(tableJson))

        table.classID = classId
        table.line = line
        table.position = index
        table.students!.at(0)!.id = uuidv4()
        table.students!.at(0)!.name = "Sample " + index + "-1"
        table.students!.at(0)!.isAbsenced = Math.random() < 0.2

        table.students!.at(1)!.id = uuidv4()
        table.students!.at(1)!.name = "Sample " + index + "-2"
        table.students!.at(1)!.isAbsenced = Math.random() < 0.4
        tables.push(table)

        index += 1
    }
    return tables
}

function getClasses() {
    var index = 1
    const clasess: IClass[] = []
    while (index < 13) {
        console.log("Index:", index)
        const classID = uuidv4()

        const classInstance = <IClass>JSON.parse(JSON.stringify(classJson))
        classInstance.id = classID
        classInstance.lines = 5
        classInstance.name = "Lớp " + index
        var classTables: ITable[] = []
        const keys: (keyof typeof LinePosition)[] = <(keyof typeof LinePosition)[]>Object.keys(LinePosition);
        for (const key of [LinePosition.First, LinePosition.Second, LinePosition.Third, LinePosition.Fourth, LinePosition.Fiveth]) {
            const xadf = LinePosition[key];
            const tables = getTables(classID, Number(key))
            classTables.push(...tables)
        }
        classInstance.tables = classTables

        clasess.push(classInstance)
        index += 1
    }
    return clasess
}

const MockProvider = {

    Classes: getClasses()

    // Lines: (): ILine[] => {

    //     const lines = [1, 2, 3, 4].map(ind => {
    //         console.log(ind)
    //         return {
    //             id: "" + ind,
    //             position: LinePosition.First,
    //             tables: getTables()
    //         } as ILine
    //     })
    //     return lines
    // }
}

export default MockProvider