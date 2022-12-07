import React from 'react'
import Login from './Login'
import useLocalStorage from '../../hooks/useLocalStorage';
import Dashboard from './Dashboard'

import { ChatProvider } from '../../contexts/ChatProvider';
import { SocketProvider } from '../../contexts/SocketProvider';



const Main = () => {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>

        <ChatProvider id={id}>
          <Dashboard id={id} />
        </ChatProvider>
  
    </SocketProvider>
  )

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  )
};

export default Main;

