import { FC } from "react";
import styles from "./Footer.module.css"
import { FaCopyright, FaLock, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SiGmail } from "react-icons/si";

interface FooterProps {

}

export const Footer: FC<FooterProps> = (props:FooterProps) => {
    const[t] = useTranslation("global");

    return <div className={styles.footer}>
        <p>
            <FaCopyright className={styles.icon}/>
            {t("footer.copyright")}
        </p>
        <div>
            <a href="">
                <FaLock className={styles.icon}/>
                {t("footer.policy")}
            </a>
            <a href="">
                <FaUser className={styles.icon}/>
                {t("footer.aboutUs")}
            </a>
            <a href="">
                <SiGmail className={styles.icon}/>
                {t("footer.contact")}
            </a>
        </div>
        <p>{t("footer.useCookies")}</p>
    </div>
}