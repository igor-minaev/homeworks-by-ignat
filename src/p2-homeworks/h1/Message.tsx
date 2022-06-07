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
        <div className={cssForMessage.wrapper}>
            <img className={cssForMessage.avatar} src={props.avatar} alt=""/>
            <div>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
