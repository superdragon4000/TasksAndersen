import React, { useState, useContext, useEffect } from 'react';
import AccountModal from '../components/UI/AccountModal/AccountModal';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import AppButton from '../components/UI/AppButton/AppButton';
import {Context} from '../index';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const {store} = useContext(Context);

  
  useEffect(async () => {
    await setTasks(store.tasks);
  }, [])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const removeTask = async (task) => {
    setTasks(tasks.filter((t) => t._id !== task._id));
    await store.removeTask(task._id);
  }

  return (
      <div className='main'>
        <AppButton onClick={() => setModal(true)}>Account</AppButton>
        <TaskForm create={createTask} />
        <AccountModal visible={modal} setModal={setModal} />
        <TaskList removeTask={removeTask} tasks={tasks}/>
      </div>
  );
};


export default Main;
