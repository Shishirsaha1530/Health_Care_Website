import React from 'react';
import TopBanner from './Banner/TopBanner';
import BottomBanner from './BottomBanner/BottomBanner';
import Service from './../Services/AllService/Service';
import About from './../About/About';
import FindUsPage from './../FindUs/FindUsPage';

// code for home page displaying banner, about, service section 
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BottomBanner></BottomBanner>
            <About> </About>
            <Service> </Service>
            <FindUsPage> </FindUsPage>
        </div>
    );
};

export default Home;