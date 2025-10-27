import React from "react";
import styles from "./page.module.css";

function Card({ image, title, explain, url }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} style={{ width: "100px" }} />
      <p>{explain}</p>
      <a href={url} style={{ color: "red" }}>Click Here</a>
    </div>
  );
}


export default function CardList() {

  const cardData = [
    {
      id: 1,
      image: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/5bb0cfd44302cd4df0c0c88d37457931.png",
      title: "ピカチュウ",
      explain: "ねずみポケモン",
      url: "https://zukan.pokemon.co.jp/detail/0025",
    },
    {
      id: 2,
      image: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/3de378e4aa35e881ae7598529acdd17a.png",
      title: "ロゼリア",
      explain: "いばらポケモン",
      url: "https://zukan.pokemon.co.jp/detail/0315",
    },
    {
      id: 3,
      image: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/33b0d2c0d0048ff76f152860c2ab6e26.png",
      title: "ジラーチ",
      explain: "ねがいごとポケモン",
      url: "https://zukan.pokemon.co.jp/detail/0385",
    },
    {
      id: 4,
      image: "https://zukan.pokemon.co.jp/zukan-api/up/images/index/c9ab23aadc469d0c3b857d0217e804b3.png",
      title: "ネイティ",
      explain: "ことりポケモン",
      url: "https://zukan.pokemon.co.jp/detail/0177",
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {cardData.map((data) => (
          <Card key={data.id}
            title={data.title}
            image={data.image}
            explain={data.explain}
            url={data.url} />
        ))}
      </div>
    </div>
  )
}