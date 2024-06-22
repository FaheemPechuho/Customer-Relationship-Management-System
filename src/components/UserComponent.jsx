// import React, { useEffect, useState } from 'react'
// import {useNavigate, useParams} from 'react-router-dom';
// import {createUser, getUser, updateUser} from '../services/UserService';


// const UserComponent = () => {
    
//   const [name, setName] = useState('')
//   const [dob, setDOB] = useState('')

// const {id} = useParams();

//   const [errors, setErrors] =  useState({
//     name: '',
//     dob: ''    
//   })

//   const navigator = useNavigate();

//   useEffect(() => {
//     if(id){
//       getUser(id).then((response) => {
//         setName(response.data.name);
//         setDOB(response.data.dob);

//       }).catch(error => {
//         console.error(error);
//       })
//     }
//   }, [id])

//   /*function saveUser(e){
//     e.preventDefault();

//     if(validateForm()){
//       const user = {name, dob}
//       console.log(user)
  
//       createUser(user).then((response)=> {
//           console.log(response.data);
//           navigator('/users')
//       })
//     }

    
//   }*/
//   function saveOrUpdateUser(e){
//     e.preventDefault();

//     if(validateForm()){
//       const user = {name, dob}
//       console.log(user)
//       if(id){
//         updateUser(id, user).then((response) => {
//           console.log(response.data);
//           navigator('/users');
//         }).catch(error => {
//           console.error(error);
//         })
//       }else{
//         createUser(user).then((response)=> {
//           console.log(response.data);
//           navigator('/users')
//       }).catch(error=>{
//         console.error(error);
//       })
//       }
      
//     }
//   }


//   function handleName(e){
//     setName(e.target.value);
//   }
//   function handleDOB(e){
//     setDOB(e.target.value);
//   }

  
//   function validateForm(){
//     let valid = true;
//     const errorsCopy = {... errors}
//     if(name.trim()){
//       errorsCopy.name = '';
//     }else{
//       errorsCopy.name = 'Name is required';
//       valid = false;
//     }
  
//   if(dob.trim()){
//     errorsCopy.dob = '';
//   }else{
//     errorsCopy.dob = 'Date Of Birth is required';
//     valid = false;
//   }

//   setErrors(errorsCopy);
// return valid;
// }



// function pageTitle(){
//   if(id){
//     return <h2 className='text-center'>Update User</h2>
//   }else{
//     return <h2 className='text-center'>Add User</h2>
 
//   }
// }

//     return (
//     <div className = 'container'>
//         <br></br>
//         <div className = 'row'>
//             <div className = 'card'>
//                 {
//                   pageTitle()
//                 }
//                 <div className='card-body'>
//                     <form>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Name</label>
//                             <input type='text' placeholder='Enter User Name' name='name' value={name} className={`form-control ${errors.name ? 'is-invalid': ''}`} onChange={handleName}>

//                             </input>
//                             {errors.name && <div className='invalid-feedback'>{errors.name} </div>}
//                         </div>

//                         <div className='form-group mb-2'>
//                             <label className='form-label'>DOB</label>
//                             <input type='text' placeholder='Enter Date of Birth ' name='dob' value={dob} className={`form-control ${errors.dob ? 'is-invalid': ''}`} onChange={handleDOB}>

//                             </input>
//                             {errors.dob && <div className='invalid-feedback'>{errors.dob} </div>}

//                         </div>

//                         <button className='btn btn-success' onClick={saveOrUpdateUser}>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default UserComponent
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, getUser, updateUser } from '../services/UserService';
import Layout from './Layout';

const UserComponent = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState('');

  const { id } = useParams();
  const [errors, setErrors] =  useState({
    name: '',
    dob: ''    
  })

  const navigator = useNavigate();

  useEffect(() => {
    if(id){
      getUser(id).then((response) => {
        setName(response.data.name);
        setDOB(response.data.dob);

      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])


    function saveOrUpdateUser(e){
    e.preventDefault();

    if(validateForm()){
      const user = {name, dob}
      console.log(user)
      if(id){
        updateUser(id, user).then((response) => {
          console.log(response.data);
          navigator('/users');
        }).catch(error => {
          console.error(error);
        })
      }else{
        createUser(user).then((response)=> {
          console.log(response.data);
          navigator('/users')
      }).catch(error=>{
        console.error(error);
      })
      }
      
    }
  }


 


  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'dob') setDOB(value);
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = 'Name is required';
      valid = false;
    }

    if (dob.trim()) {
      errorsCopy.dob = '';
    } else {
      errorsCopy.dob = 'Date of Birth is required';
      valid = false;
    }

   
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    return id ? <h2 className="text-center">Update User</h2> : <h2 className="text-center">Add User</h2>;
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
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    name="dob"
                    className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                    value={dob}
                    onChange={handleInputChange}
                  />
                  {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                </div>
                
                <button className="btn btn-primary" onClick={saveOrUpdateUser}>Save</button>
                <button className="btn btn-secondary" onClick={() => navigator('/users')} style={{marginLeft: '10px'}}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserComponent;
