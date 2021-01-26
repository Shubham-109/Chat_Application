import React from 'react';
import './Nav_Drawer.css';
import userImg from './../Images/user.png';

export default function Nav_Drawer(){
    return(
        <div className="nav_drawer">
            <div className="contentWrapper">
                <div className="profileWrapper">
                    <img className="userImg" src={userImg} ></img>
                    <p className="pName">Henry Jabbawockiez <i className="arrowDown fas fa-angle-down"></i> </p>
                </div>
                <ul className="menus">
                    <li> <div className="liBorder" ></div> <i className="fas fa-th-large " ></i> HOME</li>
                    <li> <div className="liBorder" ></div> <i className="fas fa-comment-dots" ></i> CHAT</li>
                    <li> <div className="liBorder" ></div> <i className="far fa-user-circle" ></i> CONTACT</li>
                    <li> <div className="liBorder" ></div> <i className="far fa-bell" ></i> NOTIFICATIONS</li>
                    <li> <div className="liBorder" ></div> <i className="far fa-calendar-alt" ></i> CALENDAR</li>
                    <li> <div className="liBorder" ></div> <i className="fas fa-cog" ></i> SETTINGS</li>
                </ul>
                <div className="logoutBtn">
                    <span> <i className="logoutIcon fas fa-power-off"></i> </span> LOGOUT
                </div>
            </div>
        </div>
    );
}