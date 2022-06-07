import React from 'react'
import cssForMessage from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props:MessageType) {
    return (
        <div className={cssForMessage.message}>
            <img className={cssForMessage.messageAvatar} src={props.avatar} alt=""/>
            <div className={cssForMessage.messageContent}>
                <h3 className={cssForMessage.messageName}>{props.name}</h3>
                <p className={cssForMessage.messageText}>{props.message}</p>
                <p className={cssForMessage.messageTime}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
