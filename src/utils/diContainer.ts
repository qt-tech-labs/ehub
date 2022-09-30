import { ILocalStorage, LocalStorage } from "../data/providers/LocalStorage"
import { FirebaseAuthen, IAuthentication } from "../data/providers/authentication/fbase"
import Constants from "./Constants"
import { RestDefault } from "../data/providers/api/Rest"
import IRest from "../data/providers/api/IRest"

export interface IDIHub {
    storage: ILocalStorage
    authentication: IAuthentication
    restAPI: IRest
}

export const DIHub: IDIHub = {
    storage: LocalStorage.GetInstance(),
    authentication: FirebaseAuthen.GetInstance(),
    restAPI: RestDefault.GetInstance()
}

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
