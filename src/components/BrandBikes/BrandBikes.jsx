import React from 'react'
import bikes from '../../database/bikes_data';
import {bikeByBrand} from '../../models/bikes'
import BikeCard from './BikeCard';
import { useParams } from 'react-router-dom';
const BrandBikes = () => {
    const {brand}=useParams()
    const brandByBikeObject = bikeByBrand(brand, bikes);
    console.log(brandByBikeObject);
    
  return (
    <div className='container '>
      <div className='row'>
      {brandByBikeObject.map((bike)=>(
        <div className='col-12 col-md-4 mb-4'>
        <BikeCard bike={bike}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BrandBikes
