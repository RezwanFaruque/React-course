import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="conatainer">
          <NavbarBrand href="/">Hello</NavbarBrand>
        </div>
      </Navbar>
       
    </div>
  );
}

export default App;