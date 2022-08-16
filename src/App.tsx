import './App.css';

import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Header from './components/Header/Header';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<Header/>}/>     
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
