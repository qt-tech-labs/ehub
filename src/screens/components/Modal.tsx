import React, { useCallback, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { setEditingStudent } from '../../data/states/features/class/classSlice'
import { useAppDispatch } from '../../data/states/hooks'

type ModalProps = {
    content?: any,
    ref?: any
}

const Modal = ({ content }: ModalProps) => {
    const appDispatch = useAppDispatch()

    const closeModal = () => {
        appDispatch(setEditingStudent())
    }

    const escFunction = useCallback((event: { key: string }) => {
        if (event.key === "Escape") {
            console.log("Key press", event.key)
            //Do whatever when esc is pressed
            closeModal()
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);


    return (
        <div className={` ${content ? 'flex opacity-100' : 'hidden opacity-0'} transition-all duration-1000 absolute top-0 left-0 w-full h-full justify-center items-center`}>
            <div className='w-1/2 bg-orange-400 rounded-md md:px-10 md:py-5 flex flex-col'>
                <div className='flex flex-row flex-1 items-center'>
                    <span className='font-bold text-md flex-1'>Modal</span>
                    <AiFillCloseCircle onClick={closeModal} className='cursor-pointer -mt-3 -mr-5 transition-all hover:scale-[1.5] hover:rotate-180' />
                </div>
                {content}
            </div>
        </div>
    )
}

export default Modal