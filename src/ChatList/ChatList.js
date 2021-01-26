import React from 'react';
import Messages from './Messages';
import ChatListHeader from './ChatListHeader';
import './ChatList.css';

export default function ChatList(){
    return(
        <div  className="chatListContainer">
             <ChatListHeader/>
            <div className="messageList">
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
            </div>
        </div>
    );
}