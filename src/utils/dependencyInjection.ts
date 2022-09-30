import { ILocalStorage, LocalStorage } from "../data/providers/LocalStorage";
import { FirebaseAuthen, IAuthentication, IUser } from "../data/providers/authentication/fbase";
import { TestStorage } from "../data/providers/TestStorage";

interface IDependencyInjection<T> {
    storageService: ILocalStorage,
    authenticationService: IAuthentication<T>
}

export const DefaultDI: IDependencyInjection<IUser> = {
    storageService: LocalStorage.GetInstance(),
    authenticationService: FirebaseAuthen.GetInstance()
}

export const TestDI: IDependencyInjection<IUser> = {
    storageService: new TestStorage(),
    authenticationService: FirebaseAuthen.GetInstance()
}

export default DefaultDI