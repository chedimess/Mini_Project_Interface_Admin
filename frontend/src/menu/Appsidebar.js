import React from 'react'
import {Link} from "react-router-dom"
import img from '../components/home/img/logo.jpg'


function Appsidebar() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4 sidee">
      {/* Brand Logo */}   
      <Link  className="brand-link" to="/">
<img src={img} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">E-COMMERCE</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}          
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user-shield" />
                <p>
                  Admin
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                <Link  to="/client" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Client</p>
                    </Link>
                </li>
                <li className="nav-item">
                  <Link  to="/categorie" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Category</p>
                    </Link>
                </li>
                <li className="nav-item">
                <Link  to="/produit" className="nav-link">
                    <i className="far fa-circle nav-icon" />  
                    <p>Product</p>
                    </Link>
                </li>            
              </ul>
            </li>  
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    )
}

export default Appsidebar
