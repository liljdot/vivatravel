import Section from "@/components/layout/Section"
import { AncizarH1 } from "@/components/Typography";
import InquireButton from "@/components/ui/InquireButton";

const HeadingSection: React.FC = () => {
    

    return (
        <Section className="mt-23 md:mt-37.5 gap-5 md:gap-10 items-center">
            <AncizarH1 className="text-center text-primary font-semibold md:px-30">
                Connecting People, Businesses and Opportunities Across Borders.
            </AncizarH1>

            <p className="text-center text-sm md:text-base w-71 lg:w-135">
                Your trusted partner for international business growth, overseas opportunities, education, global travel and world-class healthcare, all in one place.
            </p>

            <InquireButton className="hidden md:flex" />
        </Section>
    )
}

export default HeadingSection;