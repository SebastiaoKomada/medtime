import { Link } from 'react-router-dom';

const Profile = () => {
  return (
      <div >
          <h1>perfil</h1>
          <p>
            <Link to="/perfil/1">Forma de perfil 1</Link>
          </p>
          <p>
            <Link to="/perfil/2">Forma de perfil 2</Link>
          </p>
          <p>
            <Link to="/perfil/3">Forma de perfil 3</Link>
          </p>
      </div>
  )
}

export default Profile;
