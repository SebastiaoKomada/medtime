import { useParams, useNavigate } from 'react-router-dom';


const ProfileDetails = () => {
    const {id} = useParams();
    
    const navigate = useNavigate()

    const handleProfile = () =>{
        console.log("contato enviado");
        return navigate("/");
    };

    return (
        <div >
            <h1>exibindo informações do contato: {id}</h1>
            <button onClick={handleProfile}>Enviar mensagem </button>
        </div>
    )
}

export default ProfileDetails;
