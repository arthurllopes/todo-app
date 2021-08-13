import React from 'react'
import './Input.css'

const Input = ({value, setValue, taskList, setTaskList}) => {
    function handleAddTask() {
        if(value !== '' && !taskList.includes(value)){
            setTaskList(prevState => [value, ...prevState])
            setValue('')  
        }
        
    }
    return (
        <div className="addTask">
            <div className="adding">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={handleAddTask}>+</button>
            </div>
            {taskList.length>0 &&
            <div>
                {taskList.length > 1? `Você tem ${taskList.length} tarefas.` : 'Você tem 1 tarefa.'}
            </div>}
        </div>
    )
}

export default Input
