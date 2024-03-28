import React from 'react'
import { Todo } from '../modal'
import SingleTodo from './SingleTodo'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className='todo'>
            {todos.map((todo) => (
                <SingleTodo 
                    todo={todo}     
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList
