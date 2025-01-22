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
                <optgroup label="Populars">
                    <option value="utf8">UTF-8</option>
                    <option value="ascii">ASCII</option>
                    <option value="binary">Binary</option>
                    <option value="hex">Hex</option>
                    <option value="utf16le">UTF-16LE</option>
                </optgroup>
                <optgroup label="Unicode">
                    <option value="UTF7">UTF7</option>
                    <option value="UTF-16">UTF-16</option>
                    <option value="UTF-32">UTF-32</option>
                </optgroup>
                <optgroup label="Japanese">
                    <option value="Shift_JIS">Shift_JIS</option>
                    <option value="Windows932">Windows932</option>
                    <option value="Windows-31j">Windows-31j</option>
                </optgroup>
                <optgroup label="Chinese">
                    <option value="GB2312">GB2312</option>
                    <option value="GBK">GBK</option>
                    <option value="GB18030">GB18030</option>
                </optgroup>
                <optgroup label="Korean">
                    <option value="KS_C_5601">KS_C_5601</option>
                    <option value="Windows949">Windows949</option>
                    <option value="EUC-KR">EUC-KR</option>
                </optgroup>
                <optgroup label="Taiwan/Hong Kong">
                    <option value="Big5">Big5</option>
                    <option value="Big5-HKSCS">Big5-HKSCS</option>
                    <option value="Windows950">Windows950</option>
                </optgroup>
                <optgroup label="Windows codepages">
                    <option value="874">874</option>
                    <option value="1250">1250</option>
                    <option value="1258">1258</option>
                </optgroup>
                <optgroup label="ISO codepages">
                    <option value="ISO-8859-1">ISO-8859-1</option>
                    <option value="ISO-8859-16">ISO-8859-16</option>
                </optgroup>
                <optgroup label="Mac codepages">
                    <option value="maccroatian">maccroatian</option>
                    <option value="maccyrillic">maccyrillic</option>
                    <option value="macgreek">macgreek</option>
                </optgroup>
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