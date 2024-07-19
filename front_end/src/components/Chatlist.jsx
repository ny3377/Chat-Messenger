import React from 'react';
import { Link } from 'react-router-dom';
import './Chatlist.css'; 
const Chatlist = () => {
  return (
    <div className="chat-container">
      <div className="chat-list-container">
        <h2>Friends</h2>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              Me
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              <Link className='user-link' to="/chat/1">Harsha</Link>
              
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              7125
            </div>
          </li>
        </ul>
        <ul className="user-list">
          <li className="user-item">
            <div className="user-link">
              Dhunna
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Chatlist;