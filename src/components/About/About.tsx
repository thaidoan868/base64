import { FC } from "react";
import styles from "./About.module.css"
import { useTranslation } from "react-i18next";
import { FaQuestionCircle } from "react-icons/fa";

interface AboutProps {

}

export const About: FC<AboutProps> = (props:AboutProps) => {
    const[t] = useTranslation("global");

    return <div className={styles.about}>
        <h2>
            <FaQuestionCircle className={styles.icon}/>
            {t("about.header")}
        </h2>
        <hr />
        <p>{t("about.intro")}</p>
        <p>{t("about.intro1")}</p>

        <h3> {t("about.options.header")} </h3>
        <ul>
            <li>{t("about.options.destinationCharacterSet")}</li>
            <li>{t("about.options.destinationNewline")}</li>
            <li>{t("about.options.encodeSeparately")}</li>
            <li>{t("about.options.splitLines")}</li>
            <li>{t("about.options.urlSafe")}</li>
            <li>{t("about.options.liveMode")}</li>
        </ul>
        <p className={styles.note}>{t("about.options.note")}</p>

        <h3>{t("about.safeAndSecure.header")}</h3>
        <p>{t("about.safeAndSecure.content")}</p>

        <h3>{t("about.completelyFree.header")}</h3>
        <p>{t("about.completelyFree.content")}</p>

        <h3>{t("about.details.header")}</h3>
        <p>{t("about.details.intro")}</p>

        <h4>{t("about.details.design.header")}</h4>
        <p>{t("about.details.design.content")}</p>

        <h4>{t("about.details.example.header")}</h4>
        <p>{t("about.details.example.content")}</p>
        <p>{t("about.details.example.content1")}</p>
        <p>{t("about.details.example.content2")}</p>
        <p>{t("about.details.example.content3")}</p>
        <p>{t("about.details.example.content4")}</p>

        <table>
            <thead>
                <tr>
                    <th>Text content</th>
                    <th colSpan={8}>M</th>
                    <th colSpan={8}>a</th>
                    <th colSpan={8}>n</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>ASCII</td>
                <td colSpan={8}>77</td>
                <td colSpan={8}>97</td>
                <td colSpan={8}>110</td>
            </tr>
            <tr>
                <td>Bit pattern</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Index</td>
                <td colSpan={6}>19</td>
                <td colSpan={6}>22</td>
                <td colSpan={6}>5</td>
                <td colSpan={6}>46</td>
            </tr>
            <tr>
                <td>Base64-encoded</td>
                <td colSpan={6}>T</td>
                <td colSpan={6}>W</td>
                <td colSpan={6}>F</td>
                <td colSpan={6}>u</td>
            </tr>
            </tbody>
        </table>
        <p>{t("about.details.example.content5")}</p>
    </div>
}