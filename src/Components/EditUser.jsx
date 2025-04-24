import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { findIndexById } from './Helper';

function EditUser({ user, setUser }) {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("")
  let [dob, setDob] = useState("")
  let [gender, setGender] = useState("")
  let [subscription, setSubscription] = useState(false)

  let navigate = useNavigate()
    let {id} = useParams()

  const handleSubmit = () => {
    let index = findIndexById(user,Number(id))
    let data = { id:Number(id), name, email, dob, gender, subscription }
    user.splice(index, 1, data)
    setUser([...user])
    navigate("/")
  }  

  const getData = () => {
    let index = findIndexById(user, Number(id))
    if (index !==-1){
      setName(user[index].name)
      setEmail(user[index].email)
      setDob(user[index].dob)
      setGender(user[index].gender)
      setSubscription(user[index].subscription)
    }else{
      alert("User not found")
    }
  }
//useEffect will get triggered just before the rendering the component.
//useEffect without any dependency will get triggered on every render of the component.
//useEffect with empty dependency will get triggered only once when the component is mounted.
//useEffect with dependency will get triggered when the state is changed. 

  useEffect(()=>{
    getData();
  },[])

  return <>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
          </div>
          <div className='row'>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" placeholder="Enter DOB" value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select  defaultValue={gender} onChange={(e)=>{setGender(e.target.value)}}>
                  <option value= "null">Select Gender</option>
                  <option value='Male' >Male</option>
                  <option value='Memale' >Female</option>
                  <option value='Others' >Others</option>
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

export default EditUser
