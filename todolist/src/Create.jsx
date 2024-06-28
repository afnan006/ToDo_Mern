import { useState } from 'react';
import './App.css';
import axios from 'axios';

function Create({ uid, fetchTodos }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (uid) {
            axios.post('http://localhost:3002/add', { uid, task })
                .then(result => {
                    setTask(''); // Clear the input field
                    fetchTodos(uid); // Refresh the task list
                })
                .catch(err => console.log(err));
        } else {
            alert('You must be logged in to add a task');
        }
    };

    return (
        <div className='create_form'>
            <input
                type="text"
                placeholder='Enter Task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
