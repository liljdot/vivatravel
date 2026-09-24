import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import background from "@/public/assets/images/star-bg-2.png"
import Image from "next/image";

const WhyChooseSection: React.FC = () => {
    const cardContent: CardProps[] = [
        {
            title: "18+ Years of Experience",
            content: "Since 2008, we have built our reputation on professionalism, reliability and attention to detail. Our experience in international travel and client services provides a strong foundation for the broader business and mobility solutions we offer today."
        },
        {
            title: "Ahead of the Curve",
            content: "We continuously expand our knowledge, services and international networks to help our clients respond to new opportunities with greater clarity and confidence."
        },
        {
            title: "One Partner, Multiple Solutions",
            content: "We bring complementary services together to provide coordinated support to our cluents, tailored to their needs."
        },
        {
            title: "Attention To Details That Matter.",
            content: "We take care of the critical details—documentation, timelines and logistics—to ensure a smooth and well-coordinated experience."
        },
        {
            title: "Customer-First, Always",
            content: "We don't do generic. Every service is shaped around what you actually need, not a one-size-fits-all package."
        },
        {
            title: "A Track Record That Speaks",
            content: "Individuals, families, professionals, and businesses have trusted us to get them where they're going. That trust is our biggest asset."
        }
    ]

    return (
        <Section className="relative md:bg-secondary text-primary gap-5 md:gap-15 md:py-27">
            <Image
                src={background}
                alt="background"
                fill
                className="hidden md:flex"
            />

            <AncizarH4 className="text-center font-semibold z-2">
                What Sets VTS Apart.
            </AncizarH4>

            <div className="flex flex-row flex-wrap gap-6 md:gap-4 justify-between">
                {
                    cardContent.map(c => <Card
                        content={c.content}
                        title={c.title}
                        key={c.title}
                    />)
                }
            </div>
        </Section>
    )
}

interface CardProps {
    title: string
    content: string
}

const Card: React.FC<CardProps> = ({ title, content }) => {

    return (
        <div className="card bg-secondary md:bg-accent text-primary min-h-55 md:min-h-auto md:basis-[calc((100%-1rem)*0.5)] px-5 md:px-10 py-4 md:py-12 hover:shadow-2xl shadow-primary-content transition-all ease-in-out duration-300">
            <div className="card-body justify-center md:justify-start text-center md:text-left font-semibold p-0 gap-2.5">
                <AncizarH6 className="text-center md:text-left">{title}</AncizarH6>
                <p className="text-sm h-fit grow-0">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default WhyChooseSection;