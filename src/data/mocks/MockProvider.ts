import { v4 as uuidv4 } from "uuid";
import { ILine, LinePosition } from "../models/Line"
import { ITable } from "../models/Table"
import json from './table_test.json'

function getTables(line: number = 0) {
    var index = 1
    const tables: ITable[] = []
    while (index < 12) {

        // Json parse is the best way to pass object as value in JS
        const table = <ITable>JSON.parse(JSON.stringify(json))

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

const MockProvider = {
    Lines: (): ILine[] => {

        const lines = [1, 2, 3, 4].map(ind => {
            console.log(ind)
            return {
                id: "" + ind,
                position: LinePosition.First,
                tables: getTables()
            } as ILine
        })
        return lines
    }
}

export default MockProvider