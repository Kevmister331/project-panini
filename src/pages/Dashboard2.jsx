import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

function Dashboard2(){

    const [toDo, setToDo] = useState([
        {"id": 1, "title": "CPSC 210", "status": false},
        {"id": 2, "title": "Personal Website", "status": false}

    ]);

    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    const addTask = () => {
        if(newTask){
            let num = toDo.length + 1;
            let newEntry = {id: num, title: newTask, status: false}
            setToDo([...toDo, newEntry])
            setNewTask('');
        }

    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter( task => task.id !== id)
        setToDo(newTasks);
        
    }
    
    const markDone = (id) => {
        let newTask = toDo.map( task => {
            if ( task.id === id)
            {
                return({...task, status: !task.status })
            }
            return task;
        })
       setToDo(newTask); 
    }

    const changeTask = (e) => {
        
    }

    return (
        <div className="project-sidebar">
            <h4>My Projects</h4>
            {toDo && toDo.length ? '' : 'No Tasks...'}

            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map( (task, index) => {
                    return(
                        <React.Fragment key={task.id}>
                        
                        <div className="col taskBg">
                        
                        <div className={`project-sidebar-item${task.status ? ' done' : ''}`}>
                        <span className="taskText">{task.title}</span>
                        
                        
                        </div>
                        <div className="iconsWrap">
                        <span title="Completed / Not Completed"onClick={ (e) => markDone(task.id) }>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                        <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                        </div>
                        
                        </div>
                        
                        
                        
                        </React.Fragment>
                        )
                    })
                    
            }
            <div className="add-project-group">
                <div className="col">
                    <input 
                    value={newTask}
                    onChange={ (e) => setNewTask(e.target.value)}
                    className="form-control form-control-lg"
                    id="new-input"/>

                </div>
                <div className="col-auto">
                    <button
                    onClick={addTask}
                        className="button new-project-btn">
                    Add New Project</button>

                </div>
            </div>
        </div>
    )
}

export default Dashboard2