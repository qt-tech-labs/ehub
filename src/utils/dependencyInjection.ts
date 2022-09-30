import { ILocalStorage, LocalStorage } from "../data/providers/LocalStorage";
import { FirebaseAuthen, IAuthentication } from "../data/providers/authentication/fbase";
import { TestStorage } from "../data/providers/TestStorage";

interface IDependencyInjection {
    storageService: ILocalStorage,
    authenticationService: IAuthentication
}

export const DefaultDI: IDependencyInjection = {
    storageService: LocalStorage.GetInstance(),
    authenticationService: FirebaseAuthen.GetInstance()
}

export const TestDI: IDependencyInjection = {
    storageService: new TestStorage(),
    authenticationService: FirebaseAuthen.GetInstance()
}

export default DefaultDI