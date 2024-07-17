import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id:1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", time:"20:49" },
      { id:2,title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", time:"02:13" },
      { id:3,title: "Tidy up", deadline: "Today", time: "11:23"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
        id={task.id}
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key={task.id}
        time={task.time}
        />
  ))} 
    </div>
  );
}

export default App;