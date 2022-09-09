import './App.css';
import React, { ComponentClass, useState } from 'react';
import Home from './screens/Home';
import { AiOutlineAppstoreAdd, AiOutlineBell, AiOutlineMail, AiOutlineNotification } from 'react-icons/ai'
import SideBarButton from './screens/components/SideBarButton';
import Login from './screens/Login';

interface ITab {
  name: string
  icon: any,
}

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<Home />)

  return (
    // Master
    <div className='bg-black flex flex-row min-w-full min-h-screen'>
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
      <div className='flex-1 bg-white overflow-scroll'>
        {/* <Home /> */}
        {
          currentPage
        }
      </div>

    </div>
  );
}

export default App;
