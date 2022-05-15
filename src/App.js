import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header/>        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
