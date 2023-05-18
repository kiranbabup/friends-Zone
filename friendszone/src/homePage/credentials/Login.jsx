import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [loginUN, setLoginUn] = useState("");
    const [loginPwd, setLoginPwd] = useState("");

    const onLoginClick = () => {
        let adminArr = JSON.parse(localStorage.getItem("admin"));
        if (adminArr.username == loginUN && adminArr.password == loginPwd) {
            navigate('/');
            localStorage.setItem('currentUser', JSON.stringify(adminArr));
        }
        else {
            let storedArr = JSON.parse(localStorage.getItem("myArray"));
            var foundUser = storedArr.find((user) => {
                if (user.username == loginUN) {
                    if (user.password == loginPwd) {
                        navigate('/');
                        return user;
                    }else {
                        alert("Incorrect password")
                    }
                }
                else {
                    alert("Incorrect username")
                }
            });
            let getCurrentUserData = (localStorage.getItem("currentUser"));
            if (!getCurrentUserData && !!foundUser) {
                localStorage.setItem('currentUser', JSON.stringify(foundUser));
            }
        }
        console.log(adminArr)
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
                    <button onClick={() => navigate('/')}>X</button>
                </section>
                <form onSubmit={onLoginClick}>
                    <input type='text' placeholder='username' required onChange={(e) => setLoginUn(e.target.value)} />
                    <input type='password' placeholder='password' required onChange={(e) => setLoginPwd(e.target.value)} />
                    <button type='submit'>Login</button>
                    <p>You don't have an account? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
                </form>
            </main>
        </div>
    )
}
export default Login;