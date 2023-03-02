import React from 'react'
import './home.css'
import backimg from './back.jpg'
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
import five from './5.jpg'
import six from './6.jpg'
import { useNavigate } from 'react-router-dom' 

const Home = () => {
    const navigate = useNavigate();

    const onclick = ()=>{
        navigate("/filter")
    }

    return (
        <div>
            <div>
                <div className="head">
                    <div className="backimg">
                        <img src={backimg} alt="" />
                        <div id="account-data">
                            <div>
                                <div className="account">
                                    <div id="login">
                                        <a href="/">Log in</a>
                                    </div>
                                    <div id="create">
                                        <a href="/">Create an account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="logo1">
                                <a href="/">J!</a>
                            </div>
                            <div className="text1">
                                <h1>Find the best restaurants, cafés, and bars</h1>
                            </div>
                            <div className="loca">
                                <div className="loca-data">
                                    <div className="location">
                                        <input list="location" placeholder="Please type a location" />
                                        <datalist id="location" >
                                            <option value="Sarjapur Road, Bengaluru" />
                                            <option value="HSR Layout, Bengaluru" />
                                            <option value="Kormangala, Bengaluru" />
                                            <option value="Jay Nagar, Bengaluru" />
                                            <option value="Kakinada" />
                                        </datalist>
                                    </div>
                                    <div className="resta">
                                        <input type="search" placeholder="Search for restaurants" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1. 415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caption">
                    <h2>Quick Searches</h2>
                    <p>Discover restaurants by type of meal</p>
                </div>
                <div className="data">
                    <div className="dataitems">
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={one} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Breakfast</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={two} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Lunch</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={three} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Snacks</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={four} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Dinner</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={five} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Drinks</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="data-items" onClick={onclick}>
                            <div className="data-set">
                                <div className="datasets"><img src={six} alt="" /></div>
                                <div className="datatext">
                                    <div className="text-sets">
                                        <h3>Nightlife</h3>
                                        <p>Start your day with exclusive breakfast options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
