import Section from "@/components/layout/Section";
import { AncizarH4, AncizarH6 } from "@/components/Typography";


const JourneysSection: React.FC = () => {
    const journeys: JourneyCardProps[] = [
        {
            name: "Adaeze O.",
            quote: "Viva Travel Services took us from talking about international expansion to actually standing in front of buyers at a trade fair in Dubai. The sourcing support alone saved us months of trial and error."
        },
        {
            name: "Chuka N.",
            quote: "I'd been trying to work abroad for two years with no clear path. Viva connected me to a legitimate opportunity and walked me through every step, I'm now working in Canada."
        },
        {
            name: "Folake A.",
            quote: "Our company's quarterly business trips used to be a scheduling nightmare. Now Viva handles flights, hotels, and transfers for the whole team, I don't think about it anymore."
        },
        {
            name: "Emeka U.",
            quote: "When my father needed treatment we couldn't get locally, Viva found the right hospital in India, sorted the visa, and arranged everything down to the airport pickup. I didn't have to figure any of it out alone."
        },
        {
            name: "Emeka U.",
            quote: "When my father needed treatment we couldn't get locally, Viva found the right hospital in India, sorted the visa, and arranged everything down to the airport pickup. I didn't have to figure any of it out alone."
        }
    ]

    return (
        <Section id="testimonials" className="flex flex-col gap-20 px-0 md:px-0 py-9 md:py-43">
            <AncizarH4 className="text-center text-primary font-semibold">
                Journeys We&apos;ve Been Part Of
            </AncizarH4>

            <div className="flex flex-row gap-3 md:gap-4 pl-5 md:pl-30 overflow-x-scroll">
                {
                    journeys.map(j => <JourneyCard
                        name={j.name}
                        quote={j.quote}
                        key={j.name}
                    />)
                }
            </div>
        </Section>
    )
}

interface JourneyCardProps {
    name: string
    quote: string
}

const JourneyCard: React.FC<JourneyCardProps> = ({ name, quote }) => {

    return (
        <div className="flex flex-col gap-5 w-71 bg-primary-content text-primary px-5 py-11 shrink-0">
            <AncizarH6 className="text-center font-semibold">
                {name}
            </AncizarH6>

            <p className="text-sm">
                {quote}
            </p>
        </div>
    )
}

export default JourneysSection;