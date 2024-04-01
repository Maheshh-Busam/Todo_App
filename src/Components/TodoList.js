import React, { useState, useEffect } from 'react';
import UpdateTodo from './UpdateTodo';
import CompletedTasks from './CompletedTasks';
import './TodoList.css';

function TodoList({ todos, deleteTodo, updateTodo }) {
    const [editIndex, setEditIndex] = useState(-1);
    const [completedTasks, setCompletedTasks] = useState(() => {
        const storedCompletedTasks = localStorage.getItem('completedTasks');
        return storedCompletedTasks ? JSON.parse(storedCompletedTasks) : [];
    });

    const enableEdit = (index) => {
        setEditIndex(index);
    };

    const handleCheckboxChange = (index) => {
        const completedTodo = todos[index];
        const newTodos = todos.filter((_, i) => i !== index);
        setCompletedTasks([...completedTasks, completedTodo]);
        updateTodo(newTodos);
        deleteTodo(index);
        localStorage.setItem('completedTasks', JSON.stringify([...completedTasks, completedTodo]));
    };

    const handleCompleteTask = (index) => {
        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks.splice(index, 1);
        setCompletedTasks(updatedCompletedTasks);
        localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
    };

    return (
        <div className='todo_items'>
            {todos.map((todo, index) => (
                <li className='item' key={index}>
                    <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(index)}
                    />
                    {index === editIndex ? (
                        <UpdateTodo todo={todo} updateTodo={(text) => {
                            updateTodo(index, text);
                            setEditIndex(-1);
                        }} />
                    ) : (
                        <span>{todo}</span>
                    )}
                    <div className="item_btns">
                        {index !== editIndex && (
                            <button className='update_btn' onClick={() => enableEdit(index)}>Update</button>
                        )}
                        <button className='delete_btn' onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                </li>
            ))}
            
            {/* Completed Todos Section */}
            <h2>Completed Tasks</h2>
            {completedTasks.length > 0 && (
                <CompletedTasks
                    completedTasks={completedTasks}
                    onCompleteTask={handleCompleteTask}
                />
            )}
        </div>
    );
}

export default TodoList;
