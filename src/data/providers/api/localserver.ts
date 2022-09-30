import { belongsTo, createServer, Factory, hasMany, Model } from 'miragejs'
import { faker } from '@faker-js/faker'
import { IClass } from '../../models/IClass'
import { IStudent } from '../../models/Student'
import { uuidv4 } from '@firebase/util'


createServer({
    models: {
        class: Model.extend({
            students: hasMany()
        }),
        student: Model.extend({
            class: belongsTo()
        })
    },
    routes() {
        this.namespace = 'api'
        this.urlPrefix = 'https://localhost:5000'
    }
})