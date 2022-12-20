import React, { useState } from 'react';
import Conversations from './Conversations';
import { Button } from 'react-bootstrap';


const Sidebar = ({ id }) => {
  const clearStorage = () => {
    localStorage.removeItem("exel-tech-chat-conversations");
    localStorage.removeItem("exel-tech-chat-id");
    window.location.reload();
  }
  
  return (
    <div style={{ width: '80px' }} className="d-flex justify-content-between flex-column">
      <Conversations />
      <div className="p-2 border-top border-right small">
        <Button variant="outline-primary" size="sm" onClick={clearStorage}>LOGOUT</Button>
        Your Id: <span className="text-muted">{id}</span>
      </div>
    </div>
  )
};

export default Sidebar;




