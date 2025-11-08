"use client";

import React, { useState } from "react";

export default function MemberRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [errorName, setErrorName] = useState(""); //error処理
  const [errorEmail, setErrorEmail] = useState(""); //error処理
  const [errorAddress, setErrorAddress] = useState(""); //error処理
  const [errorTel, setErrorTel] = useState(""); //error処理
  const [currentStep, setCurrentStep] = useState(1);
  const [sending, setSending] = useState(false);//送信ボタン実装
  const [submitted, setSubmitted] = useState(false);//送信処理実装

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorName("");
    setErrorEmail("");
    setErrorAddress("");
    setErrorTel("");

    let hasError = false; //途中でtrueに変わるためconst宣言✖

    if (name.trim() === "") {
      setErrorName("名前を入力してください。");
      hasError = true;
    }
    if (email.trim() === "") {
      setErrorEmail("Emailを入力してください。");
      hasError = true;
    }
    if (address.trim() === "") {
      setErrorAddress("住所を入力してください");
      hasError = true;
    } if (tel.trim() === "") {
      setErrorTel("電話番号を入力してください。")
      hasError = true;
    }

    if (hasError) return; //エラーがあれば処理を中断する。

    //問題なければ送信処理
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
          {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
          {errorAddress && <p style={{ color: "red" }}>{errorAddress}</p>}
          {errorTel && <p style={{ color: "red" }}>{errorTel}</p>}
          <button onClick={handleSubmit} disabled={sending}>
            {sending ? "送信中..." : "送信"}
          </button>
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
