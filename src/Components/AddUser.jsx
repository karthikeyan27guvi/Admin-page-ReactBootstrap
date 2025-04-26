import React, { useState,useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

function AddUser( ) {

  let { user, setUser } = useContext(userContext)

  let [name, setName] = useState("");
  let [email, setEmail] = useState("")
  let [dob, setDob] = useState("")
  let [gender, setGender] = useState("")
  let [subscription, setSubscription] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = () => {
    let data = { name, email, dob, gender, subscription }
    data.id = user.length? user[user.length-1].id +1 : 1
    user.push(data);
    setUser([...user])
    setTimeout(()=>{
      navigate('/')
    },1000)
  }  

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Add User</h1>
          </div>
          <div className='row'>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter DOB" onChange={(e)=>{setDob(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select  defaultValue={null} onChange={(e)=>{setGender(e.target.value)}}>
                  <option value= "null">Select Gender</option>
                  <option value='male' >Male</option>
                  <option value='female' >Female</option>
                  <option value='others' >Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Check type="checkbox" label="Subscription" checked={subscription} onChange={(e)=>{setSubscription(e.target.checked)}} />
              </Form.Group>

              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default AddUser
