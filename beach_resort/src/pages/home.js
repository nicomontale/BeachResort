import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services'
function home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at 300 $">
                    <Link to="rooms" className="btn-primary ">
                        our rooms
        </Link>
                </Banner>
            </Hero>
            <Services />
        </>
    );
}

export default home
