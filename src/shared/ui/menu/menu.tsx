import styles from "./menu.module.css";
import {FC, ReactNode, useState} from "react";
import {useWindowSize} from "../../../hooks";


interface IProps{
    anchor:HTMLElement | null | undefined;
    children?:ReactNode;
    onClose:()=>void,
}
const Menu:FC<IProps> = ({anchor, onClose, children})=>{
    useWindowSize();

    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    if(!anchor) return null;
    const calculateOffset = ()=>{
       const clientOffset = anchor.getBoundingClientRect();
       return {top:clientOffset.top + anchor.offsetHeight, left:clientOffset.left - (ref?.offsetWidth || 0) / 2 + (anchor.offsetWidth / 2)}
    }
    return (
        <div className={styles.wrapper}>
            <div onClick={onClose} className={styles.wrapper}/>
            <div ref = {setRef} style={calculateOffset()} className={styles.menu}>
                {children}
            </div>
        </div>
    )
}


export default Menu;
