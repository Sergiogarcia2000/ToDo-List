import "./Header.css"
import todoLogo from "../../assets/todo-logo.png"

export default function TaskHeader() {
    return (
        <>
            <header>
                <img src={todoLogo} className="todoLogo" alt="ToDo Logo" />
                <h1 className="headerName">Sergio García Mayo</h1>
            </header>
        </>
    )
}