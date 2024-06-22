// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ListUserComponent from './components/ListUserComponent'
// import { HeaderComponent } from './components/HeaderComponent'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import UserComponent from './components/UserComponent'
// import ListTaskComponent from './components/ListTaskComponent'
// import TaskComponent from './components/TaskComponent'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <BrowserRouter>
//       <HeaderComponent/>
//         <Routes>
//           {/* // http://localhost:3000/api */}
//           <Route path='/' element = {<ListUserComponent/>}></Route>
          
//           {/* // http://localhost:3000/users */}
//           <Route path="/users" element = {<ListUserComponent/>}></Route>
          
//           {/* // http://localhost:3000/add-user */}
//           <Route path="/add-user" element = {<UserComponent/>}></Route>

//           {/* // http://localhost:3000/edit-user/1 */}
//           <Route path="/edit-user/:id" element = {<UserComponent/>}></Route>

          
//            {/* // http://localhost:3000/api/tasks */}

//           <Route path="/tasks" element = {<ListTaskComponent/>}></Route> 

//          {/* // http://localhost:3000/add-task */}
//          <Route path="/add-task" element = {<TaskComponent/>}></Route>

//          {/* // http://localhost:3000/edit-user/1 */}
//          <Route path="/edit-task/:id" element = {<TaskComponent/>}></Route>
 

//         </Routes>


//     </BrowserRouter>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListTaskComponent from './components/ListTaskComponent';
import TaskComponent from './components/TaskComponent';
import ListUserComponent from './components/ListUserComponent';
import UserComponent from './components/UserComponent';
import { HeaderComponent } from './components/HeaderComponent'

function App() {
  return (

    <Router>
            <HeaderComponent/>

      <Routes>
        <Route path="/" element={<ListTaskComponent />} />
        <Route path="/tasks" element={<ListTaskComponent />} />
        <Route path="/add-task" element={<TaskComponent />} />
        <Route path="/edit-task/:id" element={<TaskComponent />} />
        <Route path="/users" element={<ListUserComponent />} />
        <Route path="/add-user" element={<UserComponent />} />
        <Route path="/edit-user/:id" element={<UserComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
