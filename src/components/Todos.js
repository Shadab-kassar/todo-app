import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetodo, clearall } from '../redux/slice';
import { fetchtodo,cleardata } from '../redux/todoSlice';


const Todos = () => {

  let [state,setstate] = useState([])
  const dispatch = useDispatch();

  let selector = useSelector((state)=>state.todoapp.todo)

  let selectorapi = useSelector((state)=>state.todoslice.items)

  useEffect(()=>{
    setstate([...selector,...selectorapi]);
  },[selector,selectorapi])

  const handleclick=(()=>{
    dispatch(fetchtodo())
  })
 
  return (
    <div className='bg-white border py-2' >
      <div className='d-flex justify-content-between align-items-center'>
        <button onClick={handleclick} className=' mx-3 my-1 end-div-btn'>Fetch all</button>
        <button className='end-div-btn mx-3' onClick={()=>{dispatch(clearall());dispatch(cleardata())}}>Clear All</button>
    </div>
        <div  className='todo-div py-1 mx-auto'>
          {
            state.map((item,i)=>
              <div key={item.id} className='item-box mt-1 mb-3 mx-auto d-flex justify-content-between align-items-center' >
                <h5 className='px-2 pt-2'>{`${i+1}. ${item.todo}`}</h5>
                <button onClick={()=>{dispatch(removetodo(item.id))}} ><i className="fa-solid fa-trash fa-lg"></i></button>
              </div>
            )
          }
          {
          selector.length!==0?
          <div className='end-div mx-auto d-flex justify-content-between align-items-center mb-2'>
          <span className='mx-1'>You Have {selector.length} pending tasks</span>
          </div>:""
          }
        </div>      
    </div>
  )
}

export default Todos;
