import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './modal'
import TodoList from './components/TodoList'

const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e : React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      setTodo("")
    }
  }

  console.log(todos)
  return (
   <div className='bg-blue-500 h-[100vh]'>
      <div className='text-center py-4 pt-4'>
        <span className='text-4xl'>TASKIFY</span>
      </div>
      <div className='text-center'>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        
        {/* {todos.map((t) => (
          <li>{t.todo}</li>
        ))} */}

        <TodoList todos={todos} setTodos={setTodos} />

      </div>
   </div>
  )
}

export default App
