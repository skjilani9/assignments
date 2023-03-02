import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './details.css'
import image from './idl1.png'

const Details = () => {
    return (
        <div>
            <header className="detalis">
                <span className="logo3">
                    <a href="/" className="logo3-span">J!</a>
                </span>
                <span className="account3">
                    <a href="/" className="login3">Login</a>
                    <a href="/" className="create3">Create an account</a>
                </span>
            </header>
            <div className='details-box'>
                <div className='inner-box'>
                    <div className='img-box'>
                        <img src={image} alt="hotel-food" />
                        <a href="#">Click to see Image Gallery</a>
                        <h1>The Big Chill Cakery</h1>
                    </div>
                    <a href="#">Place Online Order</a>
                    <Tabs>
                        <TabList className="tabs">
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                        </TabList>
                        <TabPanel className="panel">
                            <h2>About this place</h2>
                            <h3>Cuisine</h3>
                            <p>Bakery, Fast-food</p>
                            <h3>Average Cost</h3>
                            <p>₹700 for two people (approx.)</p>
                        </TabPanel>
                        <TabPanel className="panel">
                            <h3>Phone Number</h3>
                            <h5>+91 114004566</h5>
                            <h3>The Big Chill Cakery</h3>
                            <p>Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}

export default Details
