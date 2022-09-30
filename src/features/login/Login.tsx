import React from 'react'
import { useState } from 'react'
import { AiFillFacebook, AiFillGoogleSquare, AiFillTwitterSquare } from 'react-icons/ai'
import { setCurrentUser } from './loginSlice'
import { useAppDispatch } from '../../hooks'
import { IAuthentication, IUser, LoginMethod } from '../../data/providers/authentication/fbase'
import Button from '../../components/Button'
import EditText from '../../components/EditText'

type SocialButtonProps = {
    icon: any,
    title: string,
    color: string,
    customClass?: string
    onClick?: () => void
}
export const SocialButton = ({ icon, title, color, customClass, onClick }: SocialButtonProps) => {
    return (
        <div onClick={onClick} style={{
            backgroundColor: color
        }} className={` cursor-pointer rounded-xl p-3 flex flex-row self-center w-72 ${customClass}`}>
            {
                React.createElement(icon, { color: 'white', size: 25 })
            }
            <span className='text-white'>{title}</span>
        </div>
    )
}

type LoginProps = {
    authenticationService: IAuthentication<IUser>
}

const Login = ({ authenticationService }: LoginProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const appDispatch = useAppDispatch()
    return (
        <div className='bg-gray-300 min-w-full min-h-screen flex flex-row items-center justify-center'>
            <div className='flex flex-col items-center bg-white rounded-xl w-5/6 md:m-1/2 '>
                <span className='font-bold text-2xl text-secondary uppercase md:my-5 my-2'>Vui lòng đăng nhập để bắt đầu</span>
                <div className='flex flex-row'>
                    <div className='flex-1 flex flex-col p-10'>
                        <SocialButton title='Start with Facebook' icon={AiFillFacebook} color="#567ABE" />
                        <SocialButton onClick={() => {
                            authenticationService.login(LoginMethod.GG, {}, (result, message) => {
                                console.log("Got user:", result, message)
                                if (result != null) {
                                    appDispatch(setCurrentUser(result))
                                } else {
                                    // False
                                }
                            })
                        }} title='Start with Google' icon={AiFillGoogleSquare} color="#DC5650" customClass='my-5' />
                        <SocialButton title='Start with Twitter' icon={AiFillTwitterSquare} color="#69CAEF" />
                    </div>
                    <div className='bg-gray-300 w-[0.05rem] mx-2' />
                    <div className='flex flex-1 flex-col px-5'>
                        <EditText type='email' placeholder='user@email.com' title='Email' content={email} onContentChange={setEmail} className='' />
                        <EditText type='password' placeholder="・・・・・・・" title='Password' content={password} onContentChange={setPassword} className='' />
                        <Button title='Login' bg='bg-green-500' onClick={() => {
                            authenticationService.login(LoginMethod.Email, { email, pwd: password }, (result, message) => {
                                console.log("Logging in=>", result, message)
                            })
                        }} className='my-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login