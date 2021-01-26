import React from 'react';
import './ReceivedMessage.css';
import img from './../Images/user.png';

export default function ReceivedMessage(){
    return(
        <div className="receivedMsg">
            <div className="receivedMsgContainer">
                <div className="RchatBoxMsgWrapper">
                    <div> <img className="Rimg" src={img}></img> </div>
                    <div className="RchatBoxMsgBody">
                        <div className="RchatBoxMsgBodyBox">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </div>
                        <div className="RmsgTime">3 days ago</div>
                    </div>
                    <div><i className="fas fa-ellipsis-v"></i> </div>
                </div>
            </div>
        </div>
    )
}