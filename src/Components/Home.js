import React from 'react'
import { Carousel  } from "antd";
import NavBar from './Navbar'
import Footer from './Footer'
import CarouselImage1 from '../Assets/caro1.jpg'
import CarouselImage2 from '../Assets/caro2.jpg'
import CarouselImage3 from '../Assets/caro3.jpg'
import CarouselImage4 from '../Assets/caro4.jpg'
import CarouselImage5 from '../Assets/caro5.jpg'

export default function Home() {
    return (
        <div>
            <NavBar />
            <div className='LandingPage'>
                <div className='LandingPageContainer'>
                    <h1 className='HelloHeading'>Hello There...</h1>
                    
                    <Carousel autoplay>
                        <div className="CarouselImageContainer">
                            <img className="CarouselImage" src={CarouselImage1} alt="1" />
                        </div>
                        <div className="CarouselImageContainer">
                            <img className="CarouselImage" src={CarouselImage2} alt="2" />
                        </div>
                        <div className="CarouselImageContainer">
                            <img className="CarouselImage" src={CarouselImage3} alt="3" />
                        </div>
                        <div className="CarouselImageContainer">
                            <img className="CarouselImage" src={CarouselImage4} alt="4" />
                        </div>
                        <div className="CarouselImageContainer">
                            <img className="CarouselImage" src={CarouselImage5} alt="5" />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <h1 className="AboutUsHeading">About Us...</h1>
                    <p className="AboutUspara">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
