import React, { useRef } from 'react'

import styles from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = inputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw an error
      return
    }

    props.onAddTodo(enteredText)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
