import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../modal'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
// import TodoList from './TodoList'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo)=> 
                todo.id === id ? { ...todo, isDone: !todo.isDone} : todo
            )
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo)=>todo.id !==id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos(todos.map((todo)=>(
            todo.id === id ? {...todo, todo:editTodo} : todo
        )))
        setEdit(false)
    }
    
    const inputRef = useRef<HTMLFormElement>(null)

    useEffect(()=>{
        //
        inputRef.current?.focus()
    }, [edit])

return (
    <form className='flex items-center w-[80%] bg-yellow-400 my-2 mx-auto justify-between p-2 rounded-xl' onSubmit={(e)=>handleEdit(e, todo.id)}>
        <div>
            {
                edit ? (
                    <input value={editTodo}
                        ref={inputRef}
                        className='px-2 rounded-md'
                    onChange={(e)=>setEditTodo(e.target.value)} />
                ):
                    todo.isDone ?
                        <s>{todo.todo}</s>
                        :
                        <span>{todo.todo}</span>    
                    
                
            }
           

        </div>
        <div className='flex'>
            <span
                onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }}
            ><AiFillEdit /></span>
            <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
)
}

export default SingleTodo
