import { usersStore } from '../../App';
import './Header.scss';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    
    const setSelectedCat = usersStore(state => state.updateSelectedCategory);

    const onLogoutClick = () => { 
        localStorage.removeItem("currentUser");
        navigate('/')
    }
        let getUserdata =JSON.parse(localStorage.getItem("currentUser"));
    
    return (
        <div className="header">
            <div className="logo" onClick={()=>{navigate('/'); setSelectedCat("")}}><b>Friends</b>Zone</div>
            <div className="credentials">
                { !getUserdata ?
                    <nav>
                        <button onClick={() => navigate('/login')}>Login</button>/<button onClick={() => navigate('/signup')}>Sign Up</button>
                    </nav>
                    :
                    <details>
                        <summary>{getUserdata.username}</summary>
                        <br/>
                        {(getUserdata.username == "Kiranpkb") ? <button onClick={() => navigate('/admindashboard')}>Admin Dashboard</button>: <button onClick={() => navigate('/userdashboard')} >Dashboard</button>}
                        <br/>
                        <button onClick={() => onLogoutClick()}>Logout</button>
                    </details>
                }
            </div>
        </div>
    )
}
export default Header;