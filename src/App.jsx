//import Home from './components/Home';
//import Register from './components/Register';
//import Login from './components/Login';
//import CartContainer from './components/CartContainer';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        {/*
        <Home /> 
        <Login/>
        <Register/>
        <CartContainer/>
        */} 
        <Pizza />
        <Footer />
      </div>
    </>
  )
}

export default App;