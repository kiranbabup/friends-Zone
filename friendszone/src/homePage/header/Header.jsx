import { usersStore } from '../../App';
import './Header.scss';
import { useNavigate } from "react-router-dom";

const Header = () =>{
  const navigate = useNavigate();
    const acU = usersStore(state => state.accUser)
    console.log(acU)
    return (
        <div className="header">
            <div className="logo">FriendsZone</div>
            <div className="credentials">
                {
                    acU[0].username === ""
                 ?

                <button onClick={()=>navigate('/login')}>Login</button>/<button onClick={()=>navigate('/signup')}>Sign Up</button>
                : acU[0].username}
            </div>            
        </div>
    )
}
export default Header;