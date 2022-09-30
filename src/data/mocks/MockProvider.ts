import { v4 as uuidv4 } from "uuid";
import { IClass } from "../models/IClass";
import { LinePosition } from "../models/Line"
import { ITable } from "../models/Table"
import tableJson from './table_test.json'
import classJson from './class_test.json'
import { faker } from "@faker-js/faker";
import { IStudent } from "../models/Student";

faker.locale = 'vi'

function createStudent(student: IStudent) {
    student.uid = uuidv4()
    const sType = faker.name.sexType()
    student.gender = sType
    student.fullname = faker.name.fullName({
        sex: sType
    })
    student.address = faker.address.streetAddress(true)
    student.isAbsenced = Math.random() < 0.2
}
function getTables(classId: string, line: LinePosition) {
    var index = 1
    const tables: ITable[] = []
    while (index < 13) {

        // Json parse is the best way to pass object as value in JS
        const table = JSON.parse(JSON.stringify(tableJson)) as ITable

        table.classID = classId
        table.line = line
        table.position = index

        createStudent(table.students![0])
        createStudent(table.students![1])
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

        const classInstance = JSON.parse(JSON.stringify(classJson)) as IClass
        classInstance.uid = classID
        classInstance.lines = 5
        classInstance.name = "Lớp " + index
        var classTables: ITable[] = []
        for (const key of [LinePosition.First, LinePosition.Second, LinePosition.Third, LinePosition.Fourth, LinePosition.Fiveth]) {
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
}

export default MockProvider