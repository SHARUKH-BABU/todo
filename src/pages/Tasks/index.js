import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import Link from 'next/link';

function Tasks() {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/topics`, {
            method: 'GET',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setTasks(data.topics);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className='max-w-200 m-auto my-5'>
            {tasks.map((task) => (
                <div key={task._id} className='bg-gray-200 p-4 rounded-lg flex justify-between items-center mt-4'>
                    <div>
                        <h1 className='text-xl'>{task.title}</h1>
                        <p className='text-gray-500'>{task.description}</p>
                    </div>
                    <div className='flex gap-4 text-xl'>
                        <FaTrash 
                            className='text-red-500 cursor-pointer'
                            onClick={async () => {
                                await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/topics?id=${task._id}`, {
                                    method: 'DELETE'
                                });
                                getTasks(); // Refresh the list after deletion
                            }}
                        />
                        <Link href={`/updatetask/${task._id}`}>
                            <FiEdit className='text-blue-800'/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tasks;
