
import './App.css';

import { Outlet } from 'react-router-dom';
import NavBar  from './components/navBar';




function App() {
  return (
      <div className="App">
          <NavBar />
          <h1>React Router</h1>
          <Outlet />
      </div>
  )
}

export default App
