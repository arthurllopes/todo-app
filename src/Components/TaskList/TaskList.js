import React from 'react'
import './TaskList.css'

let className = 'task';

const TaskList = ({taskList, setTaskList, setDeleting, deleting}) => {
    function handleDeleteTask (event){
        event.target.parentElement.className += ' deleting';
        setTimeout(() =>{
            setTaskList(taskList.filter((task) => (
              task !== event.target.id
            )))
        }, 500)
    }

    if(!taskList.length>0) {
        return (<ul><li style={{textAlign: 'center', marginTop:'22px'}}>Você não possui nenhuma tarefa.</li></ul>)
    }
    return (
        <div>
            <ul>
                {taskList.map((task) => (
                    <li className={className} key={task}>
                        <span>{task}</span>
                        <button id={task} onClick={handleDeleteTask}>✔️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
