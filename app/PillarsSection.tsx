"use client"
import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import travelIcon from "@/public/assets/images/travel-icon.png"
import worldIcon from "@/public/assets/images/world-icon.png"
import heartIcon from "@/public/assets/images/heart-icon.png"
import growthIcon from "@/public/assets/images/growth-icon.png"
import Image, { StaticImageData } from "next/image";
import { IoArrowForward } from "react-icons/io5";

const PillarsSection: React.FC = () => {
    const pillars: PillarCardProps[] = [
        {
            title: "Grow Your Business",
            content: "International trade, sourcing, business missions, and market-entry support.",
            icon: growthIcon,
            to: "growbusiness"
        },
        {
            title: "Explore Overseas Opportunities",
            content: "International recruitment, employment, and educational opportunities.",
            icon: worldIcon,
            to: "overseasopportunities"
        },
        {
            title: "Travel Globally",
            content: "Corporate and leisure travel, visas, accommodation, and travel logistics",
            icon: travelIcon,
            to: "travel"
        },
        {
            title: "Access International Healthcare",
            content: "Medical tourism and treatment coordination",
            icon: heartIcon,
            to: "medical"
        }
    ]

    return (
        <Section className="py-15 md:py-18 gap-22.5 md:gap-27.5 text-primary">
            <AncizarH4 className="text-center font-semibold">
                Four Pillars. One Partner.
            </AncizarH4>

            <div className="flex flex-col md:flex-row gap-22 md:gap-11 pl-9.5 md:pl-0">
                {pillars.map(p => <PillarCard
                    content={p.content}
                    icon={p.icon}
                    title={p.title}
                    to={p.to}
                    key={p.title}
                />)}
            </div>
        </Section>
    )
}

interface PillarCardProps {
    title: string
    content: string
    icon: StaticImageData
    to: string
}

const PillarCard: React.FC<PillarCardProps> = ({ title, content, icon, to }) => {
    const scrollTo = (to: string) => {
        document.getElementById("closerlook")?.scrollIntoView({ behavior: "smooth" })
        document.getElementById(to)?.click()
    }

    return (
        <div className="relative card gap-7 md:gap-9 bg-primary-content text-primary basis-1/4 pl-10 pt-6 pb-3 pr-0">
            <div className="card-body gap-5 p-0 pr-2">
                <AncizarH6 className="card-title">{title}</AncizarH6>
                <p className="text-sm md:text-base">
                    {content}
                </p>
            </div>

            <div className="card-actions px-3 justify-end">
                <a onClick={e => {
                    e.preventDefault()
                    scrollTo(to)
                }} className="btn btn-ghost text-[#6B6B6B] hover:btn-primary hover:text-primary-content hover:scale-110 transition-all ease-in-out duration-300 rounded-full font-normal">
                    Explore
                    <IoArrowForward className="size-3 ml-4" />
                </a>
            </div>

            <figure className="absolute size-16 -top-8 -left-8">
                <Image
                    src={icon}
                    alt="icon"
                    fill
                />
            </figure>
        </div>
    )
}

export default PillarsSection;