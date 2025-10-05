"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function App() {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const getNews = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/news');// API Route 経由にする
            const data = await res.json();
            setArticles(data.articles || []);
        }
        catch (error) {
            alert('現在、最新ニュースを取得できません。');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    if (loading) return <p>ニュースを読み込み中...</p>
    return (
        <div>
            <h1>最新のニュース</h1>
            {error && <p>ニュース取得に失敗しました。</p>}
            <ul>
                {articles.length === 0 && !error && <p>記事がありません。</p>}
                {articles.map(article => (
                    <li key={article.url} style={{ marginBottom: "15px" }}>
                        {article.title}
                        {""}
                        <a href={article.url} style={{ color: "green", marginLeft: "20px" }}>詳細を読む</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}