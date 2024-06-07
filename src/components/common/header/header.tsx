import styles from "./header.module.css";
import {ButtonComponent, LogoIconComponent, LogoTextComponent, MenuComponent} from "../../../shared/ui";
import React, {useState} from "react";
import {MainMenuComponent} from "../../main";

const Header = ()=>{
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const handleOpenMenu = (e:React.MouseEvent<HTMLButtonElement>)=>{
        setMenuAnchor(e.currentTarget);
    }

    const handleCloseMenu = ()=>{
        setMenuAnchor(null);
    }

    return (
        <nav className = {styles["container"]}>
            <div className = {styles["logo-container"]}>
                <LogoIconComponent/>
                <LogoTextComponent/>
            </div>
            <ButtonComponent onClick = {handleOpenMenu} className = {styles["button"]}>
                Search
            </ButtonComponent>
            <MenuComponent onClose={handleCloseMenu} anchor={menuAnchor}>
                <MainMenuComponent/>
            </MenuComponent>
        </nav>
    )
}


export default Header;
