import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH6 } from "@/components/Typography";
import background from "@/public/assets/images/star-bg-2.png"
import Image from "next/image";

const WhyChooseSection: React.FC = () => {
    const cardContent: CardProps[] = [
        {
            title: "18 Years of Trust",
            content: " Since 2008, we've built a reputation on getting the details right. the kind of trust that only comes from doing this, well, for nearly two decades."
        },
        {
            title: "Ahead of the Curve",
            content: "Global trends move fast. We stay close to them, so our clients are never working with outdated information or old playbooks."
        },
        {
            title: "One Partner, Every Border",
            content: "Business growth, overseas opportunities, travel, healthcare, education. we're not four different companies. We're one team who understands how it all connects."
        },
        {
            title: "Precision You Can Rely On",
            content: "From visas to hospital referrals to trade missions, the small details are where we work the hardest, because that's where things usually go wrong elsewhere."
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
        <Section className="relative bg-secondary text-primary-content gap-15 py-27">
            <Image
                src={background}
                alt="background"
                fill
            />

            <AncizarH4 className="text-center font-semibold z-2">
                Why We&apos;re the Partner People Choose
            </AncizarH4>

            <div className="flex flex-row flex-wrap gap-4 justify-between">
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
        <div className="card bg-accent text-primary-content basis-[calc((100%-1rem)*0.5)] px-10 py-12 hover:shadow-2xl shadow-primary-content transition-all ease-in-out duration-300">
            <div className="card-body p-0 gap-2.5">
                <AncizarH6 className="card-title">{title}</AncizarH6>
                <p className="text-sm">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default WhyChooseSection;