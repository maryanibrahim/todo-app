import React, { useState, useEffect } from 'react';
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from './assets/directhit.png';
import doingIcon from './assets/star.png';
import doneIcon from './assets/yes.png';

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);  
  };
  
  const onDrop = (status, position) => {
    if (activeCard == null) return;
    console.log(`${activeCard} is going to place into ${status} at the position ${position}`);

    const taskToMove = tasks[activeCard];
    const updatedTasks = [...tasks];
    updatedTasks.splice(activeCard, 1); // Remove the task from its original position
    updatedTasks.splice(position, 0, { ...taskToMove, status }); // Add task to the new position with updated status
    
    setTasks(updatedTasks); // Update state
    setActiveCard(null); // Reset active card
  };

  return (
    <div className='app'>
      <div className='bg'></div>
      <TaskForm setTasks={setTasks} />
      
      <main className='app_main'>
      <TaskColumn 
  title='To do' 
  icon={todoIcon} 
  tasks={tasks} 
  status="todo"
  handleDelete={handleDelete}
  setActiveCard={setActiveCard}
  onDrop={(pos) => onDrop('todo', pos)}
/>

<TaskColumn 
  title='Doing' 
  icon={doingIcon} 
  tasks={tasks} 
  status="doing"
  handleDelete={handleDelete}
  setActiveCard={setActiveCard}
  onDrop={(pos) => onDrop('doing', pos)}
/>

<TaskColumn 
  title='Done' 
  icon={doneIcon} 
  tasks={tasks} 
  status="done"
  handleDelete={handleDelete}
  setActiveCard={setActiveCard}
  onDrop={(pos) => onDrop('done', pos)}
/>

      </main>
      
    </div>
    
  );
}

export default App;
