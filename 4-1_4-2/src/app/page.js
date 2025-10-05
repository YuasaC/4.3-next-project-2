"use client";

import { useState } from "react";

export default function inputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);//loading設定
  const [status, setStatus] = useState(null) //送信成功orエラー判別

  const handleSubmit = async (event) => {
    event.preventDefault(); //ページの再読み込みを防ぐ
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      console.log("status code:", response.status);
      console.log("response text:", await response.text());
      if (response.ok) {
        setStatus("success")
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    }
    catch (error) {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="名前" />
        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="メールアドレス" />
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="メッセージ" />
        <button type="submit">送信</button>
      </form>
      {loading && "送信中"}
      {status === "success" && <p>送信に成功</p>}
      {status === "error" && <p>送信失敗</p>}
    </div>
  );
}