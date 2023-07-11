import React, { useEffect, useState, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import LoginScreen from '../src/components/Login';
import Yahtzee from '../src/components/Yahtzee';
import { Meta } from '../src/components/utilComponents/Meta';
// import Editor from 'react-medium-editor';
// import 'medium-editor/dist/css/medium-editor.css';
// import 'medium-editor/dist/css/themes/default.css';
// import './App.css';

const client = new W3CWebSocket('ws://127.0.0.1:8000');
const contentDefaultMessage = "Let's start playing Yahtzee!";

const App = () => {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [username, setUsername] = useState(null);
  const [text, setText] = useState('');

  const usernameRef = useRef(null);

  const logInUser = () => {
    const username = usernameRef.current.value;
    if (username.trim()) {
      const data = {
        username
      };
      setUsername(username);
      client.send(JSON.stringify({
        ...data,
        type: "userevent"
      }));
    }
  }

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer.type === "userevent") {
        setCurrentUsers(Object.values(dataFromServer.data.users));
      } else if (dataFromServer.type === "contentchange") {
        setText(dataFromServer.data.editorContent || contentDefaultMessage);
      }
      setUserActivity(dataFromServer.data.userActivity);
    };
  }, []);

  return (
    <><Meta /><React.Fragment>
      {username ?
        <Yahtzee currentUsers={currentUsers} userActivity={userActivity} /> :
        <LoginScreen usernameRef={usernameRef} logInUser={logInUser} />}
    </React.Fragment></>
  );
}

export default App;
