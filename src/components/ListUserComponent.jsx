// import React, {useEffect, useState} from 'react';
// import { deleteUser, listUser } from '../services/UserService';
// import {useNavigate} from 'react-router-dom'

// const ListUserComponent = () => {
//   const [users, setUsers] = useState([])

//   const navigator = useNavigate();
  
//   useEffect(() => {
//     getAllUser();
//   }, [])

//   function getAllUser(){
//     listUser().then((response) =>{
//         if (Array.isArray(response.data)){
//             setUsers(response.data);
//         }
//         else{
//             console.error('Expected an array nut got: ', response.data);
//         }
//     })
//   }

//   function addNewUser(){
//     navigator('/add-user')

//   }
//   function updateUser(id){
//     navigator(`/edit-user/${id}`)
//   }
//   function removeUser(id){
//     console.log(id);

//     deleteUser(id).then((response) =>{
//         getAllUser();
//     }).catch(error=> {
//         console.error(error);
//     })
//   }
  
//     return (
//     <div className='container'>
//         <h2 className='text-center'>List of Users</h2>
//         <button className="btn btn-primary mb-2" onClick={addNewUser}>Add User</button>
//         <table className='table table-striped table-bordered'>
//             <thead>
//                 <tr>
//                     <th>User ID</th>
//                     <th>User Name</th>
//                     <th>User DOB</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     Array.isArray(users) && users.map(user =>
//                     <tr key = {user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.dob}</td>
//                         <td>
//                             <button className='btn btn-info' onClick={() => updateUser(user.id)}>Update</button>
//                             <button className='btn btn-danger' onClick={() => removeUser(user.id)} style={{marginLeft: '10px'}}>Delete</button>

//                         </td>
//                     </tr>
//                     )

//                 }
//                 <tr>

//                 </tr>
//             </tbody>
//         </table>

//     </div>
//   )
// }

// export default ListUserComponent

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteUser, listUser } from '../services/UserService';
import Layout from './Layout';

const ListUserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUser().then((response) => {
      setUsers(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  function handleDelete(id) {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <Layout>
      <h2 className="text-center">Users List</h2>
      <Link to="/add-user" className="btn btn-primary mb-3">Add User</Link>
      <table className="table table-striped">
        <thead>
        <tr>
                  <th>User ID</th>
                     <th>User Name</th>
                     <th>User DOB</th>
                     <th>Actions</th>
                 </tr>
        </thead>
        <tbody>
        {
                    Array.isArray(users) && users.map(user =>
                    <tr key = {user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.dob}</td>
                        <td>
                        <Link to={`/edit-user/${user.id}`} className="btn btn-info">Update</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger ml-2" style={{marginLeft: '10px'}}>Delete</button>
              
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

export default ListUserComponent;
