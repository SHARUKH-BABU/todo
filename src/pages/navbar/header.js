import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <div>
        <nav className='bg-gray-800 text-white p-4 max-w-200 m-auto my-2'>
            <ul className='flex justify-between font-bold items-center'>
                <Link href='/'>
                    <li className='text-xl'>To-Do</li>
                </Link>
                <Link href='/newtask/task'>
                    <li className='border border-2 rounded-sm px-2'> + Add Task</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header