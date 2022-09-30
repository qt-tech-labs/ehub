import React, { useId, useState } from 'react'
type EditProps = {
    title: string
    type: string
    placeholder: string
    className?: string
    content?: string
    onContentChange?(value: string): void
}
const EditText = ({ title, type, placeholder, className, content, onContentChange }: EditProps) => {
    const id = useId()
    return (
        <>
            <label className='font-bold md:mt-4 mt-2' htmlFor={id}>{title}</label>
            <input id={id} placeholder={placeholder} value={content} onChange={e => onContentChange && onContentChange!(e.target.value)} type={type} className={`border border-light-gray rounded font-bold h-10 px-2 ${className}`} />
        </>
    )
}

export default EditText