import React from 'react'

interface Addtional {
    className: string
}

interface ISideBarButton {
    icon: any
    isActive: Boolean
}

const SideBarButton = ({ icon, isActive, exClassName }: any) => {
    return (
        <div className={`flex flex-row hover:bg-gray-200 transition-colors ${isActive ? 'border-l-2 border-l-secondary' : ''} self-stretch justify-center h-12 items-center ${exClassName}`}>
            {React.createElement(icon, { className: isActive ? `text-secondary` : 'text-light-gray', size: 25 })}
        </div>
    )
}

export default SideBarButton