import React from "react";

const FavouriteContextData = React.createContext<{coins:string[]}>({
    coins:[]
})


const FavouriteContextApi = React.createContext<{toggle:(coin:string)=>void}>({
    toggle:()=>{},
})


export default {FavouriteContextApi, FavouriteContextData}
