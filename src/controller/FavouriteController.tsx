import {FC, ReactNode, useMemo, useReducer} from "react";
import FavouriteContext from "../content/favouriteContext.tsx";

interface IProps{
    children:ReactNode,
}
enum Actions {
    TOGGLE = 'toggle',
}

// An interface for our actions
interface IAction {
    type: Actions;
    coin:string,
}

interface State {
    coins:string[];
}
const reducer = (state:State, action:IAction):State=>{
    const {coin} = action
    switch (action.type){
        case "toggle":{
            const index = state.coins.findIndex(c => c === coin);
            if(index === -1) return {
                ...state,
                coins:[...state.coins, coin]
            };
            const coins = [...state.coins];
            coins.splice(index, 1);
            return {
                ...state,
                coins
            }
        }
        default:{
            return  state;
        }
    }
}
const FavouriteController:FC<IProps> = ({children})=>{
    const [state, dispatch] = useReducer(reducer, {coins:[]});

    const api = useMemo(()=>({
        toggle:(coin:string)=>dispatch({type:Actions.TOGGLE, coin})
    }),[]);
    const data = {...state};
    return (
        <FavouriteContext.FavouriteContextData.Provider value = {data}>
            <FavouriteContext.FavouriteContextApi.Provider value = {api}>
                {children}
            </FavouriteContext.FavouriteContextApi.Provider>
        </FavouriteContext.FavouriteContextData.Provider>
    )
}


export default FavouriteController;
