import React, { useState } from 'react'
import TodoList from './TodoList'
import './AddTodo.css'

function AddTodo() {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const handleAddInput = (event) =>{
      setInputText(event.target.value);
    }

    //Method to Add Todo
    const addTodo = () => {
        if(inputText !== ''){
          setTodos([...todos, inputText])
          setInputText('');
        }
        else{
          alert('Please enter any todo in the input box')
        }
        
    }

    const handleKeyPress = (event) =>{
      if(event.key === 'Enter'){
        addTodo();
      }
    }

    // Method to Update todo
    const updateTodo = (index, newText) => {
      const newTodos = [...todos];
      newTodos[index] = newText;
      setTodos(newTodos);
  }

    //Method to Delete todo
    const deleteTodo = (index) =>{
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }

  return (
    <div>
        <input className='input_box'
        type="text" 
        value={inputText} 
        onChange={handleAddInput}
        onKeyDown={handleKeyPress}
        placeholder='Enter any Todo here'
        maxLength={100}
        />
        <button onClick={addTodo}>Add</button>
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default AddTodo