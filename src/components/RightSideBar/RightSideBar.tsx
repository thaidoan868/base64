import { FC } from "react";
import styles from "./RightSideBar.module.css"
import { useTranslation } from "react-i18next";
import { FaRandom, FaShieldAlt, FaStar } from "react-icons/fa";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";
import { FaArrowRightArrowLeft, FaCss3Alt, FaFile, FaFileCode } from "react-icons/fa6";
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeJson } from "react-icons/bs";
import { BsFiletypeCss } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

interface RightSideBarProps {

}

export const RightSideBar: FC<RightSideBarProps> = (props:RightSideBarProps) => {
    const[t] = useTranslation("global");

    return <div className={styles.rightSideBar}>
        <p>
            <FaStar className={styles.icon}/>
            {t("rightSideBar.tip")}
        </p>
        <ins>
            Ads goes here
        </ins>

        <h2>
            <IoIosSettings className={styles.icon}/>
            {t("rightSideBar.tools.header")}
        </h2>
        <hr />
        <a href="">
            {t("rightSideBar.tools.urlDecode")}
            <IoMdMailOpen />
        </a>
        <a href="">
            {t("rightSideBar.tools.urlEncode")}
            <IoMdMail />
        </a>
        <a href="">
            {t("rightSideBar.tools.jsonMinify")}
            <FaFile />
        </a>
        <a href="">
            {t("rightSideBar.tools.jsonBeautify")}
            <FaFileCode />
        </a>
        <a href="">
            {t("rightSideBar.tools.jsMinify")}
            <LuFileJson2 />
        </a>
        <a href="">
            {t("rightSideBar.tools.jsBeautify")}
            <BsFiletypeJson />
        </a>
        <a href="">
            {t("rightSideBar.tools.cssMinify")}
            <FaCss3Alt />
        </a>
        <a href="">
            {t("rightSideBar.tools.cssBeautify")}
            <BsFiletypeCss />
        </a>

        <h2>
            <FaRandom className={styles.icon}/>
            {t("rightSideBar.partners.header")}
        </h2>
        <hr />
        <a href="">
            {t("rightSideBar.partners.numberSystemConverter")}
            <FaArrowRightArrowLeft />
        </a>
        <a href="">
            {t("rightSideBar.partners.groupChat")}
            <FaShieldAlt />
        </a>
        
        <ins>
            Ads goes here
        </ins>
    </div>
}