import { LocalStorage } from "../data/providers/LocalStorage"
import { FirebaseAuthen } from "../data/providers/authentication/fbase"
import Constants from "./Constants"

const createContainer = () => {
    let container = new DependencyInjectionContainer()
    container.registerService(Constants.ServiceNames.storage, (c: any) => LocalStorage.GetInstance())
    container.registerService(Constants.ServiceNames.authentication, (c: any) => FirebaseAuthen.GetInstance())
    return container
}
export class DependencyInjectionContainer {
    services: any
    constructor() {
        this.services = {}
    }
    registerService(name: string, cb: any) {
        Object.defineProperty(this, name, {
            get: () => {
                if (!this.services.hasOwnProperty(name)) {
                    this.services[name] = cb(this)
                }
                return this.services[name]
            },
            configurable: true,
            enumerable: true
        })
        return this
    }
}
export default createContainer
