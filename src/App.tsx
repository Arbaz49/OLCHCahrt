
// import { createContext } from 'vm';
import './App.css';
import Chart from './components/Chart';
import SymbollsList from './components/SymbollsList';
import { useState,createContext } from 'react';
function App() {
  return (
   <>
   <div className="container" >

   <SymbollsList/>
   <Chart/>
   </div>
   </>
  );
}

export default App;
