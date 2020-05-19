import React, {useState} from 'react';
import {Link} from 'react-roter-dom';
const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="title">Join the Chat Room</h1>
                    <div><input placeholder="Your Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                    <div><input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <buuton className="button mt-20" type="submit">Join In</buuton>
                    </Link>
                </div>
            </div>
        )
}

export default Join;