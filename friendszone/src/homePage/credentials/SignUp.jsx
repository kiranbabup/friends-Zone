import { useNavigate } from "react-router-dom";
import './SignUp.scss';
import { usersStore } from "../../App";
import { useEffect, useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [un, setUn] = useState("");
    const [pw, setPw] = useState("");
    const [cpw, setCpw] = useState("");
    const [fn, setFn] = useState("");
    const [em, setEm] = useState("");
    const [ph, setPh] = useState("");
    const [gen, setGen] = useState("");
    const [tcCheckbox, setTcCheckbox] = useState(false);
    // let available = false;

    const onSignUpClick = (e) => {
        e.preventDefault();
        if (un !== "" && pw !== "" && fn !== "" && em !== "" && ph !== "" && cpw !== "" && gen !== "" && tcCheckbox !== false) {
            const user = {
                username: un,
                password: pw,
                fullname: fn,
                email: em,
                phone: ph,
                gender: gen
            };
            setUserArr(user);
            navigate("/login");
            appendObjectToArray(user);
        }
    }

    const appendObjectToArray = (newUser) => {
        const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
        storedArray.push(newUser);
        localStorage.setItem('myArray', JSON.stringify(storedArray));
    }

    const userarr = usersStore(state => state.users)
    const setUserArr = usersStore(state => state.updateUsers)

    useEffect(() => {
        console.log(userarr);
    }, [userarr])

    const onValidateUsername = () => {
        if (un.match("^[A-Za-z][A-Za-z]{4,29}$")) {
            let getOldDate = JSON.parse(localStorage.getItem("myArray"));
            getOldDate.find((user) => {
                if (user.username == un) {
                    console.log("User available")
                }
            })
            console.log(un);
            return true;
        }
    }

    const onValidatePassword = () => {
        if (pw.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,15}$/)) {
            return true;
        }
    }

    const onValidateCpwCheck = () => {
        if (cpw != pw) {
            alert("password didn't matched")
        }
    }

    const onValidateEmailId = () => {
        if (em.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return true;
        }
    }

    const onValidateMobileNo = () => {
        if (ph.match(/^[0]?[6789]\d{9}$/)) {
            return true;
        }

    }
    
    const onGenSelect = (e) => {
        if (e.target.checked) {
            setGen(e.target.value);
        }
    }
    return (
        <div className="signup">
            <main>
                <section>
                    <h1><b>Friends</b>Zone</h1>
                    <article>
                        <h2>Welcome</h2>
                        <p>Sign UP for awsome experience</p>
                    </article>
                    <button onClick={() => navigate('/')}>X</button>
                </section>
                <form onSubmit={onSignUpClick}>
                    <table>
                        <tr>
                            <td><sup>*</sup>UserName:</td>
                            <td><input type='text' placeholder='username' required onChange={(e) => setUn(e.target.value)} onBlur={()=>onValidateUsername()} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Password:</td>
                            <td><input type='password' placeholder='password' required onChange={(e) => setPw(e.target.value)} onBlur={()=>onValidatePassword()} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Confirm Password:</td>
                            <td><input type="password" placeholder="confirm password" required onChange={(e) => setCpw(e.target.value)} onBlur={(e) => onValidateCpwCheck(e)} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Full Name:</td>
                            <td><input type="text" placeholder="full name" required onChange={(e) => setFn(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>E-Mail:</td>
                            <td><input type="email" placeholder="email@xyz.com" required onChange={(e) => setEm(e.target.value)} onBlur={onValidateEmailId} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Phone Number:</td>
                            <td><input type="number" placeholder="phone number" required onChange={(e) => setPh(e.target.value)} onBlur={onValidateMobileNo} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Gender:</td>
                            <td className="gender_field">
                                <p>
                                    <input type="radio" name="gender" value="male" required checked={gen == 'male'} onChange={(e) => onGenSelect(e)} /> Male
                                    <input type="radio" name="gender" value="female" required checked={gen == 'female'} onChange={(e) => onGenSelect(e)} /> Female
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}><input className="checkbox" type="checkbox" required onChange={(e) => setTcCheckbox(e.target.checked)} /> <sup>*</sup>I agree to the terms and conditions </td>
                        </tr>
                    </table>
                    <button type='submit' >Sign Up</button>
                </form>
                <p>Already have an account? <button onClick={() => navigate('/login')}>Log in</button></p>
            </main>
        </div>
    )
}
export default SignUp;