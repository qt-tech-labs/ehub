import React from 'react'
import { AiFillFacebook, AiFillGoogleSquare, AiFillTwitterSquare } from 'react-icons/ai'

type SocialButtonProps = {
    icon: any,
    title: string,
    color: string,
    customClass?: string
}
export const SocialButton = ({ icon, title, color, customClass }: SocialButtonProps) => {
    return (
        <div className={`bg-[${color}] rounded-xl p-3 flex flex-row self-center w-72 ${customClass}`}>
            {
                React.createElement(icon, { color: 'white', size: 25 })
            }
            <span className='text-white'>{title}</span>
        </div>
    )
}

const Login = () => {
    return (
        <div className='bg-gray-300 min-w-full min-h-screen flex flex-row items-center justify-center'>
            <div className='bg-white rounded-xl w-5/6 md:m-1/2 flex flex-row'>
                <div className='flex-1 flex flex-col p-10'>
                    <SocialButton title='Start with Facebook' icon={AiFillFacebook} color="#567ABE" />
                    <SocialButton title='Start with Google' icon={AiFillGoogleSquare} color="#DC5650" customClass='my-5' />
                    <SocialButton title='Start with Twitter' icon={AiFillTwitterSquare} color="#69CAEF" />
                </div>
                <div className='bg-gray-300 w-[0.05rem] mx-2' />
                <div className='flex flex-1 flex-col'>

                </div>
            </div>
        </div>
    )
}

export default Login