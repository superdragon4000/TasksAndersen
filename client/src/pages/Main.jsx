import React, { useState, useContext, useEffect } from 'react';
import AccountModal from '../components/UI/AccountModal/AccountModal';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import AppButton from '../components/UI/AppButton/AppButton';
import {Context} from '../index';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const {store} = useContext(Context);

  const [fetchTasks, isTasksLoading] = useFetching(async ()=>{
    await store.getTasks();
    await setTasks(store.tasks);
  });
  
  useEffect(async () => {
    fetchTasks();
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
        {isTasksLoading ? <Loader/> : <TaskList removeTask={removeTask} tasks={tasks}/>}
      </div>
  );
};


export default Main;
