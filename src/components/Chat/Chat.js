import React ,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
const END = 'localhost:3000';

const Chat = (location) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

useEffect(() => {
    const {name,room}= queryString.parse(location.search);
    

    socket=io(END);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
},[END, location.search]);

    return(
        <h1>Chat</h1>
    )
}

export default Chat;