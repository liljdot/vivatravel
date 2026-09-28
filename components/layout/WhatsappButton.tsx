"use client"

import { whatsappLink } from "@/app/data"
import Image from "next/image"
import Link from "next/link"
import icon from "@/public/assets/images/whatsapp-image.png"

const WhatsappButton: React.FC = () => {

    return (
        <Link href={whatsappLink} className="flex fixed bottom-1/10 right-5 md:right-20 size-fit md:size-24 btn btn-ghost bg-primary-content justify-center items-center rounded-full shadow-sm hover:border-0 p-0 md:p-1 z-2">
            <Image
                src={icon}
                alt="whatsapp icon"
                className="size-15"
            />
        </Link>
    )
}

export default WhatsappButton