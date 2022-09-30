import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import { AiOutlineAppstoreAdd, AiOutlineBell, AiOutlineMail } from 'react-icons/ai'
import SideBarButton from './components/SideBarButton';
import { useAppDispatch, useAppSelector } from './hooks';
import Constants from './utils/Constants';
import { ILocalStorage } from './data/providers/LocalStorage';
import { FirebaseAuthen } from './data/providers/authentication/fbase';
import Loading from './components/Loading';
import { selectIsLogin, setCurrentUser } from './features/login/loginSlice';
import { SelfHostedAuthentication } from './data/providers/authentication/selfhosted';

const Home = React.lazy(() => import('./features/home/Home'))
const Login = React.lazy(() => import('./features/login/Login'))
const Modal = React.lazy(() => import('./components/Modal'))
type AppProps = {
  myStorage: ILocalStorage
}
function App({ myStorage }: AppProps) {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )

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

  const loggedInContent = (
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
