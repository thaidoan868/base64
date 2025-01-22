import { FC } from "react";
import styles from "./EncodeOptions.module.css"
import { useTranslation } from "react-i18next";

interface EncodeOptionsProps {

}

export const EncodeOptions: FC<EncodeOptionsProps> = (props:EncodeOptionsProps) => {
    const[t] = useTranslation("global");
    const random:number = Math.random();

    return <div className={styles.encodeOptions}>
        <div>
            <select name="destinationCharacterSet" id={"destinationCharacterSet"+random}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <label htmlFor={"destinationCharacterSet"+random}>{t("base64Encode.options.destinationCharacterSet")}</label>
        </div>
        <div>
            <select name="destinationNewline" id={"destinationNewline"+random}>
                <option value="volvo">LF (Unix)</option>
                <option value="audi">CRLF (Windows)</option>
            </select>
            <label htmlFor={"destinationNewline"+random}>{t("base64Encode.options.destinationNewline")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id={"encodeSeparately"+random} />
            <label htmlFor={"encodeSeparately"+random}>{t("base64Encode.options.encodeSeparately")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id={"splitLines"+random} />
            <label htmlFor={"splitLines"+random}>{t("base64Encode.options.splitLines")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id={"urlSafe"+random} />
            <label htmlFor={"urlSafe"+random}>{t("base64Encode.options.urlSafe")}</label>
        </div>
    </div>
}