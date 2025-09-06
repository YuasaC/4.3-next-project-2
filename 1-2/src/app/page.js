"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(0); // 経過時間を管理する状態
  const [isRunning, setIsRunning] = useState(false); // タイマーの動作を管理する状態
  const [inputMinutes, setInputMinutes] = useState(0); //フォームから受け取った分
  const [inputSeconds, setInputSeconds] = useState(0); //フォームから受け取った秒

  //タイマー動作の設計
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval); //クリーンアップ処理
    }
  }, [isRunning]);

  //タイマースタート(実行)
  const start = () => setIsRunning(true);

  //タイマーストップ(一時停止)
  const stop = () => setIsRunning(false);

  //カウントダウン終了時
  const finish = () => setTime(0);


  return (
    <div>
      <input type="number" value={inputMinutes} placeholder="分" onChange={(event) => setInputMinutes(event.target.value)}>
      </input>
      <input type="number" value={inputSeconds} placeholder="秒" onChange={(event) => setInputSeconds(event.target.value)}></input>
      <button onClick={start}>スタート</button>
      <button onClick={isRunning ? stop : start}>{isRunning ? "ストップ" : "再開"}</button>
      <p onChange={finish}>Hey</p>
    </div>
  )
}