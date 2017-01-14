import React from 'react';
import Message from './message';

const MessageList = ({messages}) => {
    return (
        <div classID="conversation" className="message-list">
            <h2>Conversation: </h2>
            {
                messages.map((msg, i) => {
                    return (
                        <Message key={i} user={msg.user} text={msg.text} />
                    );
                })
            }
        </div>
    );
};

export default MessageList;