"use client";

import React from "react";
import { useState, useEffect } from "react";


export default function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false); //登録ボタンの実装
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateName = (value) => {
    const pattern = /^[A-Za-z0-9]{4,}$/;
    setIsNameValid(pattern.test(value));
  }

  const validateEmail = (value) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    setIsEmailValid(pattern.test(value));
  }

  const validatePassword = (value) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setIsPasswordValid(pattern.test(value));
  }

  useEffect(() => {
    validateName(name);
    validateEmail(email);
    validatePassword(password);
  }, [name, email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted ✅");
    setSubmit(true);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="ユーザー名"
            value={name}
            onChange={(event) => setName(event.target.value)} />
          {!isNameValid && <p>ユーザー名は英文字のみ、4文字以上です。</p>}
        </label>
        <label>
          <input
            type="text"
            placeholder="メールアドレス"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          {!isEmailValid && <p>正しい形式のメールアドレスを入力してください。</p>}
        </label>
        <label>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          {!isPasswordValid && <p>パスワードは8文字以上です。</p>}
        </label>
        <button type="submit" disabled={!name || !email || !password}>
          登録
        </button>
      </form>
      {submit && <p>登録完了</p>}
    </div>
  );
}