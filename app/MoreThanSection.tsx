import Section from "@/components/layout/Section"
import { AncizarH4 } from "@/components/Typography";
import background from "@/public/assets/images/star-bg.png"
import cardImage from "@/public/assets/images/more-than-card-image.png"
import Image from "next/image";

const MoreThanSection: React.FC = () => {

    return (
        <Section className="py-36">
            <div className="relative card gap-23 lg:card-side lg:flex-row-reverse bg-primary px-22 py-19 rounded-4xl overflow-clip">
                <Image
                    src={background}
                    alt="background"
                    fill
                />
                <figure className="relative z-2 basis-1/3">
                    <Image
                        src={cardImage}
                        alt="successful travelers"
                        fill
                        objectFit="contain"
                    />
                </figure>
                <div className="card-body basis-2/3 gap-12 p-0 z-2 text-primary-content">
                    <div className="flex flex-col gap-2">
                        <AncizarH4 className="card-title">More Than a Travel Company</AncizarH4>
                        <p className="italic">
                            Eighteen years of opening doors. One partner for every border.
                        </p>
                    </div>
                    <p className="text-sm/6.5">
                        Since our founding in April 2008, Viva Travel Services Ltd has been built on a simple belief: that distance should never stand between people and opportunity. What began as a travel services company rooted in trust, precision, and genuine customer care has grown into something far bigger, a partner that helps individuals, families, professionals, and businesses move confidently across borders, industries, and possibilities.
                        <br />
                        <br />
                        Over the years, we&apos;ve stayed close to the pulse of global travel trends while continuously reshaping what we offer, because the needs of the people and organisations we serve have never stood still. That evolution has taken us well beyond flights and itineraries. Today, Viva Travel Services sits at the intersection of international business growth, overseas recruitment, medical tourism, and educational mobility. helping our clients not just travel the world, but grow, work, heal, and study in it.
                        <br />
                        <br />
                        What hasn&apos;t changed is the way we work: with a customer-first approach, a forward-thinking mindset, and an unwavering commitment to getting the details right. Whether we&apos;re coordinating a business mission abroad, securing a student&apos;s admission overseas, arranging world-class medical care, or simply booking a well-earned holiday, our promise stays the same, every border you need to cross, we help you cross it well.
                    </p>
                </div>
            </div>

        </Section>
    )
}

export default MoreThanSection;