import styles from "./menu.module.css";
import {SearchComponent} from "../../shared/ui/search";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import React, {useEffect, useState} from "react";
import api from "../../api";
import VirtualizedList from "../../shared/ui/virtual-list/list.tsx";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import {clsxConcat} from "../../shared/utils";
import {useFavouriteApi, useFavouriteData} from "../../hooks";



const Menu = ()=>{
    const favCoins = useFavouriteData().coins;
    const {toggle} = useFavouriteApi()
    const [query, setQuery] = useState("");
    const [tab, setTab] = useState<"fav" | "all">("fav");

    const [coins, setCoins] = useState<string[]>([]);
    useEffect(()=>{
        (async ()=>{
            const coins = await api.coins.getCoins();
            setCoins(coins);
        })()
    },[]);


    const handleFilterCoins = (coins:string[])=>{
        return coins.filter(coin => coin.toLowerCase().includes(query.toLowerCase()))
    }

    const handleRenderCoins = (coins:string[])=>{
        const filteredCoins = handleFilterCoins(coins)
        return (
            <VirtualizedList
                className={styles["list"]}
                numItems={filteredCoins.length}
                itemHeight={38}
                renderItem={(index, style)=>(
                    <li onClick={()=>toggle(filteredCoins[index])} style={style} className={styles["listItem"]} key = {filteredCoins[index]}>
                        <button className={styles["iconButton"]}>
                            {favCoins.some(c => c === filteredCoins[index]) ? <MdOutlineFavorite/> : <MdFavoriteBorder/>}
                        </button>
                        {filteredCoins[index]}
                    </li>
                )}
                windowHeight={265}/>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles["searchContainer"]}>
                <SearchComponent
                    value = {query}
                    onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                    placeholder = "Search..."
                    startIcon={<button className={styles["iconButton"]}>
                        <IoIosSearch className={styles["icon"]}/>
                    </button>}
                    endIcon={
                        <button onClick={()=>setQuery("")} className={styles["iconButton"]}>
                            <IoIosClose className={styles["icon"]}/>
                        </button>
                    }/>
            </div>
            <div className={styles["tab"]}>
                <div onClick={()=>setTab("fav")} className={clsxConcat(styles["tabItem"], tab === "fav" && styles["activeTab"])}><MdOutlineFavorite/> Favourites</div>
                <div onClick={()=>setTab("all")} className={clsxConcat(styles["tabItem"], tab === "all" && styles["activeTab"])}>All coins</div>
            </div>
            {handleRenderCoins(tab === "all" ? coins : favCoins)}
        </div>
    )
}


export default Menu;
