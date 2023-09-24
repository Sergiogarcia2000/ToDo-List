import React from 'react'
import Task from "./Task.jsx"
import { useState } from 'react'

export default function TaskList() {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        console.log(task)
        setTasks([...tasks, {name: task.name, priority: task.priority}])
    }

    const completeTask = name => {
        setTasks(tasks.filter(task => task.name !== name))
    }

    return (
        <>
            <h1>Nombre | Prioridad</h1>
            { tasks.map((task) => ( <Task name={task.name} priority={task.priority} completeTask={completeTask} />)) }
        </>
    )
}
