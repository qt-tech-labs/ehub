import './App.css';
import React, { ComponentClass, useRef, useState } from 'react';
import Home from './screens/Home';
import { AiOutlineAppstoreAdd, AiOutlineBell, AiOutlineMail, AiOutlineNotification, AiFillCloseCircle } from 'react-icons/ai'
import SideBarButton from './screens/components/SideBarButton';
import Login from './screens/Login';
import Modal from './screens/components/Modal';
import { useAppSelector } from './data/states/hooks';


interface ITab {
  name: string
  icon: any,
}

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<Home />)

  const isEditting = useAppSelector(state => state.classR.currentEditingStudent)

  const generateContent = () => {
    const content = (
      <div>{isEditting ? isEditting.name : "N/A"}</div>
    )
    return (
      <Modal content={content} />
    )
  }

  return (
    // Master
    <div className='bg-black flex flex-row min-w-full min-h-screen max-h-screen'>
      {/* Not login */}

      {/* Side bar */}

      <div className='bg-primary w-12 self-stretch flex flex-col items-center '>
        <img alt='Avatar'
          className='w-8 h-8 rounded-full object-fill my-5'
          src="https://picsum.photos/200/300" />
        <SideBarButton icon={AiOutlineAppstoreAdd} isActive={true} exClassName='mt-28' />
        <SideBarButton icon={AiOutlineMail} isActive={false} exClassName='my-3' />
        <SideBarButton icon={AiOutlineBell} isActive={false} />
      </div>

      {/* Detail */}
      <div className={`flex-1 bg-white overflow-scroll ${isEditting ? 'relative' : ''} `}>
        {/* <Home /> */}
        {
          currentPage
        }
        {
          isEditting && (generateContent())
        }
      </div>

    </div>
  );
}

export default App;
