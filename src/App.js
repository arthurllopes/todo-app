import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [value, setValue] = React.useState('')
  const [taskList, setTaskList] =  React.useState([])

  React.useEffect(() => {
    const localStorage = window.localStorage.getItem('list')
    if(localStorage){
      const taskArray = localStorage.split(',')
      setTaskList([...taskArray])
    }
  }, [])

  React.useEffect(() => {
    if(taskList.length>0)
    window.localStorage.setItem('list', taskList)
  }, [taskList])
  
  return (
    <div className="main">
      <Header />
      <Input value={value} taskList={taskList} setTaskList={setTaskList} setValue={setValue} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
