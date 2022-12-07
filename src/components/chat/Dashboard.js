import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../../contexts/ChatProvider';


const Dashboard = ({id}) => {
  const { selectedConversation } = useConversations()

  return (
    <div className="d-flex" style={{ height: '60vh' }}>
      
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
      
    </div>
  )
};

export default Dashboard;


