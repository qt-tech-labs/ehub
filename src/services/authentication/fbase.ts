import { initializeApp } from 'firebase/app'
import { Auth, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, User } from 'firebase/auth'
import Constants from '../../utils/Constants'

export enum LoginMethod {
    Email,
    GG,
    FB
}

export interface IUser extends User {
}

type AuthenResult<T> = (result: T | null, message?: string) => void

export interface IAuthentication<T> {
    currentUser: T | null
    login(method: LoginMethod, data: any, onResult: AuthenResult<T>): void
    signUp(email: string, pwd: string, onResult: AuthenResult<T>): void
    resetPwd(email: string, onResult: AuthenResult<string>): void
}



export class FirebaseAuthen implements IAuthentication<User> {
    private static _instance: IAuthentication<User>

    public static GetInstance(): IAuthentication<User> {
        if (!this._instance) {
            this._instance = new FirebaseAuthen()
        }
        return this._instance
    }

    auth: Auth
    currentUser: User | null

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyAYz4IvL7zL6leN8JGyrky7MF3YdNdlVVQ",
            authDomain: "ehub-40e83.firebaseapp.com",
            projectId: "ehub-40e83",
            storageBucket: "ehub-40e83.appspot.com",
            messagingSenderId: "285425421161",
            appId: "1:285425421161:web:b4d979cc17a9ca0a72cbf8"
        };
        const app = initializeApp(firebaseConfig)
        this.auth = getAuth(app)
        this.auth.useDeviceLanguage()
        this.currentUser = null
        // Obsever the changes
        onAuthStateChanged(this.auth, user => {
            if (user) {
                localStorage.setItem(Constants.StorageKey.user, JSON.stringify(user))
            }
        })
    }
    signUp(email: string, pwd: string, onResult: AuthenResult<IUser>): void {
        createUserWithEmailAndPassword(this.auth, email, pwd)
            .then((user) => {
                onResult(user.user)
            })
            .catch(error => {
                onResult(null, error.message)
            })
    }
    resetPwd(email: string, onResult: AuthenResult<string>): void {
        throw new Error('Method not implemented.')
    }
    login(method: LoginMethod, data: any, onResult: AuthenResult<User>): void {
        switch (method) {
            case LoginMethod.Email:
                signInWithEmailAndPassword(this.auth, data.email, data.pwd)
                    .then((user) => {
                        onResult(user.user)
                    })
                    .catch(error => {
                        onResult(null, error.message)
                    })
                break

            case LoginMethod.FB:
                //None
                break

            case LoginMethod.GG:
                const provider = new GoogleAuthProvider()
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

                signInWithPopup(this.auth, provider)
                    .then((user) => {
                        onResult(user.user)
                    })
                    .catch(error => {
                        onResult(null, error.message)
                    })
                break
        }
    }

}