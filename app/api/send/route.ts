
import Welcome from "@/app/emails/Welcome"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { email, name, message } = await req.json()

    const { data, error } = await resend.emails.send({
        from: "hello@vivatravelservices.com",
        to: "jehuoki@gmail.com",
        subject: `Message from ${name}`,
        react: Welcome({ email, name, message })
    })

    if (error) {
        return NextResponse.json({ error })
    }

    return NextResponse.json({ data })
}
