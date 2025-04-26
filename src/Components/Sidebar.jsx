import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
return <>
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <Link to='/' className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
    </Link>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider my-0" />

    {/* <!-- Nav Item - Dashboard --> */}
    <li className="nav-item active">
        <Link  to='/' className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </Link>
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider" />

    {/* <!-- Heading --> */}
    <div className="sidebar-heading">
        Interface
    </div>

    {/* <!-- Nav Item - Pages Collapse Menu --> */}
    <li className="nav-item active">
        <Link to='/add-user' className="nav-link">
            <i className="fa-solid fa-user-plus"></i>
            <span>Add User</span>
        </Link> 
    </li>

    {/* <!-- Divider --> */}
    <hr className="sidebar-divider"/>
</ul>
    </>
}

export default Sidebar
