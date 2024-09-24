import React from 'react';

import BannerBikeFinder from '../BannerBikeFinder/BannerBikeFinder';
import CarouselBike from '../Carousel/CarouselBike';
import PopularBrands from '../PopularBrands';
// import BannerGetonroad from '../TopSelingBikes';
import TopSellingBikes from '../TopSelingBikes';
import MainNavbar from '../MainNavbar';



const HomePage = () => {
    return (
        <div className='container'>
            
           {/* <MainNavbar/> */}
           <BannerBikeFinder/>
           <CarouselBike/>
           <PopularBrands/>
           {/* <TopSellingBikes/> */}
        </div>
    );
}

export default HomePage;


