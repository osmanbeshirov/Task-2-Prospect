import React from 'react'

import Form from '../Components/Form'
import Todo from '../Components/Todo'

import '../Hooks/UseLocaleStorage'

import alertify from 'alertifyjs'
import useLocalStorage from '../Hooks/UseLocaleStorage'

export default function List() {

    const [todos, setTodos] = useLocalStorage('todos', [])

    const [num, setNum] = useLocalStorage('num', 1);

    const addTodo = (todo) => {

        const compressedAddTodo = () => {
            const newTodos = [todo, ...todos]
            setTodos(newTodos)
            alertify.set('notifier', 'position', 'top-right');
            alertify.notify('Todo id successfully added', 'custom');
        }

        setNum(num + 1)

        if (todo.text === '') {

            const okAlertify = () => {
                compressedAddTodo()
            }

            const cancelAlertify = () => {
                alertify.warning('Todo is not added to your list')
            }

            alertify.confirm('ToDo checking', 'Boş bir todo əlavə etməkdən əminsiniz?', okAlertify, cancelAlertify)
                .set({ transition: 'zoom' });
        }

        else {
            compressedAddTodo()
        }
    }

    const handleRemoveAllTodos = () => {
        if (todos.length === 0) {
            alertify.alert('Xəbərdarlıq !!!', 'Siyahıda silinəcək element heç yoxdur...').set({ transition: 'flipx' }).show();
        }
        else {
            setTodos([])
            alertify.set('notifier', 'position', 'top-center');
            alertify.error("All Todos are removed")
        }
    }

    const removeCurrentTodo = (todo) => {
        const afterRemovedTodos = todos.filter((item) => item.id !== todo.id)
        setTodos(afterRemovedTodos)
        alertify.warning("Todo is successfully removed")
    }

    const changeRadio = (todo) => {
        let updatesTodos = todos.map((item) => {
            if (item.id === todo.id) {
                item.completed = !item.completed
            }

            return item;
        })

        setTodos(updatesTodos)

    }


    return (
        <div>
            <Form onSubmit={addTodo} id={num} />
            <Todo handleRemoveAllTodos={handleRemoveAllTodos}
                todos={todos}
                removeCurrentTodo={removeCurrentTodo}
                changeRadio={changeRadio}


            />
        </div>
    )
}
