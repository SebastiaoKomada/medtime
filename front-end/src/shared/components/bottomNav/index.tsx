import { HomeRoutesEnum } from "../../../modules/Home/routes";
import { ProfileRoutesEnum } from "../../../modules/Profile/routes";
import "./index.css";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <>
            <div className="bottom-nav__home">
                <Link className="active" to={HomeRoutesEnum.HOME}>
                    <i className="fa fa-home"></i>
                    Início
                </Link>
                <Link className="active" to="">
                    <div className="btn-add__home">
                        +
                    </div>
                </Link>
                <Link to={ProfileRoutesEnum.PROFILE}>
                    <i className="fa fa-user"></i>
                    Perfil
                </Link>
            </div>
        </>
    );
};

export default BottomNav;