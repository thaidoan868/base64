import { FC, useState } from "react";
import styles from "./Header.module.css"
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/fontawesome-free-solid";
import { faLanguage } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


interface HeaderProps {
     setMode: Function;
     mode:string;
}

export const Header: FC<HeaderProps> = (props:HeaderProps) => {
    const[t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("en");

    const handleChangeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    }

    return <div className={styles.header}>
        <div className={styles.logoOptions}>
            <div className={styles.logo}>
                <p>BASE64</p>
                <p>{t("header.logo")}</p>
            </div>
            <div className={styles.options}>
                <button 
                    onClick={() => props.setMode("encode")}
                    className={props.mode==="encode" ? styles.selected : ""}
                >
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faFolderOpen as IconProp}
                    />
                    {t("header.decodeOption")}
                </button>
                <button 
                    onClick={() => props.setMode("decode")}
                    className={props.mode==="decode" ? styles.selected : ""}
                >
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faFolder as IconProp} 
                    />
                    {t("header.encodeOption")}
                </button>
            </div>
        </div>
        <div className={styles.translations}>
            <FontAwesomeIcon icon={faLanguage as IconProp}/>
            {t("header.language: ")}
            <button 
                onClick={() => handleChangeLanguage("en")}
                className={language==="en" ? styles.selected : ""}
            >
                English
            </button>
            <button 
                onClick={() => handleChangeLanguage("vn")}
                className={language==="vn" ? styles.selected : ""}
            >
                Tiếng Việt
            </button>
        </div>
        <p className={styles.intro}>{t("header.intro")}</p>
        <ins>
            <p >Ads goes here  </p>
        </ins>
    </div>
}