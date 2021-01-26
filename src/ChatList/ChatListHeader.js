import React from 'react';
import './ChatListHeader.css';

export default function ChatListHeader(){
    return(
        <div className="headerBody">
            <div className="headerBody1">
                <div className="headerBody1Left">
                    <div className="textChats">Chats</div>
                    <div className="textRecentChats">Recent Chats <i className="fas fa-angle-down"></i> </div>
                </div>
                <div className="headerBody1Right">
                    <input className="NewChatBtn" type="button" value="+ Create New Chat"></input>
                </div>
            </div>
            <div className="headerBody2">
                <div className="msgSearchIcon"> <i className="fas fa-search"></i> </div>
                <div> <input className="msgSearchInput" type="text" placeholder="Search"></input> </div>
                <div className="msgSearchDropDown">Message <i className="fas fa-angle-down"></i></div>
            </div>

        </div>
    )
}