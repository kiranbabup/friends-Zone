import { usersStore } from '../../App';
import './Header.scss';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const acU = usersStore(state => state.accUser);
    console.log(acU);
    const status = usersStore(state => state.success);
    const setStatus = usersStore(state => state.updateSuces);

    const onLogoutClick = () => { setStatus("false"); }

    return (
        <div className="header">
            <div className="logo"><b>Friends</b>Zone</div>
            <div className="credentials">
                { status === "false" ?
                    <article>
                        <button onClick={() => navigate('/login')}>Login</button>/<button onClick={() => navigate('/signup')}>Sign Up</button>
                    </article>
                    :
                    <details>
                        <summary>{acU[0].username}</summary>
                        <button onClick={() => onLogoutClick()}>Logout</button>
                    </details>
                }
            </div>
        </div>
    )
}
export default Header;