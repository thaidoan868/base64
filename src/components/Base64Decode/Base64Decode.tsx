import { FC, useRef, useState } from "react";
import styles from "./Base64Decode.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FaToggleOff } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan, FaCopy, FaFileAlt } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { MdError } from "react-icons/md";

import { useTranslation } from "react-i18next";
import { Buffer } from "buffer";
import iconv from "iconv-lite";
import { decode } from '@juanelas/base64';
var FileSaver = require('file-saver');


interface Base64DecodeProps {

}

export const Base64Decode: FC<Base64DecodeProps> = (props:Base64DecodeProps) => {
    const [t] = useTranslation("global");
    const outputRef = useRef<HTMLTextAreaElement>(null);
    const [fileName, setFileName] = useState("");
    const [fileContent, setFileContent] = useState<string>("");
    const [fileEncoded, setFileEncoded] = useState<string>();
    const [error, setError] = useState<string>();

    function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
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

    function handelTextDecode(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const sourceCharacterSet = formData.get("sourceCharacterSet");
        const input = formData.get("input");

        try {
            let decodedBuffer = decode(input as string);
            let decodedstr = iconv.decode(decodedBuffer as Buffer, sourceCharacterSet as string)
            
            if (outputRef.current) {
                outputRef.current.value = decodedstr;
            }
        } catch (error) {
            if (outputRef.current) {
                outputRef.current.value = t("base64Decode.error.header") + ": " + t("base64Decode.error.content");
            }
        }

    }

    function handleFileDecode(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (fileContent) {
            const input = (fileContent as string).slice(0, -1);

            try {
                let decodedStr = decode(input, true);
                setFileEncoded(decodedStr);
                setError("false");

            } catch (error) {
                setError("true");
            }
        }
    }

    function displayError() {
        if (error === "true") {
            return <div className={styles.error}>
                <p className={styles.error}>
                    <MdError className={styles.icon}/>
                    {"\t"}
                    {t("base64Decode.error.header")}
                </p>
                <p>{t("base64Decode.error.content")}</p>
            </div> 
        }
        else if (error === "false") {
            return <div className={styles.success}>
                <p>
                    <ImCheckboxChecked className={styles.icon}/>
                    {"\t"}
                    {t("base64Decode.success.header")}
                </p>
                <p>{t("base64Decode.success.content")}</p>
                <button onClick={handleDownload}>{t("base64Decode.success.download")}</button>
            </div> 
        }
        else {
            return ""
        }
    }

    function handleDownload()  {
        const file = new Blob([fileEncoded as string], { type: 'text/plain;charset=utf-8' });
        FileSaver.saveAs(file, "base64Decoded_" + fileName);
    };

    return <div className={styles.base64Decode}>
        <section className={styles.textDecode}>
            <h2>{t("base64Decode.text.header")}</h2>
            <p className={styles.guide}>{t("base64Decode.text.guide")}</p>
            <hr />
            <form onSubmit={handelTextDecode}>
                <textarea name="input" placeholder={t("base64Decode.text.input")}></textarea>
                <p className={styles.note}>
                    <FontAwesomeIcon 
                        className={styles.icon}
                        icon={faInfoCircle as IconProp}
                    />
                    {t("base64Decode.text.note")}
                </p>
                <div className={styles.sourceCharacterSet}>
                    <select name="sourceCharacterSet" id="sourceCharacterSet">
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
                    <label htmlFor="sourceCharacterSet">{t("base64Decode.text.sourceCharacterSet")}</label>
                </div>
                <div className={styles.decodeSeparately}>
                    <input type="checkbox" name="" id="decodeTextSeparately" />
                    <label htmlFor="decodeTextSeparately">{t("base64Decode.text.decodeSeparately")}</label>
                </div>
                <div className={styles.liveMode}>
                        <button type="button">
                            <span>
                                <FaToggleOff className={styles.icon}/>
                                <span> {t("base64Decode.text.liveModeButton")} </span>
                            </span>
                        </button>
                        <span>{t("base64Decode.text.liveModeDescription")}</span>
                </div>
                <div className={styles.decode}>
                    <button type="submit">
                        <span>
                            <FaGreaterThan />
                            <span> {t("base64Decode.text.decodeButton")} </span>
                            <FaLessThan />
                        </span>
                    </button>
                    <span>{t("base64Decode.text.decodeDescription")}</span>
                </div>
            </form>
            <textarea 
                placeholder={t("base64Decode.text.output")}
                ref={outputRef}
            ></textarea>
            <button className={styles.copyToClipboard}>
                <FaCopy className={styles.icon}/>
                {t("base64Decode.text.copyToClipboard")}
            </button>
        </section>

        <section className={styles.fileDecode}>
            <h2>{t("base64Decode.file.header")}</h2>
            <p className={styles.guide}>{t("base64Decode.file.guide")}</p>
            <hr />
            <form onSubmit={handleFileDecode}>
                <div className={styles.fileUpload}>
                    <input 
                        type="file" 
                        id="decodefileInput" 
                        onChange={handleFileInput}
                    />
                    <label htmlFor="decodefileInput">
                        <FaFileAlt className={styles.icon}/>
                        {fileName ? fileName : t("base64Decode.file.input")} 
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
            {displayError()}
        </section>
    </div>
}