import styles from "./main.module.css";
import {HeaderComponent} from "../../components/common/header";
const Main = ()=>{
    return (
        <div className = {styles["container"]}>
            <HeaderComponent/>
        </div>
    )
}

export default Main;
