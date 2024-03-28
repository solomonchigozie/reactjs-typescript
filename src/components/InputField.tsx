// import React from 'react'

import React, { useRef } from "react"

interface Props {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e : React.FormEvent)=>void
}

const InputField : React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)


  return (
    <form className='relative flex text-center w-[80%] mx-auto items-center' onSubmit={(e)=>{handleAdd(e)
      inputRef.current?.blur()
    }}>
        <input type="text" 
          ref={inputRef}
        placeholder='Enter a task' className='p-2 rounded-2xl w-full focus:border-red' 
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
        />
        <button className='border  bg-slate-600 text-white absolute w-8 h-8 right-0 rounded-full mr-1' type='submit'>Go</button>
    </form>
  )
}

export default InputField
