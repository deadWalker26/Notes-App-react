import react, { useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
import stickyNote from './assets/sticky-notes.png'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
  console.log('form submitted')

  const saveTask = [...task, { title, details }]
  setTask(saveTask)
  setTitle('')
  setDetails('')
  }

  const deleteHandler = (indexToDelete)=>{
  const updateTask = task.filter((_, index) => index !== indexToDelete);
  setTask(updateTask);
  }

  const [title, setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [task, setTask] = useState([])

  useGSAP(() => {
  gsap.from("#box", {
    scale: 0,
    rotate: 360,
    duration: 2,
    delay:1,
  })
})

  return (
   
    <div className=" lg:flex h-full p-10  bg-gray-900 ">
       <div>
      <header className="bg-gray-900 p-5 text-center">
        <h1 className="text-3xl flex-col font-bold text-white">Quick Notes🗒️</h1>
      </header>
    </div>
        <form id='box' onSubmit={(e)=>{
          submitHandler(e)
          
        }} className="flex flex-col justify-start h-65 lg:w-1/2 items-start text-amber-50 p-5 m-9 gap-4 bg-gray-800 rounded-md">
        <h1 className="text-lg text-white font-bold">Add Notes🗒️</h1>
        <input className="px-5 py-2 w-full rounded-md h-15  bg-gray-700" 
        type="text" placeholder="Enter Note Heading" required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea className="p-2 rounded-md h-30 bg-gray-700 px-5 py-2 w-full item-start flex-row text-white" placeholder="Enter Details" required
        value={details}
        onChange={(e) => setDetails(e.target.value)}>
        </textarea>
         <button className="bg-blue-500 cursor-pointer active:scale-95 active:bg-blue-200 active:text-blue-700 text-white px-5 py-2 w-full rounded-md" type="submit">Add Note</button>
      </form>
      <div className='lg:w-1/3 lg:border-l-4 p-5'>
      <h1 className="text-lg text-white font-bold  p-4 ">Your Notes🗒️</h1>
      <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-auto">
        {task.map((item, index) => (
          <div
            key={index}
            className="relative h-auto w-65 max-w-md rounded-[20px] p-5 shadow-lg"
            style={{
              backgroundImage: `url(${stickyNote})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '300px',
            }}
          >
            <div className='absolute active:scale-110 top-3 right-3 pt-1 pb-2'>
              <i onClick={()=> deleteHandler(index)}
               className="fa-solid fa-xmark cursor-pointer" style={{color: "rgba(29, 61, 92, 1.00)"}}></i>
            </div>
            <h2 className="text-lg mt-6 mb-3 text-black font-bold wrap-break-words pr-8">{item.title}</h2>
            <p className="text-blue-900 text-shadow-lg shadow-black leading-relaxed wrap-break-word  whitespace-pre-wrap pr-8">{item.details}</p>
          </div>
        ))}
      </div>
      </div>
      </div>
     
      
   
  )
}

export default App
