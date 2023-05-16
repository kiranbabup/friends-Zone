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

    const userarr = usersStore(state => state.users);
    const setUserArr = usersStore(state => state.updateUsers);

    useEffect(() => {
        console.log(userarr);
    }, [userarr])
    
    const onSignUpClick = (e) => {
        e.preventDefault();
        if (un !== "" && pw !== "" && fn !== "" && em !== "" && ph !== "" && cpw !== "" && gen !== "" && tcCheckbox !== false) {
            let getOldDate = (localStorage.getItem("myArray"));
            if (!getOldDate) {
                // Local storage is empty, add data
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
                console.log("Data added to local storage");
            } else {
                // Local storage is not empty, check if username exists
                var username = un;
                if (getOldDate.includes(username)) {
                    console.log("Username already exists in local storage");
                    alert("Username already exists");
                }
                else {
                    // Username does not exist, add data
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
                    console.log("Data added to local storage");
                }
            }
        }
    }

    const appendObjectToArray = (newUser) => {
        const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
        storedArray.push(newUser);
        localStorage.setItem('myArray', JSON.stringify(storedArray));
    }

    const onValidateUsername = () => {
        if (un.match("^[A-Za-z][A-Za-z]{4,20}$")) {
            console.log(un);
            return true;
        }
        else {
            alert("Username invalied");
        }
    }

    const onValidatePassword = () => {
        if (pw.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,12}$/)) {
            return true;
        }
        else {
            if (pw.length == 3) {
                alert("Password invalied");
            }
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
        else {
            alert("E-mail invalied");
        }
    }

    const onValidateMobileNo = () => {
        if (ph.match(/^[0]?[6789]\d{9}$/)) {
            return true;
        }
        else {
            alert("Phone number invalied");
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
                            <td><input type='text' placeholder='username' required onChange={(e) => setUn(e.target.value)} onBlur={() => onValidateUsername()} /></td>
                        </tr>
                        <tr>
                            <td><sup>*</sup>Password:</td>
                            <td><input type='password' placeholder='password' required onChange={(e) => setPw(e.target.value)} onBlur={() => onValidatePassword()} /></td>
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
                                    <input type="radio" name="gender" value="other" required checked={gen == 'other'} onChange={(e) => onGenSelect(e)} /> Other
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