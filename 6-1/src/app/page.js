"use client";

import React, { useState } from "react";

export default function MemberRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //まずバリデーション
    if (name.trim() === "") {
      setError("名前を入力してください。");
      return;
    } else if (email.trim() === "") {
      setError("Emailを入力してください。");
      return;
    } else if (address.trim() === "") {
      setError("住所を入力してください。");
      return;
    } else if (tel.trim() === "") {
      setError("電話番号を入力してください。");
      return;
    }

    //問題なければ送信処理
    setError("");
    setSending(true);
    setSubmitted(false);

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setCurrentStep(3);
    }, 2000);
  };

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <div>
      <h1>会員登録フォーム</h1>
      {currentStep === 1 && (
        <>
          <form>
            <label>
              <input
                type="text"
                placeholder="名前"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="住所"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </label>
            <label>
              <input
                type="tel"
                placeholder="電話番号"
                value={tel}
                onChange={(event) => setTel(event.target.value)}
              />
            </label>
          </form>
          <button onClick={nextStep}>次へ</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}

      {currentStep === 2 && (
        <div>
          <h2>入力内容の確認</h2>
          <p>名前: {name}</p>
          <p>メールアドレス: {email}</p>
          <p>住所: {address}</p>
          <p>電話番号: {tel}</p>
          <button onClick={prevStep}>戻る</button>
          <button onClick={handleSubmit} disabled={sending}>
            {sending ? "送信中..." : "送信"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      {currentStep === 3 && submitted && (
        <div>
          <h2>送信完了！</h2>
          <p>登録しました。</p>
        </div>
      )}
    </div>
  );
}
