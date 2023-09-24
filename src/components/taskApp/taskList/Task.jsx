import { Button, Row, Col } from 'react-bootstrap';
import "./task.css"
import ListGroup from 'react-bootstrap/ListGroup';

export default function Task({task, completeTask}) {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <p className="col-4 text-start text-break">{task.name}</p>
                    <p className="col-4 text-center">{task.priority}</p>
                    <p className="col-4 text-center"><Button onClick={ () => completeTask(task.id)}>Terminar</Button></p>
                </div>
            </div>
        </>
    )
}