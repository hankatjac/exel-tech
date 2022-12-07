
import React, { useState } from 'react'
import Main from './Main'
//import the css here

export const PopChat = (props) => {

    
    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block'
    }
    let textRef = React.createRef()
    const { messages } = props

    const [chatopen, setChatopen] = useState(false)

    const toggle = e => {
        setChatopen(!chatopen)
    }

    const handleSend = e => {
        const get = props.getMessage
        get(textRef.current.value)
    }

    return (
        <div id='chatCon'>
            <div className="chat-box" style={chatopen ? show : hide}>
                <Main />
            </div>
            <div className="pop">
                <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" /></p>
            </div>
        </div>
    )
}

export default PopChat