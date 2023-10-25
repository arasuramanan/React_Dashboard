import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {

let data = {
  earningsMonthly:"4,00,000",
  earningsAnnual:"48,00,000",
  task:80,
  pendingRequest:18
}

let [users, setUsers] = useState([
  {
    name:"LeoDass",
    email:"Leodass@gmail.com",
    batch:"B39WDT",
    mobile:"9442167267"
  },
  {
    name:"KamalHassan",
    email:"kamalhassan@gmail.com",
    batch:"B39WDT",
    mobile:"9444545454"
  },
  {
    name:"Suriya",
    email:"Suriya1978@gmail.com",
    batch:"B39WDT",
    mobile:"9454545477"
  }
])

return <>

  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
      <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
      <Route path='/edit-user/:id' element={<EditUser data={{users,setUsers}}/>}/>
      <Route path='*' element={<Navigate to='/add-user'/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
    
  </> 
}

export default App;
