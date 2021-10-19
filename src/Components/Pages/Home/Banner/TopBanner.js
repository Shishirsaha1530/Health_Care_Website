import React from 'react';
import './TopBanner.css';
import Typing from 'react-typing-animation';
const TopBanner = () => {
    return (
        <div id='topBannerBg' className='d-flex justify-content-center align-items-center'>
            <Typing>
                <h4 className='bannerText container text-center'> We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a fitness centre. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals.</h4>
             </Typing> 
        </div>
    );
};

export default TopBanner;