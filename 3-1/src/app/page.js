"use client";

import { useState, useEffect } from "react";

const API_KEY = '77004d43d58b2c30e3e772b6e8ecd927';

export default function App() {
  const [city, setCity] = useState(""); //入力値の値
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(""); //エラーメッセージ
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchCity(city) //ボタンを押したらcityの値で検索開始。cityの値が変わるとsearchCityも更新される。
  }

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return; //初期は何もしない
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`
        );
        const data = await response.json();
        setWeather(data);
      }
      catch (error) {
        alert('現在天気予報が取得できません。');
        setError("天気予報が取得できません。");
        setWeather(null);
      }
    };
    fetchWeather();
  }, [searchCity]); //cityの値が変わるとsearchCityも更新される。その度に実行（都市名を検索すると実行）

  return (
    <div>
      <h1>天気予報アプリ</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="都市名を入力してください" />
        <button type="submit">検索</button>
      </form>
      {error && <p>{error}</p>}
      {weather && weather.main && (
        <div>
          <h2>{weather.name}の天気</h2>
          <p>国名:{weather.sys.country}</p>
          <p>気温:{weather.main.temp}度</p>
          <p>天気:{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  )
}

