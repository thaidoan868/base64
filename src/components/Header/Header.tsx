import { FC } from "react";
import styles from "./Header.module.css"
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/fontawesome-free-solid";
import { faLanguage } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface HeaderProps {

}

export const Header: FC<HeaderProps> = (props:HeaderProps) => {
    const[t, i18n] = useTranslation("global");

    return <div className={styles.header}>
        <div className={styles.logoOptions}>
            <div className={styles.logo}>
                <p>BASE64</p>
                <p>{t("header.logo")}</p>
            </div>
            <div className={styles.options}>
                <p>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faFolderOpen as IconProp}
                    />
                    {t("header.decodeOption")}
                </p>
                <p>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faFolder as IconProp} 
                    />
                    {t("header.encodeOption")}
                </p>
            </div>
        </div>
        <div className={styles.translations}>
            <FontAwesomeIcon icon={faLanguage as IconProp}/>
            {t("header.language: ")}
            <button>English</button>
            <button>Tiếng Việt</button>
        </div>
        <p className={styles.intro}>{t("header.intro")}</p>
        <ins>
            <p >AD goes here  </p>
        </ins>
    </div>
}