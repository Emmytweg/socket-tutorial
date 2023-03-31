import './App.css';
import Chat from './Chat';
import io from 'socket.io-client';
import { useState } from 'react';
const socket = io.connect("http://localhost:3001")
function App() {


  const [firstName, setfirstName] = useState('')
  const [room, setroom] = useState('')

  const joinRoom = () => {
    if (firstName !== "" && room !== "" )  {
     socket.emit("join_room", room) 
    }
  }
  return (
    <div className="App">
      <h1>Join A Chat</h1>
      <input type='text' placeholder='Join...' onChange={(e) => {setfirstName(e.target.value)}} />
      <input type='text' placeholder='Room 10...' onChange={(e)=> {setroom(e.target.value)}} />
      <button  onClick={joinRoom}>Join A room</button>


      <Chat socket={socket} username={firstName} room={room} />
    </div>
  );
}

export default App;
