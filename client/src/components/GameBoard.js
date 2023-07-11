import React from 'react';

export default function GameBoard({currentUsers, userActivity}) {
  console.log(currentUsers)
  return (
    <div className="main-content">
      <div className="document-holder">
        <div className="currentusers">
          {currentUsers.map(user => (
            <React.Fragment key={user.username}>
              <span id={user.username} className="userInfo">
                {user.username}
              </span>
            </React.Fragment>
          ))}
        </div>
        hello
      </div>
      {/* <div className="history-holder">
        <ul>
          {userActivity.map((activity, index) => <li key={`activity-${index}`}>{activity}</li>)}
        </ul>
      </div> */}
    </div>
  );
}

