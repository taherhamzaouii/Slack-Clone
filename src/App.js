import React from 'react';
import './App.css';
import Header from './Components/Header'
import SideBar from './Components/SideBar'

function App() {
  return (
    <div className="App">
        <Header />
     <div className='app_body'>
        <SideBar />
     </div>
    </div>
  );
}

export default App;
