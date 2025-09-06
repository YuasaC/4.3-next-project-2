"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { articles } from "../../../lib/articles";

export default function posts() {

    const params = useParams();
    const articleId = parseInt(params.id, 10);
    const article = articles.find((a) => a.id === articleId);

    if (!article) {
        return <div>記事が見つかりませんでした。</div>;
    }

    return (
        <div>
            {article && (
                <div>
                    <h1>{article.title}</h1>
                    <h2>{article.summary}</h2>
                </div>
            )}
        </div>
    );
}