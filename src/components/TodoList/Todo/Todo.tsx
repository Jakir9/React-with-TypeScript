import { useState } from 'react'
import { TodoButtons } from './TodoButtons'
import { TodoTitle } from './TodoTitle'
interface TodoProps {
  todo: {
    id: string
    title: string
    isComplete: boolean
  }
  updateTodo: (id: string, updatedTodo: any) => void // Replace 'any' with the actual type of 'updatedTodo'
  deleteTodo: (id: string) => void
}

export function Todo(props: TodoProps): JSX.Element {
  const { todo, updateTodo, deleteTodo } = props
  const { title, isComplete } = todo

  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editedTodoTitle, setEditedTodoTitle] = useState<string>(title)

  function onClickToggle(): void {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete }
    updateTodo(todo.id, updatedTodo)
  }

  function onClickEdit(): void {
    setIsEditing(!isEditing)
  }

  function onClickDelete(): void {
    deleteTodo(todo.id)
  }

  function onClickDone(): void {
    const updatedTodo = { ...todo, title: editedTodoTitle }
    updateTodo(todo.id, updatedTodo)
    setIsEditing(false)
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        isComplete={isComplete}
        isEditing={isEditing}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        isComplete={isComplete}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  )
}
