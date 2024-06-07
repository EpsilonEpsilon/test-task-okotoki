import {useContext} from "react";
import FavouriteContext from "../content/favouriteContext.tsx";

const useFavouriteApi = ()=>useContext(FavouriteContext.FavouriteContextApi)

export default useFavouriteApi;
