import { FC } from "react";
import styles from "./Base64Encode.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FaToggleOff } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan, FaCopy, FaFileAlt } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import { EncodeOptions } from "../EncodeOptions/EncodeOptions";


interface Base64EncodeProps {

}

export const Base64Encode: FC<Base64EncodeProps> = (props:Base64EncodeProps) => {
    const [t] = useTranslation("global");

    return <div className={styles.base64Encode}>
        <section className={styles.textEncode}>
            <h2>{t("base64Encode.text.header")}</h2>
            <p className={styles.guide}>{t("base64Encode.text.guide")}</p>
            <hr />
            <form action="">
                <textarea name="" id="" placeholder={t("base64Encode.text.input")}></textarea>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Encode.text.note")}
                </p>
                <EncodeOptions/>
                <div className={styles.liveMode}>
                        <button>
                            <span>
                                <FaToggleOff className={styles.icon}/>
                                <span> {t("base64Encode.text.liveModeButton")} </span>
                            </span>
                        </button>
                        <span>{t("base64Encode.text.liveModeDescription")}</span>
                </div>
                <div className={styles.encode}>
                    <button>
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Encode.options.encodeButton")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                    <span>{t("base64Encode.text.encodeDescription")}</span>
                </div>
            </form>
            <textarea name="" id="" placeholder={t("base64Encode.text.output")}></textarea>
            <button className={styles.copyToClipboard}>
                <FaCopy className={styles.icon}/>
                {t("base64Encode.text.copyToClipboard")}
            </button>
        </section>

        <section className={styles.fileEncode}>
            <h2>{t("base64Encode.file.header")}</h2>
            <p className={styles.guide}>{t("base64Encode.file.guide")}</p>
            <hr />
            <form action="">
                <div className={styles.fileUpload}>
                    <input type="file" name="fileEncode" id="fileInput" />
                    <label htmlFor="fileInput">
                        <FaFileAlt className={styles.icon}/>
                        {t("base64Encode.file.input")} 
                    </label>
                </div>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Encode.file.note")}
                </p>
                <EncodeOptions/>
                <div className={styles.encode}>
                    <button>
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Encode.options.encodeButton")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                </div>
            </form>
        </section>
    </div>
}