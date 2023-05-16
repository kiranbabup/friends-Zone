import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';
import { usersStore } from '../../App';

const Login = () =>{
  const navigate = useNavigate();
    const [loginUN, setLoginUn] = useState("");
    const [loginPwd, setLoginPwd] = useState("");

    const setAccUser = usersStore(state => state.updateAccUser);
    const setSuccess = usersStore(state => state.updateSuces);

    const onLoginClick = () => {
        let storedArr = JSON.parse(localStorage.getItem("myArray"));
        // console.log(storedArr);
        let foundUser = storedArr.find((user)=>{
            if(user.username==loginUN){
                if(user.password==loginPwd){
                    navigate('/');
                    setSuccess("true");
                    return user;
                }
            }
        });
        setAccUser(foundUser);
      
    }
    return (
        <div className="login">
            <main>
                <section>
                    <h1><b>Friends</b>Zone</h1>
                    <article>
                        <h2>Welcome</h2>
                        <p>Login for awsome experience</p>
                    </article>
                    <button onClick={()=>navigate('/')}>X</button>
                </section>
                <form onSubmit={onLoginClick}>
                    <input type='text' placeholder='username' required onChange={(e)=>setLoginUn(e.target.value)} />
                    <input type='password' placeholder='password' required onChange={(e)=>setLoginPwd(e.target.value)}/>
                    <button type='submit'>Login</button>
                    <p>You don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
                </form>
            </main>
        </div>
    )
}
export default Login;