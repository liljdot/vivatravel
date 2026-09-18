import Section from "@/components/layout/Section"
import { AncizarH1 } from "@/components/Typography";
import Link from "next/link";
import { whatsappLink } from "./data";
import { IoArrowForward } from "react-icons/io5";

const HeadingSection: React.FC = () => {
    return (
        <Section className="mt-37.5 gap-10 items-center">
            <AncizarH1 className="text-center text-primary font-semibold px-30">
                Connecting People, Businesses and Opportunities Across Borders.
            </AncizarH1>

            <p className="text-center w-135">
                Expert legal support for businesses, creatives, and innovators across Intellectual Property, Entertainment, technology, corporate, and More.
            </p>

            <Link href={whatsappLink} className="btn rounded-full bg-primary font-normal px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
                Make an Inquiry
                <IoArrowForward className="ml-2 size-4.5 text-secondary" />
            </Link>
        </Section>
    )
}

export default HeadingSection;