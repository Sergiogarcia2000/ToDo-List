import { useState } from "react";
import "./TaskCreation.css"
import {  Row, Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';

export default function TaskCreation({addTask}) {
    const [task, setTask] = useState([{
        id: uuidv4(), 
        name:"",
        priority: "Baja"
    }]);

    const handleSumbit = e => {
        e.preventDefault();
        addTask(task)
        setTask({id: uuidv4(), name: "", priority: "Baja"})
    }

    return (
        <>
            <Form onSubmit={handleSumbit} className="taskCreation">
                <Row>
                    <Col xs={7} className="taskCreationCol">
                        <Form.Control
                            type="text"
                            placeholder="Nombre de la tarea"
                            required
                            value={task.name}
                            id="taskInput"
                            onChange={(e) => {setTask({...task, name: e.target.value})}}
                        />
                    </Col>
                    
                    <Col xs={3} className="taskCreationCol">
                        <Form.Select aria-label="Prioridad" value={task.priority} onChange={(e) => {setTask({...task, priority: e.target.value})}} className="taskCreationItem" id="priorities">
                            <option selected value="Baja">Baja</option>
                            <option value="Media">Media</option>
                            <option value="Alta">Alta</option>
                        </Form.Select>
                    </Col>
                    <Col className="taskCreationCol">
                        <Button type="submit" variant="success">Crear</Button>{' '}
                    </Col>
                </Row>
            </Form>
        </>
    )
}