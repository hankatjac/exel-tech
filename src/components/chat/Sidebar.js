import React, { useState } from 'react'
import Conversations from './Conversations'


const Sidebar = ({id}) => {
  return (
    <div style={{ width: '80px' }} className="d-flex justify-content-between flex-column">
      <Conversations />
      <div className="p-2 border-top border-right small">
        Your Id: <span className="text-muted">{id}</span>
      </div>
    </div>
  )
};

export default Sidebar;




