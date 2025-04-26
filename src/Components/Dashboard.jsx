import React, {useContext} from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { findIndexById } from './Helper';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import { DashboardContext } from '../Context/DashboardContextComponent';

function Dashboard() {

    let {user, setUser} = useContext(userContext);
    let navigate = useNavigate();

    let data = useContext(DashboardContext)

    const handleDelete = (id) =>{
        const index = findIndexById(user, id);
        if(index !==-1){
            user.splice(index, 1);
            setUser([...user])
        }else{
            alert("Invalid Id")
        }
    }
    return <>
        <div className="row">
            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>
            </div>
            {
                data.map((e, i) => {
                    return <Card data={e} key={i} />
                })
            }
            <div className='row'>
            <h1 className="h3 mb-3 text-gray-800">User Database</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Subscription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        user.map((e)=>{
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.dob}</td>
                                <td>{e.gender}</td>
                                <td>{e.subscription? <>Active</>:<>Inactive</>}</td>
                                <td>
                                    <Button variant='primary'onClick={()=>navigate(`/edit-user/${e.id}`)}>Edit</Button>
                                    &nbsp;
                                    <Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                                </td>
                            </tr>
                        })
                       }
                    </tbody>
                </Table>
            </div>
        </div>
    </>
}

export default Dashboard
