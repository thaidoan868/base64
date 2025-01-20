import { FC } from "react";
import styles from "./Main.module.css"

import { Header } from "../Header/Header";

interface MainProps {

}

export const Main: FC<MainProps> = (props:MainProps) => {

    return <div className={styles.main}>
        <Header/>
    </div>
}