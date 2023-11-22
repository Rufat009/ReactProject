import React from 'react';
import TaskComponent from './TaskComponent';

const TaskList = ({ tasks }) => (
    <>
        {tasks.length ? (
            <ul>
                {tasks.map((task) => (
                    <TaskComponent key={task.id} task={task} />
                ))}
            </ul>
        ) : (
            <p>
                <i>No tasks</i>
            </p>
        )}
    </>
);

export default TaskList;




