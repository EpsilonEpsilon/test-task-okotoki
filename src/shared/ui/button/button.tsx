import React, {FC} from "react";
import {clsxConcat} from "../../utils";
import styles from "./button.module.css";
interface IProps extends React.HTMLAttributes<HTMLButtonElement>{}

const Button:FC<IProps> = (props)=>{
    const {className, ...rest} = props
    return(
        <button className={clsxConcat(styles["button"], className)} {...rest}/>
    )
}

export default Button;
