import React, { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import RegistrationForm from "./components/RegistrationForm";


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will run once when the App component loads (works as an If statement in React!)
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>', authUser);

      if (authUser) {

        // user just logged in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        //user is/was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">

        <Routes>
          <Route exact path="/registration" element={<RegistrationForm />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/checkout" element={<Header />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/" element={<Header />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>

      </div>
    </Router >


  );
}



export default App;
