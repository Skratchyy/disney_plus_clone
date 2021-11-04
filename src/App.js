import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home"
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link 
} from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/detail'  element={<Detail />}/>
          <Route path="/"  element={<Home />}/>
          <route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
