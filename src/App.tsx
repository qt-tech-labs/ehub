import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './screens/Home';
import { AiOutlineAppstoreAdd, AiOutlineBell, AiOutlineMail } from 'react-icons/ai'
import SideBarButton from './screens/components/SideBarButton';
import Login from './screens/Login';
import Modal from './screens/components/Modal';
import { useAppDispatch, useAppSelector } from './data/states/hooks';
import { selectIsLogin, setCurrentUser } from './data/states/features/authentication/authenticationSlice';
import Constants from './utils/Constants';
import { ILocalStorage } from './data/repo/LocalStorage';
import { FirebaseAuthen } from './services/authentication/fbase';
type AppProps = {
  myStorage: ILocalStorage
}
function App({ myStorage }: AppProps) {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<Home />)
  // const [isLogged, setIsLogged] = useState<boolean>(false)

  const isEditting = useAppSelector(state => state.classR.currentEditingStudent)
  const appDispatch = useAppDispatch()
  useEffect(() => {
    const loggedInUser = myStorage.getItem(Constants.StorageKey.user)
    if (loggedInUser) {
      appDispatch(setCurrentUser(loggedInUser))
    }
  }, [])
  const isLogged = useAppSelector(selectIsLogin)
  const generateContent = () => {
    const content = (
      <div>{isEditting ? isEditting.name : "N/A"}</div>
    )
    return (
      <Modal content={content} />
    )
  }

  const loggedInContent = (<div className='bg-black flex flex-row min-w-full min-h-screen max-h-screen'>
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
        false && isEditting && (generateContent())
      }
    </div>

  </div>)
  const content = isLogged ? loggedInContent : <Login authenticationService={FirebaseAuthen.GetInstance()} />

  return (
    // Master
    <>
      {
        content
      }
    </>
  );
}

export default App;
