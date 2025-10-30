"use client";

import React, { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(0); // 残り秒数
  const [isRunning, setIsRunning] = useState(false); // タイマーの動作を管理する状態
  const [inputMinutes, setInputMinutes] = useState(""); //フォームから受け取った分 form欄なのでstring扱い
  const [inputSeconds, setInputSeconds] = useState(""); //フォームから受け取った秒
  const [message, setMessage] = useState(""); //カウントダウン0になった時のメッセージ表示

  //タイマー動作の設計
  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval); //クリーンアップ処理
    }
  }, [isRunning, time]);//isRunning→スタート・ストップした時にinterval更新
  // time→残り時間が0になったら停止処理

  useEffect(() => {
    if (time === 0 && isRunning) {
      setIsRunning(false);
      setMessage("カウントダウン終了✨");
    }
  }, [time])

  //残り時間の表示を 分:秒に整形する
  const formatTime = (t) => {
    const minute = Math.floor(t / 60);
    const second = t % 60;
    return `${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  }

  //タイマースタート(実行)
  const start = () => {
    const totalSeconds = Number(inputMinutes) * 60 + Number(inputSeconds); //分×60＋秒で合計秒数に変換
    if (totalSeconds > 0) {
      setTime(totalSeconds); //time更新
      setIsRunning(true); //trueにすることでカウントダウン開始
    } setInputMinutes("");
    setInputSeconds("");
  }


  //タイマーストップ(一時停止)
  const stop = () => setIsRunning(false);

  return (
    <div>
      <input type="number" value={inputMinutes} placeholder="分" onChange={(event) => setInputMinutes(event.target.value)}>
      </input>
      <input type="number" value={inputSeconds} placeholder="秒" onChange={(event) => setInputSeconds(event.target.value)}></input>
      <button onClick={start}>スタート</button>
      <button onClick={isRunning ? stop : start}>{isRunning ? "一時停止" : "再開"}</button>
      <p>{formatTime(time)}</p>
      <p>
        {message}
      </p>
    </div>
  )
}