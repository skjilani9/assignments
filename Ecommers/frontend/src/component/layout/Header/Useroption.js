import React, { useState } from 'react'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import Dashboard from '@mui/icons-material/Dashboard'
import Person from '@mui/icons-material/Person'
import ExitToApp from '@mui/icons-material/ExitToApp'
import ListAlt from '@mui/icons-material/ListAlt'
import { useNavigate } from "react-router-dom"
import './useropt.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../../actions/Useract'
import { useAlert } from "react-alert"

const Useroption = ({ user }) => {
  const navigation = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const option = [
    { icon: <ListAlt />, name: "Orders", func: orders },
    { icon: <Person />, name: "Profile", func: account },
    { icon: <ExitToApp />, name: "Logout", func: logoutUser },
  ]
  if (user.role === "admin") {
    option.unshift({ icon: <Dashboard />, name: "Dashboard", func: dashboard })
  }
  function dashboard() {
    navigation("/dashboard")
  }
  function orders() {
    navigation("/orders")
  }
  function account() {
    navigation("/account")
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  const [open, setOpen] = useState(false)
  return (
    <div>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial className='speeddia'
        ariaLabel='SpeedDial tooltip example '
        style={{ zIndex: "11" }}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction='down'
        icon={
          <img
            className='imgset'
            src={user.avatar.url}
            alt="profile" />
        }
      > {option.map((item) => (
        <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} />
      ))}

      </SpeedDial>
    </div>
  )
}

export default Useroption
