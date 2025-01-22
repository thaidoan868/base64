import { FC } from "react";
import styles from "./Base64Decode.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FaToggleOff } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan, FaCopy, FaFileAlt } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import { EncodeOptions } from "../EncodeOptions/EncodeOptions";


interface Base64DecodeProps {

}

export const Base64Decode: FC<Base64DecodeProps> = (props:Base64DecodeProps) => {
    const [t] = useTranslation("global");

    return <div className={styles.base64Decode}>
        <section className={styles.textDecode}>
            <h2>{t("base64Decode.text.header")}</h2>
            <p className={styles.guide}>{t("base64Decode.text.guide")}</p>
            <hr />
            <form action="">
                <textarea name="" id="" placeholder={t("base64Decode.text.input")}></textarea>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Decode.text.note")}
                </p>
                <div className={styles.sourceCharacterSet}>
                    <select name="sourceCharacterSet" id="sourceCharacterSet">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <label htmlFor="sourceCharacterSet">{t("base64Decode.text.sourceCharacterSet")}</label>
                </div>
                <div className={styles.decodeSeparately}>
                    <input type="checkbox" name="" id="decodeTextSeparately" />
                    <label htmlFor="decodeTextSeparately">{t("base64Decode.text.decodeSeparately")}</label>
                </div>
                <div className={styles.liveMode}>
                        <button>
                            <span>
                                <FaToggleOff className={styles.icon}/>
                                <span> {t("base64Decode.text.liveModeButton")} </span>
                            </span>
                        </button>
                        <span>{t("base64Decode.text.liveModeDescription")}</span>
                </div>
                <div className={styles.decode}>
                    <button>
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Decode.text.decodeButton")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                    <span>{t("base64Decode.text.decodeDescription")}</span>
                </div>
            </form>
            <textarea name="" id="" placeholder={t("base64Decode.text.output")}></textarea>
            <button className={styles.copyToClipboard}>
                <FaCopy className={styles.icon}/>
                {t("base64Decode.text.copyToClipboard")}
            </button>
        </section>

        <section className={styles.fileDecode}>
            <h2>{t("base64Decode.file.header")}</h2>
            <p className={styles.guide}>{t("base64Decode.file.guide")}</p>
            <hr />
            <form action="">
                <div className={styles.fileUpload}>
                    <input type="file" name="fileEncode" id="fileInput" />
                    <label htmlFor="fileInput">
                        <FaFileAlt className={styles.icon}/>
                        {t("base64Decode.file.input")} 
                    </label>
                </div>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Decode.file.note")}
                </p>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Decode.file.note1")}
                </p>
                <div className={styles.decodeSeparately}>
                    <input type="checkbox" name="" id="decodeFileSeparately" />
                    <label htmlFor="decodeFileSeparately">{t("base64Decode.text.decodeSeparately")}</label>
                </div>
                <div className={styles.decode}>
                    <button>
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Decode.file.decode")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                </div>
            </form>
        </section>
    </div>
}