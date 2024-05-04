import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Paper, styled } from '@mui/material';
import axios from 'axios';
import { Navbar, Container, Nav, } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from 'react-router-dom';
import WeatherPage from './Pages/WeatherPage';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

function App() {



  return (
    <BrowserRouter>
       
       
    <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="">React with back</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="App-link" href="/click">Основная страница</Nav.Link>
            
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="App">
      <Routes>
        <Route path='/' element={<WeatherPage/>}/>
        <Route path="/click" element={<WeatherPage />} />
        
      </Routes>
   
        

      </div>
    </BrowserRouter>
  );
}

export default App;
