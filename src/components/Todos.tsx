import { useContext } from 'react'

import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-context'
import styles from './Todos.module.css'

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todosCtx.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
