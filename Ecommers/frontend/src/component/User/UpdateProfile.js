import React, { useEffect, useState } from 'react'
import Loader from '../layout/loading/Loader'
import MailOutline from "@mui/icons-material/MailOutline";
import Face from "@mui/icons-material/Face";
import { useSelector, useDispatch } from 'react-redux'
import { updateprof, clearerr, load } from '../../actions/Useract'
import { useAlert } from 'react-alert'
import { UPDATE_PROFILE_RESET } from "../../constants/Userconstant"
import Meta from '../layout/Metadata/Meta'
import './updatepro.css'
import { useNavigate } from 'react-router-dom'


const UpdateProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const updateprosubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("avatar", avatar);
        dispatch(updateprof(myForm));
    };

    const updateprodata = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.avatar.url);
        }

        if (error) {
            alert.error(error);
            dispatch(clearerr());
        }

        if (isUpdated) {
            alert.success("Profile Updated Successfully");
            dispatch(load());
            navigate("/account")

            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [dispatch, error, alert, navigate, user, isUpdated]);
    return (
        <div>
            {loading ? <Loader /> : (
                <div>
                    <Meta title = "Update profile" />
                    <div className="updataprofile">
                        <div className="updateprofileBox">
                            <h2 className="updateprofilehead">Update Profile</h2>

                            <form
                                className="updateprofilrform"
                                encType="multipart/form-data"
                                onSubmit={updateprosubmit}
                            >
                                <div className="updateProfileName">
                                    <Face />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="updateProfileEmail">
                                    <MailOutline />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div id="updateprofileimage">
                                    <img src={avatarPreview} alt="Avatar Preview" />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={updateprodata}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Update"
                                    className="updateprofilebtn"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UpdateProfile
