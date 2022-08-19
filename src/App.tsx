import './App.css';

import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Groups from "./components/Main/Groups/Groups";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';
import Students from './components/Main/Students/Students';
import Welcome from './components/Main/Welcome/Welcome';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Main>
        <Routes>       
            <Route path="/" element={<Welcome/>} />
            <Route path="/students" element = {<Students/>}/>
            <Route path="/groups" element={<Groups/>}/>
        </Routes>
      </Main>
        
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
