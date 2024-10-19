export const locateBike = (collection, targetModel) => {
    return collection.find(item => item.model === targetModel);
}
export const locateCity = (collection, targetModel) => {
    return collection.find(item => item.city === targetModel);
}
export const wishlistBike = (collection, targetModel) => {
    return collection.find(item => item.model === targetModel);
}

export const cityName=(cityObject)=>{
    const citys=cityObject.map(city=>city.city)
    return citys.filter((city,index,array)=>array.indexOf(city)===index)
}
export const brandList=(bikeObject)=>{
    const brands=bikeObject.map(bike=>bike.brand)
    return brands.filter((brand,index,array)=>array.indexOf(brand)===index)
}

export const convertCurrencyToInt=(currencyString)=> {
    return parseInt(currencyString.replace(/[₹,]/g, ""));
}

export const bikeByBrand=(brand,bikeObject)=>{
    return bikeObject.filter(bike=>bike.brand===brand)
}