import { FC } from "react";
import styles from "./Main.module.css"

import { Header } from "../Header/Header";
import { Base64Encode } from "../Base64/Base64Encode";

interface MainProps {

}

export const Main: FC<MainProps> = (props:MainProps) => {

    return <div className={styles.main}>
        <Header/>
        <Base64Encode/>
    </div>
}