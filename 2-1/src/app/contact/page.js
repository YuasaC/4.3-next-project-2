"use client"

import { useState } from "react";


export default function Contact() {
    const [contact, setContact] = useState(""); //問い合わせフォーム
    const [submit, setSubmit] = useState(false); //送信ボタン

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
        alert(`OK!`)
        setContact("")
    }

    return (
        <div>
            <h1>Contactページ</h1>
            <p>お問い合わせはこちらから☛</p>
            <form>
                <input type="text" placeholder="問い合わせ内容" value={contact} onChange={(event) => setContact(event.target.value)}></input>
                <button type="submit" onClick={handleSubmit}>送信</button>
            </form>
        </div>
    );
}