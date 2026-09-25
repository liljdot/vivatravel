import Section from "@/components/layout/Section"
import { AncizarH4 } from "@/components/Typography";
import background from "@/public/assets/images/star-bg.png"
import backgroundMobile from "@/public/assets/images/star-bg-mobile.png"
import talkImage from "@/public/assets/images/lets-talk-image.png"
import talkImageMobile from "@/public/assets/images/lets-talk-image-mobile.png"
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { whatsappLink } from "./data";

const LetsTalkSection: React.FC = () => {

    return (
        <Section className="relative bg-primary py-19 px-0 md:py-16 mx-4.5 md:mx-0">
            <Image
                src={background}
                alt="background"
                fill
                className="hidden md:flex"
            />
            <Image
                src={backgroundMobile}
                alt="background"
                fill
                className="md:hidden flex"
                objectFit="cover"
            />
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 z-2">
                <div className="flex flex-col gap-10 md:gap-17 text-primary-content md:basis-[calc((100%-1.25rem)*3/5)] items-center md:items-start justify-center px-4 md:px-0">
                    <div className="flex flex-col gap-5 md:gap-6 text-center md:text-left">
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

                <figure className="md:basis-[calc((100%-1.25rem)*2/5)]">
                    <Image
                        src={talkImage}
                        alt="people communicating on phone"
                        objectFit="contain"
                        className="hidden md:flex"
                    />
                    <Image
                        src={talkImageMobile}
                        alt="people communicating on phone"
                        objectFit="contain"
                        className="md:hidden"
                    />
                </figure>
            </div>
        </Section>
    )
}

export default LetsTalkSection;