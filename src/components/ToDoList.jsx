import React, { useState, useEffect } from 'react';
import ToDos from './ToDos.jsx'
import InputField from './InputField.jsx'
import './ToDoList.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const ToDoList = props => {
    const [toDoList, setToDoList] = useState([]);
    let URL = 'https://secret-shelf-76542.herokuapp.com/todos/';

    const addToList = async (newContent) => {
        setToDoList(await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ 'content': newContent, 'dateTime': new Date().toLocaleString() }),
        }).then(response => response.json()));

    };
    const removeFromList = async id => {
        setToDoList(await fetch(URL, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ '_id': id }),
        }).then(response => response.json()));
    };

    useEffect(() => {
        const getToDoList = async () => {
            setToDoList(await fetch('https://secret-shelf-76542.herokuapp.com/todos/').then(response => response.json()));
        }
        getToDoList();
    }, []);

    return (
        <div className="todo-input-list">
            <ul className="collection with-header">
                <li className="collection-header"><h5>To-Dos</h5></li>
                {toDoList.map((todo, index) =>
                    <li className="collection-item" key={index} >
                        <ToDos
                            // key={index}
                            number={index}
                            id={todo._id}
                            todo={todo.content}
                            date={todo.dateTime}
                            remItem={removeFromList}
                        />
                    </li>
                )
                }
                <li className="collection-item">
                <InputField addNewItem={addToList} />
                </li>
            </ul>
        </div>

    )
}

export default ToDoList;