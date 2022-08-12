import React, { useState } from 'react'

import Form from './Form'
import Todo from './Todo'

export default function List() {

    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const handleRemoveAllTodos = () => {
            setTodos([])
    }

    return (
        <div>
            <Form onSubmit={addTodo} />
            <Todo handleRemoveAllTodos = {handleRemoveAllTodos} todos={todos} />
        </div>
    )
}
