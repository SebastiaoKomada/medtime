import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/logIn">logIn</Link>
    </nav>
  )
}

export default NavBar;
