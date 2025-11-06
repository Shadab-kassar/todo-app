import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addtodo} from '../redux/slice'

const Addtodo = () => {
  const [input,setinput] = useState(0);
  const dispatch = useDispatch();

  const onchange=(e)=>{
    setinput(e.target.value)
  }

  const handleClick=(e)=>{
    e.preventDefault()
    dispatch(addtodo(input))
  }

  return (
    <div className='addtodo-div my-0 py-0' style={{border: "2px solid transparent"}}>
        <div className=' mx-auto my-0 py-0'>
          <h3 className='m-2'>Todo App</h3>
          <form className='form-control text-center d-flex align-items-center justify-content-center'>
              <input onChange={onchange} type='text' placeholder='Add Your New Todo'></input>
              <button onClick={handleClick} className='btn btn-primary' ><i className="fa-solid fa-plus fa-lg"></i></button>
          </form>
        </div>
    </div>
  )
}

export default Addtodo
