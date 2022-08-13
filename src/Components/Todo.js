import React from 'react'

import '../styles/Form.css'
import bin from '../photos/Vector.png'

export default function Todo({ todos, handleRemoveAllTodos, removeCurrentTodo }) {

    const showStatus = () => {

        return (
            <div className='status'>
                <div className='status__detailer'>
                    <p>Ümumi: {todos.length} tapşırıq</p>
                    <p>Hazır: 0 tapşırıq</p>
                </div>

                <button type='button' onClick={handleRemoveAllTodos} className='status__btn' >Hamısını sil</button>
            </div>
        )
    }

    return (
        <div>
            <div className='form-parent'>
                <form className='current--form'>
                    <ul>
                        {todos.map((todo, index) => (
                            <li className='list-item' key={index}>
                                <div className='list-item__inputs'>
                                    <input className='current-todo__checkbox' type='checkbox' />

                                    <input readOnly type='text'
                                        name='current_todo'
                                        value={todo.text}
                                        className='main-form__current-input'
                                    />
                                </div>

                                <img onClick={() => removeCurrentTodo(todo)} className='remove-todo' src={bin} alt={bin} />
                            </li>
                        ))}

                    </ul>

                    {todos.length > 0 ? showStatus() : null}
                </form>
            </div>
        </div>
    )
}
