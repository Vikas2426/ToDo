import React, { useState } from 'react';
import './ToDos.css';


const ToDos = (props) => {

    const [done, setDone] = useState(false);
    const sendId = () => {
        props.remItem(props.id);
    }

    const toggleDone = () => {
        setDone(!done);
    }
    return (

        <div id='to-do-items'>
            <div className='todo-details' onClick={toggleDone} style={{ textDecorationLine: done ? 'line-through' : 'inherit' }}>
                <span className='todo-item'>{props.todo}</span>
                <span id='date-time' className='grey-text date-time'>{props.date}</span>
            </div>

            <span className='date-action-container'>
                <img src={require('../delete-outline.svg')} alt='delete-icon' onClick={sendId} />
            </span>

        </div>

    )

}



export default ToDos;