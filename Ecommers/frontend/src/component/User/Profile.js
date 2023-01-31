import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Meta from '../layout/Metadata/Meta'
import Loader from '../layout/loading/Loader'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './profile.css'

const Profile = () => {
    const navigation = useNavigate();
    const { user, loading, isAuthenticated } = useSelector((state) => state.user)
    useEffect(() => {
        if (isAuthenticated === false) {
            navigation("/login")
        }
    }, [navigation, isAuthenticated])
    if(!user){
        <Meta title={`page not found`} />
    }
    return (
        <div>
            {loading ? <Loader /> : (
                <div>
                    <Meta title={`${user.name}' Profile`} />
                    <div className='profilebox'>
                        <div>
                            <h1>My Profile</h1>
                            <div>
                                <img src={user.avatar.url} alt={user.name} />
                            </div>
                            <Link to="/me/update">Edit Profile</Link>
                        </div>
                        <div>
                            <div>
                                <h4>Full Name</h4>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h4>Joined On</h4>
                                <p>{String(user.createdAt).substr(0, 10)}</p>
                            </div>
                            <div>
                                <Link to="/orders">My Orders</Link>
                                <Link to="/password/update">Change Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile
