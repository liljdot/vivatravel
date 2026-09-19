import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import travelIcon from "@/public/assets/images/travel-icon.png"
import worldIcon from "@/public/assets/images/world-icon.png"
import heartIcon from "@/public/assets/images/heart-icon.png"
import growthIcon from "@/public/assets/images/growth-icon.png"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const PillarsSection: React.FC = () => {
    const pillars: PillarCardProps[] = [
        {
            title: "Travel Globally",
            content: "Corporate and leisure travel, visas, accommodation, and travel logistics",
            icon: travelIcon,
            to: ""
        },
        {
            title: "Grow Your Business",
            content: "International trade, sourcing, business missions, and market-entry support.",
            icon: growthIcon,
            to: ""
        },
        {
            title: "Explore Overseas Opportunities",
            content: "International recruitment, employment, and educational opportunities.",
            icon: worldIcon,
            to: ""
        },
        {
            title: "Access International Healthcare",
            content: "Medical tourism and treatment coordination",
            icon: heartIcon,
            to: ""
        }
    ]

    return (
        <Section className="py-18 gap-27.5 text-primary">
            <AncizarH4 className="text-center font-semibold">
                Four Pillars. One Partner.
            </AncizarH4>

            <div className="flex flex-row gap-11">
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

const PillarCard: React.FC<PillarCardProps> = ({ title, content, icon }) => {

    return (
        <div className="relative card gap-9 bg-primary-content text-primary basis-1/4 pl-10 pt-6 pb-3 pr-0">
            <div className="card-body gap-5 p-0 pr-2">
                <AncizarH6 className="card-title">{title}</AncizarH6>
                <p>
                    {content}
                </p>
            </div>

            <div className="card-actions px-3 justify-end">
                <Link href={""} className="btn btn-ghost text-[#6B6B6B] hover:btn-primary hover:text-primary-content hover:scale-110 transition-all ease-in-out duration-300 rounded-full font-normal">
                    Explore
                    <IoArrowForward className="size-3 ml-4" />
                </Link>
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