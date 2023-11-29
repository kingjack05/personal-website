import type { APIRoute } from "astro"

const BOT_TOKEN =
    import.meta.env.TELEGRAM_BOT_TOKEN ?? process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = import.meta.env.CHAT_ID ?? process.env.CHAT_ID
const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?`

export const ALL: APIRoute = async ({ params, request }) => {
    const body = await request.json()
    try {
        let result = await fetch(
            url +
                new URLSearchParams({
                    chat_id: CHAT_ID,
                    text: `Client Contact! \nName: ${body.name}\nMail: ${body.mail}\n詢問項目: ${body.item}\n訊息: ${body.info}`,
                }),
        )
        return new Response(
            JSON.stringify({
                message: "Success",
            }),
            {
                status: 200,
            },
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({
                message: "Error",
            }),
            {
                status: 500,
            },
        )
    }
}
