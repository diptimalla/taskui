
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TaskItem(props) {

    // const currentUrl = window.location.href;
    const id = useParams().id;


    const [task, setTask] = useState(null);

    useEffect(() => {
        if (id) {
            // Load API data when component is mounted
            axios.get(`http://localhost:8080/api/tasks/${id}`)
                .then(res => {
                    console.log(res.data);
                    setTask(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <h2 className="text-center">Task Details</h2>
                    {task && (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">Task</th>
                                    <th className="text-center">Task No</th>
                                    <th className="text-center">Task Urgency</th>
                                    <th className="text-center">Task created by</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{task.task}</td>
                                    <td>{task.taskno}</td>
                                    <td>{task.taskurgency}</td>
                                    <td>{task.taskcreated}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );




    function TaskUpdate(props) {

        const currentUrl = window.location.href;
        const id = currentUrl.split("/").pop();

        let [task, setTask] = useState({
            title: '',
            description: ''
        })

        const changeHandler = (e) => {
            setTask({
                ...task,
                [e.target.name]: e.target.value // title:valueOfTextBox
            })
        }

        const submitHandler = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:4000/api/tasks/${id}`, {
                title: task.title,
                description: task.description
            })
                .then(res => {
                    console.log(res.data);
                    alert('Task updated');
                    setTask({
                        title: '',
                        description: ''
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
                                <label>Title</label>
                                <input type="text" value={task.title} name="title" onChange={changeHandler} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" value={task.description} name="description" onChange={changeHandler} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Update Task</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}