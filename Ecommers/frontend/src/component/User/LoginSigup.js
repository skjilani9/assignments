import React, { useRef, useState, useEffect } from 'react'
import './loginsinup.css'
import Loader from '../layout/loading/Loader'
import { Link } from 'react-router-dom'
import MailOutline from "@mui/icons-material/MailOutline";
import LockOpen from "@mui/icons-material/LockOpen";
import Face from "@mui/icons-material/Face";
import { useSelector, useDispatch } from "react-redux"
import { clearerr, login, register } from '../../actions/Useract';
import { useNavigate } from 'react-router-dom'
import { useAlert } from "react-alert";

const LoginSigup = () => {
    const navigate = useNavigate();
    const alert = useAlert();

    const dispatch = useDispatch();

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const { loading, error,isAuthenticated } = useSelector((state) => state.user)

    const [loginEmail, setLoginemail] = useState("")
    const [loginPassword, setLoginpassword] = useState("")
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { name, email, password } = user;


    const [avatar, setAvatar] = useState("//profile.jpg");
    const [avatarPreview, setAvatarPreview] = useState("/profile.jpg")


    const loginsubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };


    const registersubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm))
    };



    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearerr());
        }

        if(isAuthenticated) {
            navigate('/account');
        }


    }, [dispatch, error, isAuthenticated,alert, navigate]);


    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    };

    return (
        <div>
            {loading ? <Loader /> :
                <div>
                    <div className='loginmain'>
                        <div className='loginbox'>
                            <div>
                                <div className='logintoggle'>
                                    <p onClick={(e) => switchTabs(e, "login")}>Login</p>
                                    <p onClick={(e) => switchTabs(e, "register")}>Register</p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form ref={loginTab} onSubmit={loginsubmit} className='loginform'>
                                <div>
                                    <MailOutline ></MailOutline>
                                    <input type="email" placeholder='Email' required value={loginEmail} onChange={(e) => setLoginemail(e.target.value)} />
                                </div>
                                <div>
                                    <LockOpen></LockOpen>
                                    <input type="password" placeholder='Password' required value={loginPassword} onChange={(e) => setLoginpassword(e.target.value)} />

                                </div>
                                <Link to='/password/forgot'>Forgot Password.?</Link>
                                <input type="submit" value="Login" className='loginbnt' />
                            </form>
                            <form
                                className="sigupform"
                                ref={registerTab}
                                encType="multipart/form-data"
                                onSubmit={registersubmit}
                            >
                                <div className="signUpName">
                                    <Face />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpEmail">
                                    <MailOutline />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpPassword">
                                    <LockOpen />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                </div>

                                <div id="registerImage">
                                    <img src={avatarPreview} alt="Avatar Preview" />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input type="submit" value="Register" className="signupbtn" />
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default LoginSigup
