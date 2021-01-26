import React from 'react';
import './ChatBox.css';
import img from './../Images/user.png'; 
import SendMessage from './SendMessage';
import ReceivedMessage from './ReceivedMessage';

export default function ChatBox(){
    return(
        <div className="chatBoxContainer">
           
            <div className="chatBoxWrapper">
                <div className="chatBoxTopHeader">
                    <div className="chatBoxHeaderLeft">
                        <div> <img className="chatBoxHeaderImg" src={img}></img> </div>
                        <div>
                            <div className="chatBoxHeaderName">Jared Sunn</div>
                            <div className="chatBoxHeaderStatus">last online 5 hours ago</div>
                        </div>
                    </div>
                    <div className="chatBoxHeaderBtns">
                        <div> <i className="fas fa-paperclip"></i> </div>
                        <div> <i className="fas fa-ellipsis-v"></i> </div>
                    </div>
                </div>
                <div className="chatBoxBody" >
                    <SendMessage/>
                    <ReceivedMessage/>
                    <SendMessage/>
                    <ReceivedMessage/>
                    <SendMessage/>
                    <ReceivedMessage/>
                </div>
                <div className="chatBoxFooter">
                    <div className="footerLeft" >
                        <div> <i className="add fas fa-plus" ></i></div>
                        <div> <input placeholder="Type a message here"></input></div>                   
                    </div>
                    <div className="footerRight" >
                        <div> <i className="emoji far fa-smile" ></i></div>
                        <div> <i className="send fas fa-paper-plane"> </i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}