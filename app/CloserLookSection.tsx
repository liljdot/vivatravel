"use client"

import Section from "@/components/layout/Section"
import { AncizarH4, AncizarH6 } from "@/components/Typography"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"
import Image, { StaticImageData } from "next/image"
import travelIcon from "@/public/assets/images/travel-icon.png"
import growthIcon from "@/public/assets/images/growth-icon.png"
import worldIcon from "@/public/assets/images/world-icon.png"
import heartIcon from "@/public/assets/images/heart-icon.png"
import { useState } from "react"
import Link from "next/link"
import { whatsappLink } from "./data"
import { IoArrowForward } from "react-icons/io5"

const CloserLookSection: React.FC = () => {

    return (
        <Section id="closerlook" className="gap-11 py-50 text-primary">
            <div className="flex flex-col text-center">
                <AncizarH4 className="font-semibold">
                    A Closer Look at How We Help
                </AncizarH4>

                <p className="italic font-semibold">
                    Four pillars, one company. Choose the one that matches where you&apos;re headed
                </p>
            </div>

            <Selector />
        </Section>
    )
}

const Selector: React.FC = () => {
    const tabsContent: SingleTabContent[] = [
        {
            title: "Travel & Tourism",
            tabTitle: "Travel Globally",
            id: "travel",
            icon: travelIcon,
            description: "Our foundation since 2008 — travel handled end to end, for leisure and business alike.",
            services: [
                {
                    title: "Flight Reservations",
                    content: "The right routes and fares, booked without the back-and-forth."
                },
                {
                    title: "Hotel Reservations",
                    content: "Vetted stays that match your budget and standard, wherever you land."
                },
                {
                    title: "Holiday Packages",
                    content: "Fully planned getaways, so the only thing left to do is enjoy it."
                },
                {
                    title: "Visa Advisory & Assistance",
                    content: "Applications prepared correctly the first time, with far less stress."
                },
                {
                    title: "Travel Insurance",
                    content: "Cover in place before you go, so the unexpected stays manageable."
                },
                {
                    title: "Airport Transfers",
                    content: "A reliable ride waiting on both ends of the journey."
                },
                {
                    title: "Religious Pilgrimages",
                    content: "Sacred journeys planned with the care and detail they deserve."
                },
                {
                    title: "Corporate Travel Management",
                    content: "Your team's trips coordinated end to end, without pulling you into the details."
                }
            ]
        },
        {
            title: "Business Growth & International Trade",
            tabTitle: "Grow Your Business",
            id: "growbusiness",
            icon: growthIcon,
            description: "We put  businesses in front of the markets, buyers and partners that move them forward.",
            services: [
                {
                    title: "International business missions",
                    content: "Curated trips that put you in the room with the right markets and partners abroad."
                },
                {
                    title: "International Market Exposure",
                    content: "Direct, guided exposure to how business is actually done in the markets you're entering, so you walk in prepared, not guessing."
                },
                {
                    title: "Trade Fair Participation",
                    content: "Get your products and brand in front of buyers at the fairs that matter."
                },
                {
                    title: "Manufacturer Sourcing",
                    content: "We connect you to vetted manufacturers and suppliers you can actually trust."
                },
                {
                    title: "Corporate Protocol Training",
                    content: "Equip your team with the etiquette and polish global business demands."
                },
                {
                    title: "Hospitality Services Training",
                    content: "Raise your team's service standard to a world-class benchmark"
                },
                {
                    title: "Business travel planning",
                    content: "Every trip tied to your expansion goals, flights, accommodation and logistics planned around the meetings and markets that matter."
                },
                {
                    title: "Business networking events",
                    content: "Direct access to the events and circles where real deals get started."
                }
            ]
        },
        {
            title: "International Recruitment & Overseas Opportunities",
            tabTitle: "Overseas Opportunity",
            description: "Helping talented people find real, credible pathways to work and School abroad.",
            icon: worldIcon,
            id: "overseasopportunities",
            services: [
                {
                    title: "International Recruitment",
                    content: "Matching candidates to genuine roles with credible overseas employers."
                },
                {
                    title: "Employment Opportunities Abroad",
                    content: "Guidance and support from application through to relocation."
                },
                {
                    title: "Educational Opportunities",
                    content: "Pointing you to overseas learning routes tied to real career outcomes."
                },
                {
                    title: "Work & Relocation Support",
                    content: "Beyond the job offer, we help with the practical side of the move, from documentation to settling into a new country with fewer surprises."
                }
            ]
        },
        {
            title: "Medical & Educational Mobility",
            tabTitle: "International Healthcare",
            description: "connecting Nigerian patients with internationally recognised hospitals and healthcare providers.",
            icon: heartIcon,
            id: "medical",
            services: [
                {
                    title: "Treatment Coordination",
                    content: "We manage the process from first contact to the right hospital referral."
                },
                {
                    title: "Visa & Travel Arrangements",
                    content: "Medical visas, flights, accommodation and airport transfers, handled together."
                },
                {
                    title: "Post-Treatment Travel Planning",
                    content: "A smooth, well-timed journey home once treatment is complete."
                },
                {
                    title: "Hospital referrals",
                    content: "We match your case to the right hospital and specialist abroad, so treatment starts with the facility best equipped."
                },
                {
                    title: "Airport transfers",
                    content: "Safe, comfortable transport from the moment you land to your treatment facility, no navigating an unfamiliar city while unwell or exhausted."
                },
                {
                    title: "University Selection & Admission Support",
                    content: "Guidance toward the right course and school, and help through the application"
                },
                {
                    title: "Student Visa Assistance",
                    content: "Applications prepared with the precise student visas demand."
                },
                {
                    title: "Pre-Departure Guidance",
                    content: "Practical preparation so the transition abroad feels far less daunting."
                }
            ]
        }
    ]

    const [tab, setTab] = useState<SingleTabContent["id"]>(tabsContent[0].id)

    // useEffect(() => {
    //     const hash = window.location.hash

    //     alert(hash)

    //     const handleHashChange = () => {
    //         alert("yes")
    //         if (hash.includes("closerlook")) {
                
    //             const element = document.getElementById("closerlook")
    //             element?.scrollIntoView({
    //                 behavior: "smooth"
    //             })
    //         }
    //     }

    //     window.addEventListener("hashchange", handleHashChange)

    //     return () => window.removeEventListener("hashchange", handleHashChange)

    // }, [])

    return (
        <Tabs value={tab} onValueChange={setTab} className={"flex flex-col gap-21"}>
            <TabsList variant="line" className={"w-full px-27 space-x-8"}>
                {
                    tabsContent.map((t, index) => <SingleTab
                        index={index}
                        key={index}
                        title={t.tabTitle}
                        id={t.id}
                    />
                    )
                }
            </TabsList>

            {
                tabsContent.map(t => (
                    <SingleTabContent
                        key={t.id}
                        content={t}
                    />
                ))
            }
        </Tabs>

    )
}

type SingleTabContent = {
    title: string
    description: string
    tabTitle: string
    id: string
    icon: StaticImageData
    services: {
        title: string
        content: string
    }[]
}

interface SingleTabProps {
    index: number
    title: SingleTabContent["tabTitle"]
    id: SingleTabContent["id"]
}

interface SingleTabContentProps {
    content: SingleTabContent
}

const SingleTab: React.FC<SingleTabProps> = ({ title, index, id }) => {

    return (
        <TabsTrigger
            value={id}
            id={id}
            className="
                    after:border-2
                    after:border-secondary
                    after:rounded-b-full
                    data-active:text-primary
                    data-active:font-semibold
                    h-fit
                    after:bg-secondary

                    flex flex-col
                    "
        >
            <AncizarH6 className="text-base">
                {
                    index > 9
                        ? index + 1
                        : "0" + (index + 1)
                }
            </AncizarH6>
            <p>{title}</p>
        </TabsTrigger>
    )
}

const SingleTabContent: React.FC<SingleTabContentProps> = ({ content }) => {

    return (
        <TabsContent value={content.id} className={"flex flex-col gap-20 text-primary"}>
            <div className="flex flex-col gap-7.5">
                <Image
                    src={content.icon}
                    alt="icon"
                    className="size-22.5"
                />

                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2.5">
                        <AncizarH4 className="font-semibold">
                            {content.title}
                        </AncizarH4>

                        <p className="italic">
                            {content.description}
                        </p>
                    </div>

                    <Link href={whatsappLink} className="btn rounded-full bg-primary font-normal self-end px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105">
                        Make an Inquiry
                        <IoArrowForward className="ml-2 size-4.5 text-secondary" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-x-4 gap-y-8">


                {
                    content.services.map(service => (
                        <div key={service.title} className="flex flex-col gap-2.5 basis-[calc((100%-1rem)/2)] px-10 py-5 bg-primary-content rounded-lg">
                            <AncizarH6>
                                {service.title}
                            </AncizarH6>

                            <p className="text-sm">
                                {service.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </TabsContent>
    )
}

export default CloserLookSection