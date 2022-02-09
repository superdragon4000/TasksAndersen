import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

const TaskList = (props) => {
    return (
        <div className='tasksList'>
          {props.tasks.map((task, id) => <TaskItem task={task} remove={props.removeTask} key={id} taskValue={task.value} />)}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array,
    removeTask: PropTypes.func
};

export default TaskList;
