import { useState } from 'react'
interface todo {
  id: string
  title: string
  isComplete: boolean
}

interface AddTodoProps {
  addTodo: (newTodoTitle: string) => void
}

export function AddTodo(props: AddTodoProps): JSX.Element {
  const { addTodo } = props

  const [todoTitle, setTodoTitle] = useState('')

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTodoTitle(e.target.value)
  }

  function onClickAdd() {
    if (todoTitle.trim() === '') {
      return
    }
    addTodo(todoTitle)
    setTodoTitle('')
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  )
}
