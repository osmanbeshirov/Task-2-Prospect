import React, { useState } from 'react'

import Form from '../Components/Form'
import Todo from '../Components/Todo'

import alertify from 'alertifyjs'

export default function List() {

    const [todos, setTodos] = useState([])
    const [num, setNum] = useState(1);

    const addTodo = (todo) => {
        setNum(num + 1)
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        alertify.set('notifier', 'position', 'top-right');
        alertify.notify('Todo id successfully added', 'custom');
    }

    const handleRemoveAllTodos = () => {
        setTodos([])
        alertify.set('notifier', 'position', 'top-center');
        alertify.error("All Todos are removed")
    }

    const removeCurrentTodo = (todo) => {
        const afterRemovedTodos = todos.filter((item) => item.id !== todo.id)
        setTodos(afterRemovedTodos)
        alertify.warning("Todo is successfully removed")
    }

    return (
        <div>
            <Form onSubmit={addTodo} id={num} />
            <Todo handleRemoveAllTodos={handleRemoveAllTodos}
                todos={todos}
                removeCurrentTodo={removeCurrentTodo}

            />
        </div>
    )
}
