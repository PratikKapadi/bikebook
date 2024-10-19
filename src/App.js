import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AppRouter from './router/AppRouter';
import { createContext, useReducer } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"


export const WishlistContext=createContext();

const WishlistReducer=(wishlist,action)=>{
  switch (action.type) {
    case "ADDTOWISHLIST":return [...wishlist,action.item]
    case "REMOVETOWISHLIST":return wishlist.filter(wishlistItem=>wishlistItem !=action.item)
    default:
      return wishlist;
  }

}
function App() {
  const [wishlist,setWishlist]=useReducer(WishlistReducer,[])
  const addToWishlist=product=>setWishlist({type:"ADDTOWISHLIST",item:product})
  const removeFromWishlist=product=>setWishlist({type:"REMOVETOWISHLIST",item:product})
  return (
    <div >
      <WishlistContext.Provider value={{wishlist,addToWishlist,removeFromWishlist}}>
       <AppRouter/>
       <ToastContainer />
       </WishlistContext.Provider>
    </div>
  );
}

export default App;
