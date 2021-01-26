import React from 'react';
import './SendMessage.css';

export default function SendMessage(){
    return(
        <div className="sendMsg">
            <div className="sendMsgContainer">
                <div className="chatBoxMsgWrapper">
                    <div> <i className="fas fa-ellipsis-v"></i> </div>
                    <div className="chatBoxMsgBody">
                        <div className="chatBoxMsgBodyBox">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </div>
                        <div className="msgTime">3 days ago</div>
                    </div>
                    <div> <i className="fas fa-check"></i> </div>
                </div>
            </div>
        </div>
    )
}