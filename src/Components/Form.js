import React, { useState } from 'react'
import '../styles/Form.css'

export default function Form(props) {

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({
      id: props.id,
      text: input,
      completed: false
    })
    setInput('')

  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  return (
    <div className='form-parent'>
      <h1 className='form-parent__heading'>TODO</h1>

      <form className='main-form' onSubmit={handleSubmit}>
        <input type='text'
          name='todo'
          className='main-form__todo-input'
          placeholder='Tapşırığı daxil edin'
          value={input}
          onChange={handleChange} />
        <button type='submit' style={input.length > 0 ? { opacity: 1 } : { opacity: 0.5 }} className='add-todo' ><span>+</span></button>
      </form>
    </div>
  )
}
