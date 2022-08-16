import React from 'react'

import '../styles/Form.css'
import bin from '../photos/Vector.png'
import enoughTodos from '../photos/Group.png'

export default function Todo({ todos, handleRemoveAllTodos, removeCurrentTodo, changeRadio }) {

    const showStatus = () => {

        const completedArr = todos.filter(todo => todo.completed === true)

        return (
            <div className='status'>
                <div className='status__detailer'>
                    <p>Ümumi: {todos.length} tapşırıq</p>
                    <p>Hazır: {completedArr.length} tapşırıq</p>
                </div>

                <button type='button' onClick={handleRemoveAllTodos} className='status__btn' >Hamısını sil</button>
            </div>
        )
    }

    const isNotEnoughTodos = () => {
        return (
            <div className='form-parent modifiaer'>

                <div className='parent--modifaer' >
                    <img src={enoughTodos} alt={bin} />
                    <h2>Heç bir tapşırıq yoxdur</h2>
                </div>

                {showStatus()}

            </div>
        )
    }

    const haveTodos = () => {
        return (
            <div>
                <div className='form-parent'>
                    <form className='current--form'>
                        <ul>
                            {todos.map((todo, index) => (
                                <li className='list-item' key={index}>
                                    <div className='list-item__inputs'>
                                        <input
                                            checked={todo.completed}
                                            className='current-todo__checkbox'
                                            type='checkbox'
                                            onChange={() => changeRadio(todo)} />

                                        <input readOnly type='text'
                                            name='current_todo'
                                            value={todo.text}
                                            className={todo.completed ? 'main-form__current-input input--modifaer' : 'main-form__current-input'}
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


    return (
        <div>
            {todos.length === 0 ? isNotEnoughTodos() : haveTodos()}
        </div>
    )
}
