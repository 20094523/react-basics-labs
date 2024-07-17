import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
        <p className='title2'>{props.id}</p>
        <p className='title'>{props.title}</p>
        <p>Due :{props.deadline} at {props.time}</p>
        <p className='descript'>{props.description}</p>
        </div>
    )
}

export default Task;