import React, { useState } from 'react'

interface Props {
  addTodo: (text: string) => void
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.trim()) {
      addTodo(todo.trim())
      setTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}