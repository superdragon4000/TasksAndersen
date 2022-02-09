import React, {useState,useContext} from 'react';
import AppInput from './UI/AppInput/AppInput';
import AppButton from './UI/AppButton/AppButton';
import PropTypes from 'prop-types';
import {Context} from '../index';


const TaskForm = ({create}) => {
    const [task, setTask] = useState({value: ''});
    const {store} = useContext(Context);

    const addNewTask = async (e) => {
        e.preventDefault();
        create(task);
        await store.addTask(task.value)
        setTask({value: ''});
    }
    return (
      <form className='createTask'>
          <AppInput value={task.value} type='text' onChange={e => setTask( {...task, value: e.target.value} )}></AppInput>
          <AppButton onClick={addNewTask}>Create task</AppButton>
      </form>
    );
};

TaskForm.propTypes = {
    create: PropTypes.func
};

export default TaskForm;
