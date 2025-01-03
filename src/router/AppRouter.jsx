import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeadNavbar from './AppHeadNavbar';
import LoginRegister from '../components/user/LoginRegister';
import HomePage from '../components/HomePage/HomePage';
import WishList from '../components/WishList/WishList';
import BikeDetails from '../components/BikeDetails/BikeDetails';
import GetOnRoadPrice from '../components/GetOnRoad/GetOnRoadPrice';
import PrivacyPolicy from '../components/PrivacyPolicy';
import BrandBikes from '../components/BrandBikes/BrandBikes';
import BikeComparison from '../components/BikeComparison/BikeComparison';
import TopSellingBikes from '../components/TopSelingBikes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
           
                <Route path='/' element={<AppHeadNavbar/>}>
                    <Route index element={<HomePage/>}  />
                    <Route path='/wishlist' element={<WishList/>}/>
                    <Route path='/bike/:model' element={<BikeDetails/>}/>
                    <Route path='/OnRoadPrice/:model' element={<GetOnRoadPrice/>}/>
                    <Route path='/login-register' element={ <LoginRegister/> }/>
                    <Route path='/privacy' element={<PrivacyPolicy/>}  />
                    <Route path='/brand/:brand' element={<BrandBikes/>}  />
                    <Route path='/compare/:model1/:model2' element={<BikeComparison/>}/>
                    <Route path='/ourchoices' element={<TopSellingBikes/>}/>
                </Route>
                  
            </Routes>
        </BrowserRouter>
    
    );
}

export default AppRouter;
