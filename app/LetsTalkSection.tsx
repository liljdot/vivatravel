import Section from "@/components/layout/Section"
import { AncizarH4 } from "@/components/Typography";
import background from "@/public/assets/images/star-bg.png"
import talkImage from "@/public/assets/images/lets-talk-image.png"
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { whatsappLink } from "./data";

const LetsTalkSection: React.FC = () => {

    return (
        <Section className="relative bg-primary py-16">
            <Image
                src={background}
                alt="background"
                fill
            />
            <div className="flex flex-row gap-20 z-2">
                <div className="flex flex-col gap-17 text-primary-content basis-[calc((100%-1.25rem)*3/5)] justify-center">
                    <div className="flex flex-col gap-6">
                        <AncizarH4 className="lg:text-4xl/15">
                            Not Sure Where to Start?
                            <br />
                            Let&apos;s Talk.
                        </AncizarH4>
                        <p className="text-sm/7">
                            Whether it&apos;s growing your business abroad, relocating for work, planning a trip, or getting the right medical care, one conversation is usually all it takes to find the right path. Book a consultation Session and we&apos;ll point you in the right direction, no obligation.
                        </p>
                    </div>

                    <Link href={whatsappLink} className="btn w-fit rounded-full bg-secondary font-normal px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105">
                        Make an Inquiry
                        <IoArrowForward className="ml-2 size-4.5 text-primary" />
                    </Link>
                </div>

                <figure className="basis-[calc((100%-1.25rem)*2/5)]">
                    <Image
                        src={talkImage}
                        alt="people communicating on phone"
                        objectFit="contain"
                    />
                </figure>
            </div>
        </Section>
    )
}

export default LetsTalkSection;