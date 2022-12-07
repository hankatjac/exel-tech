import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../../contexts/ChatProvider';



const Conversations = () => {
  const { conversations, createConversation, selectConversationIndex } = useConversations();

  
  const id= JSON.parse( localStorage.getItem("exel-tech-chat-id"))
  // console.log(id)

  useEffect(() => {
    if ( id !="Admin" && id != null && conversations.length == 0) {
      createConversation()
    }
  }, [id])


  return (
    <ListGroup>
      {conversations.map((conversation, index) => (
        <ListGroup.Item variant="info"
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map(r => r.id).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
};

export default Conversations;


