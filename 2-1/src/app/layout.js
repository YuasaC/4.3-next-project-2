import Link from "next/link";
import { articles } from "..//lib/articles";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <div>
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            {articles.map((a) => (
              <li key={a.id}>
                <Link href={`/posts/${a.id}`}>{a.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/about">aboutページ</Link>
            </li>
            <li>
              <Link href="/contact">contactページ</Link>
            </li>
          </ul>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}