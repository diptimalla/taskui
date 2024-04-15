import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



export default function Home(){
    const[tasks , setTasks]=useState([]);


    useEffect(()=>{
        //load API data when component is mounted

      const options={
        headers:{
            "Authorization ": `Bearer ${localStorage.getItem('token')}`
        }
      }


       axios.get('http://localhost:8080/api/tasks' , options)
       .then(res=>{
        console.log(res.data);
        setTasks(res.data);
       })
       .catch(err=>{
        console.log(err);
       })
    } , []);

   


    return (<div className="container">
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <h2 >Tasks List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Task Number</th>
                        <th>Task Urgency</th>
                        <th>Task Created By</th>
                       <th>Get Task By ID</th>
                       <th>Update Task By ID</th>
                       <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return <tr key={index}>
                                <td>{task.task}</td>
                                <td>{task.taskno}</td>
                                <td>{task.taskurgency}</td>
                                <td>{task.taskcreatedby}</td>
                                <td><Link to={`/taskitem/${task._id}`} >Get Task</Link></td>
                                <td><Link to={`/taskupdate/${task._id}`} >Update Task</Link></td>
                                <td>< Link to={`/taskdelete/${task._id}` } >Delete Task</Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>)
}





