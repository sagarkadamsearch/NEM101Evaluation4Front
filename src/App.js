import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
