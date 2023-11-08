import './App.css';

import { Outlet, Route, Routes } from 'react-router-dom';

import NavBar from './shared/components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
