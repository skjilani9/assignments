import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselItem } from 'react-bootstrap';
// import { getValue } from '@testing-library/user-event/dist/utils';

const Banner = ({ banner }) => {
    return (
        <Carousel>
            {banner.end.map((item,index) => {
                return (<CarouselItem key={item.image} id="banner" interval={1000} keyboard={item.toString()}>
                    <img
                        className="d-block w-100 "
                        id="bannerImage"
                        src={item.image}
                        alt={`${index} banner`}
                    />
                    <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>Read more</u>
                    </Carousel.Caption>
                </CarouselItem>)
            })}
        </Carousel>
    )
}

export default Banner
