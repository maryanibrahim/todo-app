import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./TaskForm.css";
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const checkTag = (tag) => taskData.tags.includes(tag);

    const selectTag = (tag) => {
        const isTagSelected = checkTag(tag);
        setTaskData(prev => ({
            ...prev,
            tags: isTagSelected ? prev.tags.filter(item => item !== tag) : [...prev.tags, tag]
        }));
    };
    
    console.log(taskData.tags);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => [...prev, taskData]);
        setTaskData({ task: "", status: "todo", tags: [] });
    };

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name="task"
                    value={taskData.task}
                    className='task_input'
                    placeholder='Enter Your Task' 
                    onChange={handleChange}
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName='Study' selectTag={selectTag} selected={checkTag("Study")} />
                        <Tag tagName='Diet' selectTag={selectTag} selected={checkTag("Diet")} />
                        <Tag tagName='Gym' selectTag={selectTag} selected={checkTag("Gym")} />
                    </div>
                    <div>
                        <select 
                            name="status"
                            value={taskData.status}
                            className='task_status'
                            onChange={handleChange}>
                            <option value="todo">TO DO</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
};

TaskForm.propTypes = {
    setTasks: PropTypes.func.isRequired
};

export default TaskForm;
