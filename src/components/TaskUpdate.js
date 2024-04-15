
import { useState } from "react"
import axios from "axios"

export default function TaskUpdate(props) {

    const currentUrl = window.location.href;
    const id = currentUrl.split("/").pop();
    
    let [task,setTask] = useState({
        task:'',
        taskno:'',
        taskurgency:'',
        taskcreatedby:''
    })

    const changeHandler = (e)=>{
        setTask({
            ...task,
            [e.target.name]:e.target.value 
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
            axios.put(`http://localhost:8080/api/tasks/${id}`, {
                task: task.task,
                taskno:task.taskno,
                taskurgency:task.taskurgency,
                taskcreatedby:task.taskcreatedby
            })
            .then(res => {
                console.log(res.data);
                alert('Task updated');
                setTask({
                    task:'',
                    taskno:'',
                    taskurgency:'',
                    taskcreatedby:''
                   
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Update Task</h2>
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Task</label>
                            <input type="text" value={task.task} name="task" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Task No</label>
                            <input type="text" value={task.taskno} name="taskno" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Task Urgency</label>
                            <input type="text" value={task.taskurgency} name="taskurgency" onChange={changeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Task Created By</label>
                            <input type="text" value={task.taskcreatedby} name="taskcreatedby" onChange={changeHandler} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Task</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




