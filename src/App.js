import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Body/Main';
import Card from './Components/Card/Card'
import Bottommain from './Components/Bottommain/Bottommain';
import Bottomcard from './Components/Bottomcard/Bottomcard';
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div>
        <Main/>
      </div>
      <div>
        <Card/>
      </div>
    <div>
      <Bottommain/>
      <Bottomcard/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
