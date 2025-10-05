//サーバーコンポネート
import App from "./newsApp";

export const revalidate = 600;// ISRを利用して、10分ごとに再生成
// ごとに再生成

export default async function Page() {
  return (
    <div>
      <App />{/*Appでクライアントコンポーネントを呼び出す*/}
    </div>
  );
}



