import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH5 } from "@/components/Typography";
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
                        <AncizarH4 className="card-title">About Viva Travel Services Ltd.</AncizarH4>
                        <p className="italic">
                            Connecting People, Businesses and Opportunities Across Borders.
                        </p>
                    </div>
                    <div className="text-sm/6.5">
                        Established in April 2008, Viva Travel Services Ltd (VTS) began as a trusted travel and tourism company. Today, we provide business, international mobility and opportunity-focused solutions alongside our travel services.
                        <br />
                        <br />
                        Our work covers four key areas: Business Growth and International Trade Facilitation, International Recruitment and Overseas Opportunities, Travel and Tourism, and International Mobility Services
                        <br />
                        <br />
                        <AncizarH5>Our Approach</AncizarH5>
                        <br />
                        Although our services have evolved, our guiding principles since 2008 remain unchanged: professionalism, integrity, responsiveness, attention to detail and a commitment to our clients&apos; objectives.
                        <br />
                        <br />
                        We recognise that international business, employment, education, healthcare and travel each involve important decisions, financial commitments and logistical challenges. Our role is to provide practical guidance, coordinate the relevant services and help our clients navigate these processes with greater clarity and confidence.
                        <br />
                        <br />
                        At VTS, we do more than arrange travel. We connect people and businesses with opportunities across borders and provide the professional support needed to help turn those opportunities into meaningful outcomes
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default MoreThanSection;