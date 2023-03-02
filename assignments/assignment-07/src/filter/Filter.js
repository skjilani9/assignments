import React from 'react'
import { useNavigate } from 'react-router-dom'
import './filter.css'
import image from './idl1.png'

const Filter = () => {
    const navigate = useNavigate();
    const onclick =()=>{
        navigate("/details")
    }
  return (
    <div>
      <header className="main">
        <span className="logo">
            <a href="/" className="logo-span">J!</a>
        </span>
        <span className="account1">
            <a href="/" className="login1">Login</a>
            <a href="/" className="create1">Create an account</a>
        </span>
    </header>
    <h2>Breakfast Places in Mumbai</h2>
    <div className="box">
        <form action="#" className="formdata">
            <h3>Filter</h3>
            <div className="one">
                <label htmlFor="location" className="lac">Select Location</label>
                <select name="location" id="location" className="sec">
                    <option selected>select location</option>
                    <option value="mumbai">mumbai</option>
                    <option value="chennai">chennai</option>
                    <option value="bengaluru">bengaluru</option>
                    <option value="hyderbad">hyderbad</option>
                </select>
            </div>
            <div className="two">
                <label htmlFor="Cuisine" className="cusi">Cuisine</label>
                <label htmlFor="North Indian"><input type="checkbox" name="Cuisine" id="North Indian" />North Indian</label>
                <label htmlFor="South Indian"><input type="checkbox" name="Cuisine" id="South Indian" />South Indian</label>
                <label htmlFor="Chinese"><input type="checkbox" name="Cuisine" id="Chinese" />Chinese</label>
                <label htmlFor="Fast Food"><input type="checkbox" name="Cuisine" id="Fast Food" />Fast Food</label>
                <label htmlFor="Street Food"><input type="checkbox" name="Cuisine" id="Street Food" />Street Food</label>
            </div>
            <div className="three">
                <label htmlFor="cost" className="cos">Cost for Two</label>
                <label htmlFor="Less than  500"><input type="radio" name="cost" id="Less than  500" />Less than 500</label>
                <label htmlFor=" 500 to  1000"><input type="radio" name="cost" id=" 500 to  1000" /> 500 to 1000</label>
                <label htmlFor=" 1500 to  2000"><input type="radio" name="cost" id=" 1500 to  2000" /> 1500 to 2000</label>
                <label htmlFor=" 2000+"><input type="radio" name="cost" id=" 2000+" />2000+</label>
            </div>
            <div className="four">
                <label htmlFor="sort" className="sor">Sort</label>
                <label htmlFor="Price low to high"><input type="radio" name="sort" id="Price low to high" />Price low to
                    high</label>
                <label htmlFor="Price high to low"><input type="radio" name="sort" id="Price high to low" />Price high to
                    low</label>
            </div>
        </form>
        <div className="box2">
            <div className="container1" onClick={onclick}>
                <div className="hotel1">
                    <img src={image} alt="hotel"/>
                    <div className="tool1">
                        <h4>The Big Chill Cakery</h4>
                        <p>FORT</p>
                        <p>Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                    </div>
                </div>
                <div className="line1"></div>
                <div className="ssss">
                    <div className="cccc">
                        <p>CUISINES:</p>
                        <p>COST FOR TWO:</p>
                    </div>
                    <div className="bbbb">
                        <p>Bakery</p>
                        <p>₹700</p>
                    </div>
                </div>
            </div>
            <div className="container2" onClick={onclick}>
                <div className="hotel2">
                    <img src={image} alt="hotel" />
                    <div className="tool2">
                        <h4>The Big Chill Cakery</h4>
                        <p>FORT</p>
                        <p>Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                    </div>
                </div>
                <div className="line2"></div>
                <div className="ssss1">
                    <div className="cccc1">
                        <p>CUISINES:</p>
                        <p>COST FOR TWO:</p>
                    </div>
                    <div className="bbbb1">
                        <p>Bakery</p>
                        <p>₹700</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        <a href="/filter">&lt;</a>
        <a href="/filter">1</a>
        <a href="/filter">2</a>
        <a href="/filter">3</a>
        <a href="/filter">4</a>
        <a href="/filter">5</a>
        <a href="/filter">&gt;</a>
    </div>
    </div>
  )
}

export default Filter
