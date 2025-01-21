import { FC } from "react";
import styles from "./EncodeOptions.module.css"
import { useTranslation } from "react-i18next";

interface EncodeOptionsProps {

}

export const EncodeOptions: FC<EncodeOptionsProps> = (props:EncodeOptionsProps) => {
    const[t] = useTranslation("global");

    return <div className={styles.encodeOptions}>
        <div>
            <select name="destinationCharacterSet" id="destinationCharacterSet">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <label htmlFor="destinationCharacterSet">{t("base64Encode.options.destinationCharacterSet")}</label>
        </div>
        <div>
            <select name="destinationNewline" id="destinationNewline">
                <option value="volvo">LF (Unix)</option>
                <option value="audi">CRLF (Windows)</option>
            </select>
            <label htmlFor="destinationNewline">{t("base64Encode.options.destinationNewline")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id="encodeSeparately" />
            <label htmlFor="encodeSeparately">{t("base64Encode.options.encodeSeparately")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id="splitLines" />
            <label htmlFor="splitLines">{t("base64Encode.options.splitLines")}</label>
        </div>
        <div>
            <input type="checkbox" name="" id="urlSafe" />
            <label htmlFor="urlSafe">{t("base64Encode.options.urlSafe")}</label>
        </div>
    </div>
}