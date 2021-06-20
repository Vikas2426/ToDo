import React, { useState, useEffect, useRef } from 'react';
import ToDos from './ToDos.jsx'
import InputField from './InputField.jsx'
import './ToDoList.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const ToDoList = props => {
    const [toDoList, setToDoList] = useState([]);
    const dbList = useRef([]);

    const URL = 'https://secret-shelf-76542.herokuapp.com/todos/';
    const headers = {
        'content-type': 'application/json'
    }

    const addToDB = async newContent => {
        const response = await fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({ 'content': newContent, 'dateTime': new Date().toLocaleString() }),
        });

    };

    const removeFromDB = async id => {
        const response = await fetch(URL, {
            method: 'DELETE',
            headers,
            body: JSON.stringify({ '_id': id }),
        });
    };
    function onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
        const items = reorder([...toDoList], result.source.index, result.destination.index,);
        toDoList.forEach(item => removeFromList(item._id));
        setToDoList(items);
        toDoList.forEach(item => addToDB(item.content));
    }

    const addToList = (content) => {
        setToDoList([...toDoList, { _id: 'tempId' + content, content, dateTime: new Date().toLocaleString() }])
        addToDB(content);
    }

    const removeFromList = (id) => {
        setToDoList(toDoList.filter(item => item._id !== id));
        removeFromDB(id);
    }



    useEffect(() => {
        const getToDoList = async () => {
            const response = await fetch(URL);
            const list = await response.json();
            setToDoList(list);
        }
        getToDoList();
    }, []);

    return (
        <div className="todo-input-list">
            <ul className="collection with-header">
                <li className="collection-header"><h5>To-Dos</h5></li>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {toDoList.map((todo, index) =>
                                    <Draggable key={todo._id} draggableId={todo._id} index={index}>
                                        {(provided, snapshot) => (
                                            <li className="collection-item"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                            >
                                                <span {...provided.dragHandleProps} className='drag-icon-container'>
                                                    <img className='drag-icon' src={require('../make_sequence.png')} alt='drag-icon' />
                                                </span>
                                                <ToDos
                                                    number={index}
                                                    id={todo._id}
                                                    todo={todo.content}
                                                    date={todo.dateTime}
                                                    remItem={removeFromList}
                                                />
                                            </li>
                                        )}
                                    </Draggable>
                )
                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                <li className="collection-item input-field">
                <InputField addNewItem={addToList} />
                </li>
            </ul>
        </div>

    )
}



const reorder = (list, startIndex, endIndex) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
};

export default ToDoList;