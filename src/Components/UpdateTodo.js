import React, { useState } from 'react';
import './UpdateTodo.css';

function UpdateTodo({ todo, updateTodo }) {
    const [editText, setEditText] = useState(todo);

    const handleEditInput = (event) => {
        setEditText(event.target.value);
    };

    const saveEdit = () => {
        updateTodo(editText);
    };

    return (
        <div className='update_section'>
            <input className='updated_search'
                type="text"
                value={editText}
                onChange={handleEditInput}
                maxLength={100}
            />
            <button className='save_btn' onClick={saveEdit}>Save</button>
        </div>
    );
}

export default UpdateTodo;
