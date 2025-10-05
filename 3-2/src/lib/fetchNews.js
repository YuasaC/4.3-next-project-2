//共通処理
export async function fetchNews() {
    const API_KEY = '83fa19810922462ba5804c7f5bdcf831'; //APIキー
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('ニュース取得に失敗しました');
    }
    return response.json();
}