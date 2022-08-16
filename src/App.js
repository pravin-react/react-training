import React, { useEffect } from "react";
import './App.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom/client";
import Parent from "./component/Twoway/Parent";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./component/Users/Login";
import Register from "./component/Users/Register";
import Dashboard from "./component/Users/Dashboard";
import Form from './component/Form/Form';

import './App.css';
import Notfound from "./Notfound";
import Home from "./Home";
import Portals from "./component/Basic/Portals";
import ReducerHook from "./component/Basic/Hooks";
import LoginUseReducer from "./component/Basic/HooksTwo";
import FetchApi from "./component/FetchApi";
import FetchAxios from "./component/FetchAxios";
import ProductList from "./component/Crud/ProductList";
import AddProduct from "./component/Crud/AddProduct";
import EditProduct from "./component/Crud/EditProduct";

function App() {
  const userData = JSON.parse(localStorage.getItem("loggedin"));
  const itemValue = sessionStorage.getItem("item_key");

  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>React Training</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    
                    <><Link to="/register">
                      <Button variant="info" style={{ marginRight: "10px" }}>Register</Button>
                    </Link><Link to="/login">
                        <Button variant="outline-info" style={{ marginRight: "10px" }}>Login</Button>
                      </Link></>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/twoway" element={<Parent />} />
          <Route path="/portal" element={<Portals />} />
          <Route path="/reducer" element={<ReducerHook />} />
          <Route path="/reducer-login" element={<LoginUseReducer />} />
          <Route path="/fetch" element={<FetchApi />} />
          <Route path="/axios" element={<FetchAxios />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product" element={<EditProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
