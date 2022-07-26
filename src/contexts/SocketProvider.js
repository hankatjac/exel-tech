import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'


const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io(
      'https://acidic-victorious-wire.glitch.me/',
      { query: { id } }
    )
    // console.log(newSocket)
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
