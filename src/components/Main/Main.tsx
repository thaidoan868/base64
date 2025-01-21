import { FC } from "react";
import styles from "./Main.module.css"

import { Header } from "../Header/Header";
import { Base64Encode } from "../Base64Encode/Base64Encode";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";
import { RightSideBar } from "../RightSideBar/RightSideBar";

interface MainProps {

}

export const Main: FC<MainProps> = (props:MainProps) => {

    return <div className={styles.main}>
        <Header />
        <div className={styles.grid}>
            <div className={styles.body}>
                <Base64Encode />
                <About />
            </div>
            <RightSideBar />
        </div>
        <Footer />
    </div>
}