"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function memberRegister() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [currentStep, setCurrentStep] = useState(1); //複数ステップ実装
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setSubmitted(false);
    setTimeout(() => {
      setSending(false); // 送信完了後に false
      setSubmitted(true); // 完了フラグ true
      setCurrentStep(3); // 完了画面へ
    }, 2000);
  }

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  return (
    <div>
      <h1>会員登録フォーム</h1>
      {currentStep === 1 && (
        <>
          <form>
            <label>
              <input type="text" placeholder="名前" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
              <input type="email" placeholder="メールアドレス" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
              <input type="text" placeholder="住所" value={address} onChange={(event) => setAddress(event.target.value)} />
            </label>
            <label>
              <input type="tel" placeholder="電話番号" value={tel} onChange={(event) => setTel(event.target.value)} />
            </label>
          </form>
          <button onClick={nextStep}>次へ</button>
        </>
      )}
      {currentStep === 2 && (
        <div>
          <h2>入力内容の確認</h2>
          <p>名前:{name}</p>
          <p>メールアドレス{email}</p>
          <p>住所{address}</p>
          <p>電話番号{tel}</p>
          <button onClick={prevStep}>戻る</button>
          <button onClick={handleSubmit}>
            送信
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
};