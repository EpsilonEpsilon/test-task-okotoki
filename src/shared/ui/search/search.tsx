import React, {FC, ReactNode} from "react";
import styles from "./search.module.css";
import {clsxConcat} from "../../utils";
interface IProps extends React.HTMLProps<HTMLInputElement>{
    startIcon?:ReactNode
    endIcon?:ReactNode
}

const Search:FC<IProps> = (props)=>{
    const {startIcon, endIcon, className, ...rest} = props
    return (
        <div className={styles["container"]}>
            {props.startIcon}
            <input className={clsxConcat(className, styles["input"])} {...rest}/>
            {props.endIcon}
        </div>
    )
}


export default Search;
