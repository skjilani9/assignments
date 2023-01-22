import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Slide = ({ result }) => {
    return (
        <Carousel>
            {result.map((item, index) => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="silders"
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
};

export default Slide
