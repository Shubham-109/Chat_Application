import React from 'react';
import './Messages.css';
import img from './../Images/user.png'; 
export default function Messages(){
    return(
        <div className="msgContainer">
            <div className="msgTopHeader">
                <div className="msgHeaderLeft">
                    <div> <img className="msgHeaderImg" src={img}></img> </div>
                    <div>
                        <div className="msgHeaderName">Jared Sunn</div>
                        <div className="msgHeaderStatus">last online 1 hour ago</div>
                    </div>
                </div>
                <div className="msgHeaderLastSeen"> 1 min ago </div>
            </div>
            <div className="msgBody">
                <div className="msgBodyText">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </div>
                <div className="msgBodyNoOfMessages">
                    2
                </div>
            </div>
        </div>
    )
}