import React from 'react';
import '../styles/profilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header-bar">
        <h1 className="header-title">Account Settings</h1>
      </div>
      <div className="profile-content-section">
        <div className="user-info-card">
          <div className="profile-picture-container">
            <img 
              src="https://placehold.co/100x100/A0A0A0/FFFFFF?text=MD" 
              alt="Profile" 
              className="profile-image" 
            />
            <div className="camera-icon-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16px" height="16px">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1zM18 8h-2.17l-.59-.59c-.38-.38-.89-.59-1.42-.59H9.17c-.53 0-1.04.21-1.42.59L7.17 8H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM5 10h14v10H5V10zm7 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/>
              </svg>
            </div>
          </div>
          <div className="user-details">
            <p className="user-name">Marry Doe</p>
            <p className="user-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="user-description">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invident Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default ProfilePage;
