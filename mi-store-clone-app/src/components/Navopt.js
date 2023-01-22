import React, { useState, useEffect } from 'react'
import NavCard from './NavCard.js'
import '../style/Navopt.css'

const Navopt = ({ miphones, redmiphones, tv, laptop, fitness, home, radio, acces }) => {

    const [miphoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiphonesToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [radioToggle, setRadioToggle] = useState(false);
    const [accesToggle, setAccesToggle] = useState(false);


    useEffect(() => {

        if (window.location.pathname === "/miphones") {
            return setMiPhoneToggle(true)
        }
        if (window.location.pathname === "/redmiphones") {
            return setRedmiPhoneToggle(true)
        }
        if (window.location.pathname === "/tv") {
            return setTvToggle(true)
        }
        if (window.location.pathname === "/laptops") {
            return setLaptopToggle(true)
        }
        if (window.location.pathname === "/lifestyle") {
            return setFitnessToggle(true)
        }
        if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }
        if (window.location.pathname === "/audio") {
            return setRadioToggle(true)
        }

        if (window.location.pathname === "/accessories") {
            return setAccesToggle(true)
        }


    }, [])


    return (
        <div className='navopt'>
            {miphoneToggle ? miphones.map((item) => (
                
                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />

            )) : null}
            {redmiphonesToggle ? redmiphones.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvToggle ? tv.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {laptopToggle ? laptop.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {fitnessToggle ? fitness.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {homeToggle ? home.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {radioToggle ? radio.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accesToggle ? acces.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
        </div>
    )
}

export default Navopt
