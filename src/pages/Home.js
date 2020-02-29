import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <> {/* <> </> it is a react fregment or you can write <React.Fragment> */}
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at Rs.1800">
                    <Link to="/rooms" className="btn-primary" >Our Rooms </Link>
                </Banner>
            </Hero>
            <Services /> 
            <FeaturedRooms />
            
        </>
    );
}