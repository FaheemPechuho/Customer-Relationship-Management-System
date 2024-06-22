// import React, { useEffect, useState } from 'react'
// import {useNavigate, useParams} from 'react-router-dom';
// import {createTask, getTask, updateTask} from '../services/TaskService';


// const TaskComponent = () => {
    
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [dueDate, setDueDate] = useState('')
//   const [status, setStatus] = useState('')
//   const [assignedTo, setAssignedTo] = useState('')
  

// const {id} = useParams();

//   const [errors, setErrors] =  useState({
//     title: '',
//     description: '',
//     dueDate: '',
//     status: '',
//     assignedTo: '',   
//   })

//   const navigator = useNavigate();



//   useEffect(() => {
//     if(id){
//       getTask(id).then((response) => {
//         setTitle(response.data.title);
//         setDescription(response.data.description);
//         setDueDate(response.data.dueDate);
//         setStatus(response.data.status);
//         setAssignedTo(response.data.assignedTo);

//       }).catch(error => {
//         console.error(error);
//       })
//     }
//   }, [id])

//   // function saveTask(e){
//   //   e.preventDefault();

//   //   if(validateForm()){
//   //     const task = {title, description, dueDate, status, assignedTo}
//   //     console.log(task)
  
//   //     createTask(task).then((response)=> {
//   //         console.log(response.data);
//   //         navigator('/tasks')
//   //     })
//   //   }

    
//   // }
//   function saveOrUpdateTask(e){
//     e.preventDefault();

//     if(validateForm()){
//       const task = {title, description, dueDate, status, assignedTo}
//       console.log(task)
//       if(id){
//         updateTask(id, task).then((response) => {
//           console.log(response.data);
//           navigator('/tasks');
//         }).catch(error => {
//           console.error(error);
//         })
//       }else{
//         createTask(task).then((response)=> {
//           console.log(response.data);
//           navigator('/tasks')
//       }).catch(error=>{
//         console.error(error);
//       })
//       }
      
//     }
//   }

  

//   function handleTitle(e){
//     setTitle(e.target.value);
//   }
//   function handleDescription(e){
//     setDescription(e.target.value);
//   }
//   function handleDueDate(e){
//     setDueDate(e.target.value);
//   }
//   function handleStatus(e){
//     setStatus(e.target.value);
//   }
//   function handleAssignedTo(e){
//     setAssignedTo(e.target.value);
//   }

  
//   function validateForm(){
//     let valid = true;
//     const errorsCopy = {... errors}
//     if(title.trim()){
//       errorsCopy.title = '';
//     }else{
//       errorsCopy.title = 'Title is required';
//       valid = false;
//     }


//   setErrors(errorsCopy);
// return valid;
// }

// function pageTitle(){
//   if(id){
//     return <h2 className='text-center'> Update Task</h2>
//   }else{
//     return <h2 className='text-center'>Add Task</h2>
//   }

// }





//     return (
//     <div className = 'container'>
//         <br></br>
//         <div className = 'row'>
//             <div className = 'card'>
//               {
//                 pageTitle()
//               }
//                 <div className='card-body'>
//                     <form>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Title</label>
//                             <input type='text' placeholder='Enter Task Title' name='title' value={title} className={`form-control ${errors.title ? 'is-invalid': ''}`} onChange={handleTitle}>

//                             </input>
//                             {errors.title && <div className='invalid-feedback'>{errors.title} </div>}
//                         </div>

//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Description</label>
//                             <input type='text' placeholder='Enter Task Description ' name='description' value={description} className='form-control' onChange={handleDescription}>

//                             </input>

//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Due Date</label>
//                             <input type='text' placeholder='Enter Task Due Date ' name='dueDate' value={dueDate} className='form-control' onChange={handleDueDate}>

//                             </input>

//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Status</label>
//                             <input type='text' placeholder='Enter Task Status ' name='status' value={status} className='form-control' onChange={handleStatus}>

//                             </input>

//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Assigned To</label>
//                             <input type='text' placeholder='Enter Task Assigned To ' name='assignedTo' value={assignedTo} className='form-control' onChange={handleAssignedTo}>

//                             </input>

//                         </div>
           

//                         <button className='btn btn-success' onClick={saveOrUpdateTask}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default TaskComponent
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, getTask, updateTask } from '../services/TaskService';
import Layout from './Layout';

const TaskComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const { id } = useParams();
  const navigator = useNavigate();

  const [errors, setErrors] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: '',
    assignedTo: '',
  });

  useEffect(() => {
    if (id) {
      getTask(id).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(response.data.dueDate);
        setStatus(response.data.status);
        setAssignedTo(response.data.assignedTo);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  function saveOrUpdateTask(e) {
    e.preventDefault();

    if (validateForm()) {
      const task = { title, description, dueDate, status, assignedTo };
      if (id) {
        updateTask(id, task).then((response) => {
          navigator('/tasks');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createTask(task).then((response) => {
          navigator('/tasks');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'dueDate') setDueDate(value);
    else if (name === 'status') setStatus(value);
    else if (name === 'assignedTo') setAssignedTo(value);
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = '';
    } else {
      errorsCopy.title = 'Title is required';
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = '';
    } else {
      errorsCopy.description = 'Description is required';
      valid = false;
    }

    if (dueDate.trim()) {
      errorsCopy.dueDate = '';
    } else {
      errorsCopy.dueDate = 'Due date is required';
      valid = false;
    }

    if (status.trim()) {
      errorsCopy.status = '';
    } else {
      errorsCopy.status = 'Status is required';
      valid = false;
    }

    if (assignedTo.trim()) {
      errorsCopy.assignedTo = '';
    } else {
      errorsCopy.assignedTo = 'Assigned to is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    return id ? <h2 className="text-center">Update Task</h2> : <h2 className="text-center">Add Task</h2>;
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    value={title}
                    onChange={handleInputChange}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    value={description}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    className={`form-control ${errors.dueDate ? 'is-invalid' : ''}`}
                    value={dueDate}
                    onChange={handleInputChange}
                  />
                  {errors.dueDate && <div className="invalid-feedback">{errors.dueDate}</div>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="status">Status</label>
                  <select
                    name="status"
                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                    value={status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="assignedTo">Assigned To</label>
                  <input
                    type="text"
                    name="assignedTo"
                    className={`form-control ${errors.assignedTo ? 'is-invalid' : ''}`}
                    value={assignedTo}
                    onChange={handleInputChange}
                  />
                  {errors.assignedTo && <div className="invalid-feedback">{errors.assignedTo}</div>}
                </div>
                <button className="btn btn-primary" onClick={saveOrUpdateTask}>Save</button>
                <button className="btn btn-secondary" onClick={() => navigator('/tasks')} style={{marginLeft: '10px'}}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TaskComponent;
