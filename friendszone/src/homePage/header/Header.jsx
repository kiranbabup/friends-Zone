import { usersStore } from '../../App';
import './Header.scss';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const acU = usersStore(state => state.accUser);
    console.log(acU);
    const status = usersStore(state => state.success);
    const setStatus = usersStore(state => state.updateSuces);
    const setSelectedCat = usersStore(state => state.updateSelectedCategory);

    const onLogoutClick = () => { 
        setStatus("false"); 
    }
    
    return (
        <div className="header">
            <div className="logo" onClick={()=>{navigate('/'); setSelectedCat("")}}><b>Friends</b>Zone</div>
            <div className="credentials">
                { status === "false" ?
                    <nav>
                        <button onClick={() => navigate('/login')}>Login</button>/<button onClick={() => navigate('/signup')}>Sign Up</button>
                    </nav>
                    :
                    <details>
                        <summary>{status}</summary>
                        <br/>
                        {(status == "Kiranpkb") ? <button onClick={() => navigate('/admindashboard')}>Admin Dashboard</button>: true}
                        <br/>
                        <button onClick={() => onLogoutClick()}>Logout</button>
                    </details>
                }
            </div>
        </div>
    )
}
export default Header;