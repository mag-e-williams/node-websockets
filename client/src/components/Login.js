import React from 'react';

export default function LoginScreen({usernameRef, logInUser}) {
  return (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__profile">
            <p className="account__name">Hello!</p>
            <p className="account__sub">Enter a username to join a game of Yahtzee</p>
          </div>
          <input name="username" ref={usernameRef} className="form-control" />
          <button type="button" onClick={logInUser} className="btn btn-primary account__btn">Join</button>
        </div>
      </div>
    </div>
  );
}