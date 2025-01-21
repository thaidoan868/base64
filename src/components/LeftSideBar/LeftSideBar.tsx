import { FC } from "react";
import styles from "./LeftSideBar.module.css"

interface LeftSideBarProps {

}

export const LeftSideBar: FC<LeftSideBarProps> = (props:LeftSideBarProps) => {
    return <div className={styles.leftSideBar}>
        <ins> Ads goes here</ins>
    </div>
}