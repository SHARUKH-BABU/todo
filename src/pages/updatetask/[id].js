'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/router'

function UpdateTask() {
    const { query } = useRouter()
    const router = useRouter()
    
    const [newtitle, setNewtitle] = useState('')
    const [newdescription, setNewdescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/topics/${query.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newtitle, newdescription})
        })
        if (res.status === 200) {
          router.push('/');
        }
    }

  return (
    <form onSubmit={handleSubmit} className='max-w-200 m-auto my-5 bg-gray-200 p-4 rounded-lg flex flex-col gap-4'>
        <input type="text" placeholder='Title' className='p-2 border-2 border-gray-400' onChange={(e) => {setNewtitle(e.target.value)}} required/>
        <input type='text' placeholder='Description' className='p-2 border-2 border-gray-400' onChange={(e) => {setNewdescription(e.target.value)}} required/>
        <button type='submit' className='bg-blue-700 text-white px-3 py-2 rounded-md'>Update Task</button>
    </form>
  )
}

export default UpdateTask