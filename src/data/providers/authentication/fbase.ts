import { initializeApp } from 'firebase/app'
import { Auth, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, User } from 'firebase/auth'
import Constants from '../../../utils/Constants'
import { IUser } from '../../models/IUser'

export enum LoginMethod {
    Email,
    GG,
    FB
}

type AuthenResult = (result: IUser | null, message?: string) => void

export interface IAuthentication {
    login(method: LoginMethod, data: any, onResult: AuthenResult): void
    signUp(email: string, pwd: string, onResult: AuthenResult): void
    resetPwd(email: string, onResult: AuthenResult): void
}



export class FirebaseAuthen implements IAuthentication {
    private static _instance: IAuthentication

    public static GetInstance(): IAuthentication {
        if (!this._instance) {
            this._instance = new FirebaseAuthen()
        }
        return this._instance
    }

    auth: Auth

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
        // Obsever the changes
        onAuthStateChanged(this.auth, user => {
            if (user) {
                localStorage.setItem(Constants.StorageKey.user, JSON.stringify(user))
            }
        })
    }
    signUp(email: string, pwd: string, onResult: AuthenResult): void {
        createUserWithEmailAndPassword(this.auth, email, pwd)
            .then((user) => {
                onResult(user.user as IUser)
            })
            .catch(error => {
                onResult(null, error.message)
            })
    }
    resetPwd(email: string, onResult: AuthenResult): void {
        throw new Error('Method not implemented.')
    }
    login(method: LoginMethod, data: any, onResult: AuthenResult): void {
        switch (method) {
            case LoginMethod.Email:
                signInWithEmailAndPassword(this.auth, data.email, data.pwd)
                    .then((user) => {
                        onResult(user.user as IUser)
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
                        onResult(user.user as IUser)
                    })
                    .catch(error => {
                        onResult(null, error.message)
                    })
                break
        }
    }

}