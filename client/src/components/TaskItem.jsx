import React from 'react';
// import AppButton from './UI/AppButton/AppButton'
import PropTypes from 'prop-types';
import ButtonRemove from './UI/ButtonRemove/ButtonRemove';

const TaskItem = (props) => {
    return (
        <div className='taskItem'>
            <p style={{width: '70%', wordWrap: 'break-word'}}>{props.taskValue}</p>
            <ButtonRemove onClick={() => props.remove(props.task)}>Delete</ButtonRemove>
          </div>
    );
};

TaskItem.propTypes = {
    taskValue: PropTypes.string,
    remove: PropTypes.func,
    task: PropTypes.object
};

export default TaskItem;
