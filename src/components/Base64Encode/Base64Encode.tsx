import { FC, useRef, useState } from "react";
import styles from "./Base64Encode.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FaToggleOff } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan, FaCopy, FaFileAlt } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";

import { useTranslation } from "react-i18next";
import { EncodeOptions } from "../EncodeOptions/EncodeOptions";
import { encode } from "@juanelas/base64";
var FileSaver = require('file-saver');
var iconv = require('iconv-lite');


interface Base64EncodeProps {

}

export const Base64Encode: FC<Base64EncodeProps> = (props:Base64EncodeProps) => {
    const [t] = useTranslation("global");
    const outputRef = useRef<HTMLTextAreaElement>(null);
    const [fileName, setFileName] = useState("");
    const [fileContent, setFileContent] = useState<string>();
    const [fileEncoded, setFileEncoded] = useState<string>();

    function fileInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            let file = e.currentTarget.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                setFileName(file.name);
                setFileContent(reader.result as string);
            };
            reader.onerror = () => {
                console.log("file error", reader.error);
            };
        }
    }

    function textEncode(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destinationCharacterSet = formData.get("destinationCharacterSet");
        const input = formData.get("input");

        const inputBuffer = iconv.encode(input, destinationCharacterSet);
        const base64str = encode(inputBuffer);
        
        if (outputRef.current) {
            outputRef.current.value = base64str
        }
    }

    function fileEncode(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destinationCharacterSet = formData.get("destinationCharacterSet");
        const input = fileContent;

        const inputBuffer = iconv.encode(input, destinationCharacterSet);
        const base64str = encode(inputBuffer);
        
        setFileEncoded(base64str);
    }

    function handleDownload()  {
        const file = new Blob([fileEncoded as string], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(file, "base64Encoded_" + fileName + '.txt');
    };

    

    return <div className={styles.base64Encode}>
        <section className={styles.textEncode}>
            <h2>{t("base64Encode.text.header")}</h2>
            <p className={styles.guide}>{t("base64Encode.text.guide")}</p>
            <hr />
            <form onSubmit={textEncode}>
                <textarea name="input" placeholder={t("base64Encode.text.input")}></textarea>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Encode.text.note")}
                </p>
                <EncodeOptions/>
                <div className={styles.liveMode}>
                        <button type="button">
                            <span>
                                <FaToggleOff className={styles.icon}/>
                                <span> {t("base64Encode.text.liveModeButton")} </span>
                            </span>
                        </button>
                        <span>{t("base64Encode.text.liveModeDescription")}</span>
                </div>
                <div className={styles.encode}>
                    <button type="submit">
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Encode.options.encodeButton")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                    <span>{t("base64Encode.text.encodeDescription")}</span>
                </div>
            </form>
            <textarea 
                placeholder={t("base64Encode.text.output")}
                ref={outputRef}
            ></textarea>
            <button className={styles.copyToClipboard}>
                <FaCopy className={styles.icon}/>
                {t("base64Encode.text.copyToClipboard")}
            </button>
        </section>

        <section className={styles.fileEncode}>
            <h2>{t("base64Encode.file.header")}</h2>
            <p className={styles.guide}>{t("base64Encode.file.guide")}</p>
            <hr />
            <form onSubmit={fileEncode}>
                <div className={styles.fileUpload}>
                    <input 
                        type="file" 
                        name="input" 
                        id="fileInput"
                        onChange={fileInputHandler}
                    />
                    <label htmlFor="fileInput">
                        <FaFileAlt className={styles.icon}/>
                        {fileName ? fileName : t("base64Encode.file.input")} 
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
            {fileEncoded 
                ? <div className={styles.success}>
                    <p>
                        <ImCheckboxChecked className={styles.icon}/>
                        {"\t"}
                        {t("base64Encode.success.header")}
                    </p>
                    <p>{t("base64Encode.success.content")}</p>
                    <button onClick={handleDownload}>{t("base64Encode.success.download")}</button>
                </div> 
                : ""
            }
        </section>
    </div>
}