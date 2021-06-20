import React from 'react';
import './InputField.css';

const InputField = (props) => {

    var newInput = "";
    const handleChange = event => {
        newInput = event.target.value;
    }

    const handleClick = event => {
        event.preventDefault();
        newInput !== '' && props.addNewItem(newInput);
        document.querySelector('input').value = "";
    }
    return (
        <form>
            <input
                type='text'
                placeholder='New To-Do'
                onChange={handleChange}
                autoFocus
                required
            />
            <button
                className="btn-floating btn-large waves-effect waves-light blue"
                type='submit'
                onClick={handleClick}
                onSubmit={handleClick}
                id='add-btn'>
                <i className="material-icons">add</i>
            </button>
        </form >
    )
}


export default InputField;