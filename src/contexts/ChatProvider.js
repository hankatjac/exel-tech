import React, { useContext, useState, useEffect, useCallback } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

import { useSocket } from './SocketProvider';

const ChatContext = React.createContext()


const ChatProvider = ({ id, children }) => {
  const [conversations, setConversations] = useLocalStorage('conversations', [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const [welcome, setWelcome] = useState('')
  const [message, setMessage] = useState('')

  const socket = useSocket()

  function createConversation() {
    setConversations(() => {
      return [
        {
          recipients: ["Admin"], messages: [{sender:"Admin", text: `Hello ${id}! Welcome to Exel-Tech customer service. Our customer service oppening hours from 1:30PM to 4:30PM, Moday to Friday. Please note we cannot receive message beyond those hours.`}]
        }
      ]
    })
  }

  const addMessageToConversation = useCallback(({ recipients, text, sender }) => {
    setConversations(prevConversations => {
      let madeChange = false
      const newMessage = { sender, text }
      const newConversations = prevConversations.map(conversation => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage]
          }
        }

        return conversation
      })

      if (madeChange) {
        return newConversations
      } else {
        return [
          ...prevConversations,
          { recipients, messages: [newMessage] }
        ]
      }
    })
  }, [setConversations])

  

  useEffect(() => {


    if (socket == null) return

    socket.on('receive-message', addMessageToConversation)

    socket.on('admin-connected', () => {
      setWelcome('customer service online')
    })
    socket.on('admin-disconnected', () => {
      setWelcome('customer service offline')
    })
  

    socket.on('user-connected', id => {
      setMessage(`${id} connected`); 
    })
    socket.on('user-disconnected', id => {
      setMessage(`${id} disconnected`); 
    })


    return () => socket.off('receive-message')
  }, [socket, addMessageToConversation])



  function sendMessage(recipients, text) {
    socket.emit('send-message', { recipients, text })

    addMessageToConversation({ recipients, text, sender: id })
  }


  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {

      const name = recipient
      return { id: recipient, name }
    })

    const messages = conversation.messages.map(message => {

      const name = message.sender
      const fromMe = id === message.sender
      return { ...message, senderName: name, fromMe }
    })

    const selected = index === selectedConversationIndex
    return { ...conversation, messages, recipients, selected }
  })

  const value = {
    welcome,
    message,
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}

function arrayEquality(a, b) {
  if (a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}

export { ChatProvider }

export const useConversations = () => useContext(ChatContext)