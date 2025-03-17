'use clinet'

import React, {useState} from 'react'
import {useRouter} from 'next/router'

function Task() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch(`${process.env.DOMAIN}/api/topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description})
    });
    setTitle('');
    setDescription('');

    router.push('/');

  }

  return (
    <form onSubmit={handleSubmit} className='max-w-200 m-auto my-5 bg-gray-200 p-4 rounded-lg flex flex-col gap-4'>
        <input type="text" placeholder='Title' className='p-2 border-2 border-gray-400' value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
        <input type='text' placeholder='Description' className='p-2 border-2 border-gray-400' value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
        <button type='submit' className='bg-green-700 text-white px-3 py-2 rounded-md'>Add Task</button>
    </form>
  )
}

export default Task