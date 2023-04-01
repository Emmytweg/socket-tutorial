import './App.css';
import Chat from './Chat';
import io from 'socket.io-client';
import { useState } from 'react';
const socket = io.connect("http://localhost:3001")
function App() {


  const [firstName, setfirstName] = useState('')
  const [room, setroom] = useState('')
const [showChat, setshowChat] = useState(false)

  const joinRoom = () => {
    if (firstName !== "" && room !== "" )  {
     socket.emit("join_room", room) 
     setshowChat(true)
    }
  }
  return (
    <div className="App">
    { !showChat?  <div className='joinChatContainer'>
     <h1>Join A Chat</h1>
      <input type='text' placeholder='Please Enter Your Name to join a room' onChange={(e) => {setfirstName(e.target.value)}} />
      <input type='text' placeholder='Enter room number' onChange={(e)=> {setroom(e.target.value)}} />
      <button  onClick={joinRoom}>Join A room</button>
     </div>

    :
      <Chat socket={socket} username={firstName} room={room} />}
    </div>
  );
}

export default App;
