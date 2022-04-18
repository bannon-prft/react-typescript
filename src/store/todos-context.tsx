import React, { useState } from 'react'
import Todo from '../models/Todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  onDeleteTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  onDeleteTodo: (id: string) => {},
})

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text)

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo)
    })
  }

  const onDeleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    onDeleteTodo: onDeleteTodoHandler,
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
