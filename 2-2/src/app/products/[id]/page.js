"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/page";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css"

export default function CatalogWebPage() {
    const params = useParams();
    const productId = Number(params.id); //idを取得
    const product = products.find((p) => p.id === productId);//データからidを元手に商品を検索
    const navigate = useRouter(); //商品一覧ページへ戻る実装

    return (
        <div>
            <h1 className={styles.title}>期間限定・通信販売</h1>
            <table className={styles.tableProduct}>
                <tbody>
                    <tr>
                        <td>商品ID</td>
                        <td>商品名</td>
                        <td>値段</td>
                        <td>商品概要</td>
                    </tr>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.explain}</td>
                    </tr>
                </tbody>
            </table>
            <p className={styles.taxExplain}>税込価格で表記しています。</p>
            <div className={styles.container}>
                <button className={styles.buttonBack} onClick={() => navigate.push("/")}>商品一覧に戻る</button>
            </div>
        </div >
    )
}