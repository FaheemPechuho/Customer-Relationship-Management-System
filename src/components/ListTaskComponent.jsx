// import React, {useEffect, useState} from 'react';
// import { deleteTask, listTask } from '../services/TaskService';
// import {useNavigate} from 'react-router-dom'



// const ListTaskComponent = () => {
//     const [tasks, setTasks] = useState([])

//     const navigator = useNavigate();


//     useEffect(() => {
//         getAllTask();
//       }, [])
    
//       function getAllTask(){
//         listTask().then((response) =>{
//             if (Array.isArray(response.data)){
//                 setTasks(response.data);
//             }
//             else{
//                 console.error('Expected an array nut got: ', response.data);
//             }
//         })
//       }

// // useEffect(() => {
// //     listTask().then((response) =>{
// //         if (Array.isArray(response.data)){
// //             setTasks(response.data);
// //         }
// //         else{
// //             console.error('Expected an array nut got: ', response.data);
// //         }
// //     })
// // },[])

//       function addNewTask(){
//         navigator('/add-task')
    
//       }
//       function updateTask(id){
//         navigator(`/edit-task/${id}`)
//       }
//       function removeTask(id){
//         console.log(id);
    
//         deleteTask(id).then((response) =>{
//             getAllTask();
//         }).catch(error=> {
//             console.error(error);
//         })
//       }
    
   

//       return (

//         <div className='container'>
//         <h2 className='text-center'>List of Task</h2>
//         <button className="btn btn-primary mb-2" onClick={addNewTask}>Add Task</button>

//         <table className='table table-striped table-bordered'>
//             <thead>
//                 <tr>
//                     <th>Task ID</th>
//                     <th>Task Title</th>
//                     <th>Task Description</th>
//                     <th>Task Due Date</th>
//                     <th>Task Status</th>
//                     <th>Task Assigned To</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     Array.isArray(tasks) && tasks.map(task =>
//                     <tr key = {task.id}>
//                         <td>{task.id}</td>
//                         <td>{task.title}</td>
//                         <td>{task.description}</td>
//                         <td>{task.dueDate}</td>
//                         <td>{task.status}</td>
//                         <td>{task.assignedTo}</td>
//                         <td>
//                             <button className='btn btn-info' onClick={() => updateTask(task.id)}>Update</button>
//                             <button className='btn btn-danger' onClick={() => removeTask(task.id)} style={{marginLeft: '10px'}}>Delete</button>

//                         </td>
//                     </tr>
//                     )

//                 }
//                 <tr>

//                 </tr>
//             </tbody>
//         </table>

//     </div>
//     )

// }

// export default ListTaskComponent
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTask, listTask } from '../services/TaskService';
import Layout from './Layout';

const ListTaskComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listTask().then((response) => {
      setTasks(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  function handleDelete(id) {
    deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <Layout>
      <h2 className="text-center">Tasks List</h2>
      <Link to="/add-task" className="btn btn-primary mb-3">Add Task</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
                    Array.isArray(tasks) && tasks.map(task =>
                    <tr key = {task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.dueDate}</td>
                        <td>{task.status}</td>
                        <td>{task.assignedTo}</td>
                        <td>
                        <Link to={`/edit-task/${task.id}`} className="btn btn-info">Update</Link>
                <button onClick={() => handleDelete(task.id)} className="btn btn-danger ml-2" style={{marginLeft: '10px'}}>Delete</button>
              
                        </td>
                    </tr>
                    )

                }
                <tr>

                </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default ListTaskComponent;
