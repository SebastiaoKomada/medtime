import './App.css';

import { Outlet } from 'react-router-dom';

import NavBar from './modules/components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
