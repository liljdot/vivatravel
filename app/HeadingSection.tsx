import Section from "@/components/layout/Section"
import { AncizarH1 } from "@/components/Typography";
import Link from "next/link";
import { whatsappLink } from "./data";
import { IoArrowForward } from "react-icons/io5";

const HeadingSection: React.FC = () => {
    return (
        <Section className="mt-23 md:mt-37.5 gap-5 md:gap-10 items-center">
            <AncizarH1 className="text-center text-primary font-semibold md:px-30">
                Connecting People, Businesses and Opportunities Across Borders.
            </AncizarH1>

            <p className="text-center text-sm md:text-base w-71 lg:w-135">
                Your trusted partner for international business growth, overseas opportunities, education, global travel and world-class healthcare, all in one place.
            </p>

            <Link href={whatsappLink} className="hidden md:flex btn rounded-full bg-primary font-normal px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
                Make an Inquiry
                <IoArrowForward className="ml-2 size-4.5 text-secondary" />
            </Link>
        </Section>
    )
}

export default HeadingSection;