import React ,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;
const END = 'localhost:5000';

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([]);

useEffect(() => {
    const {name,room}= queryString.parse(location.search);
    

    socket=io(END);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
        
      });


      return () => {
          socket.emit('disconnect');
          
          socket.off();
      }
    },[END, location.search]);

    useEffect(() => {
    socket.on('message' ,(message) => {
        setMessages([...messages,message]);
    })
    },[messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage',message,() => setMessage['']);
        }
    }

    return(
        <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
    )
};

export default Chat;