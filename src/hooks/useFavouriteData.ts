import {useContext} from "react";
import FavouriteContext from "../content/favouriteContext.tsx";


const useFavouriteData = ()=>useContext(FavouriteContext.FavouriteContextData)

export default useFavouriteData;
