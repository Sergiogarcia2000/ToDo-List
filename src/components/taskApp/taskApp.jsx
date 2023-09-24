import TaskCreation from "./taskCreation/TaskCreation.jsx"
import Task from "./taskList/Task.jsx"
import "./taskApp.css"
import { useState } from "react"


export default function TaskApp() {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        console.log(task)
        setTasks([...tasks, {...task}])
    }

    const completeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const filterByName = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
        });
        
        setTasks(sortedTasks);
    }

    function priorityValue(priority) {
        switch(priority) {
            case 'Alta':
            return 3;
            case 'Media':
            return 2;
            case 'Baja':
            return 1;
            default:
            return 0;
        }
    }
      
    const filterByPriority = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            // Compara las prioridades primero
            if (priorityValue(a.priority) > priorityValue(b.priority)) {
              return -1;
            }
            if (priorityValue(a.priority) < priorityValue(b.priority)) {
              return 1;
            }
            
            // Si las prioridades son iguales, compara los nombres
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          
          setTasks(sortedTasks);
    }

    return (
        <>
            <TaskCreation addTask={addTask} />
            <div className="container">
                <div className="row ">
                    <button className="col-4 filter" onClick={ () => filterByName()}>Nombre</button>
                    <button className="col-4 filter" onClick={ () => filterByPriority()}>Prioridad</button>
                    <h2 className="col-4 filter"></h2>
                </div>
            </div>
            { tasks.map((task) => (
                <Task task={task} completeTask={completeTask} />
              ))
            }
        </>
    )
}