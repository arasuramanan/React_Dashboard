import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

    function EditUser(props) {
    let params = useParams();
    let navigate = useNavigate();


    //    if(params.id>=props.data.users.length)   
    //   navigate('/dashboard');

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setMobile] = useState("");
    let [batch, setBatch] = useState("");



     useEffect(()=>{
        if(params.id<props.data.users.length)
        {
            setName(props.data.users[params.id].name)
            setEmail(props.data.users[params.id].email)
            setMobile(props.data.users[params.id].mobile)
            setBatch(props.data.users[params.id].batch)
        }
        else
        {
            navigate('/dashboard');
        }
     },[navigate,params.id,props.data.users])

    
    let handleSubmit = ()=> {
      let newData = {name,email,mobile,batch}
      // take a deep clone of the state
      let data = [...props.data.users];
      //replace the data to the new clone
      data.splice(params.id,1,newData);
      //update the state with the new cloned variable
      props.data.setUsers(data);
      navigate('/dashboard');
      }

 

  return <div className='mx-auto col-10'>
  <Form>

  <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </Form.Group> 

    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Batch</Form.Label>
      <Form.Control type="text" placeholder="Enter Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
    </Form.Group>
    
    <Button variant="primary" onClick={()=>handleSubmit()}>
      Submit
    </Button>
  </Form>
</div>
}

export default EditUser