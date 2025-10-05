import { fetchNews } from "@/lib/fetchNews";

export async function GET() {
    try {
        const data = await fetchNews();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "ニュース取得に失敗しました" }), { status: 500 });
    }
}