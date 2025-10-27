"use client";

import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./page.module.css"


export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body"); //モーダルのルート要素を設定
  }, []);


  const Open = () => setModalOpen(true);

  const Close = () => setModalOpen(false);

  return (
    <div>
      <>
        <div className={styles.button}>
          <button onClick={Open} className={styles.openButton}>モーダルを開く</button>
          <button onClick={Close} className={styles.closeButton}>モーダルを閉じる</button>
          <p className={styles.phrase}>モーダルコンポーネントの作成練習</p>
        </div>
      </>
      <Modal isOpen={isModalOpen} onRequestClose={Close} className={styles.modalContent} overlayClassName={styles.overlay}
        closeTimeoutMS={800} >
        モーダルモーダルモーダルモーダルモーダル
      </Modal>
    </div>
  );
}