import { FC, useState } from "react";
import styles from "./Main.module.css"

import { Header } from "../Header/Header";
import { Base64Encode } from "../Base64Encode/Base64Encode";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";
import { RightSideBar } from "../RightSideBar/RightSideBar";
import { Base64Decode } from "../Base64Decode/Base64Decode";

interface MainProps {

}

export const Main: FC<MainProps> = (props:MainProps) => {
    const [mode, setMode] = useState("encode");

    return <div className={styles.main}>
        <Header />
        <div className={styles.grid}>
            <div className={styles.body}> 
                {
                    mode === "encode"
                        ? <Base64Encode />
                        : <Base64Decode/>
                }
                <About />
            </div>
            <RightSideBar />
        </div>
        <Footer />
    </div>
}