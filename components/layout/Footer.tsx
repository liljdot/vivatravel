import Image from "next/image"
import Section from "./Section"
import logo from "@/public/assets/images/footer-logo.png"
import { AncizarH4, AncizarH6 } from "../Typography"
import Link from "next/link"
import { whatsappLink } from "@/app/data"
import whatsappIcon from "@/public/assets/images/whatsapp-icon.png"

const Footer: React.FC = () => {

    return (
        <Section className="py-3">
            <div className="flex flex-col gap-7.5 lg:gap-11 bg-primary text-primary-content rounded-lg lg:rounded-4xl px-5.5 lg:px-28.5 py-13.5">
                <div className="flex flex-col gap-8.5 items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        className="size-25"
                    />

                    <AncizarH4 className="text-center">
                        Connecting People, Businesses and Opportunities Across Borders.
                    </AncizarH4>
                </div>

                <div className="flex flex-col lg:flex-row items-center">
                    <div className="flex flex-col lg:flex-row gap-7 lg:basis-5/9 text-center lg:text-left">
                        <ul className="flex flex-col gap-6">
                            <AncizarH6 className="font-semibold">What We Do</AncizarH6>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">Grow Your Business Explore</a>
                            </li>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">Overseas Opportunities</a>
                            </li>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">Travel Globally</a>
                            </li>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">Access International Healthcare</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-6">
                            <AncizarH6 className="font-semibold">Company</AncizarH6>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">The Viva Story</a>
                            </li>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">The Viva Difference</a>
                            </li>
                            <li className="list-disc list-inside text-sm">
                                <a className="link link-hover">Testimonials</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6.5 bg-primary-content text-primary flex-1 rounded-lg lg:rounded-4xl px-8 py-7 mt-16 lg:mt-0">
                        <AncizarH6 className="font-semibold text-center">Get in Touch</AncizarH6>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col gap-6.5 lg:basis-2/3 text-center lg:text-left">
                                <div className="flex flex-col">
                                    <h6 className="font-semibold">Address:</h6>
                                    <p>
                                        Adonai House, 11A Adeniyi Coker Street, Dideolu Estate, Oniru, Victoria Island, Lagos, Nigeria.
                                    </p>
                                </div>

                                <div className="flex flex-col">
                                    <h6 className="font-semibold">Phone / WhatsApp:</h6>
                                    <p>
                                        +234 708 033 0353
                                    </p>
                                </div>

                                <div className="flex flex-col">
                                    <h6 className="font-semibold">Email:</h6>
                                    <p>
                                        vivatravelsng@gmail.com
                                    </p>
                                </div>
                            </div>

                            <Link href={whatsappLink} className="hidden lg:inline-flex relative border self-end justify-self-end btn btn-ghost hover:bg-transparent hover:border-transparent size-15">
                                <Image
                                    src={whatsappIcon}
                                    alt="whatsapp icon"
                                    fill
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-center">
                    © 2026 Viva Travel Services Ltd. All rights reserved. · Privacy Policy · Terms of Service
                </p>
            </div>
        </Section>
    )
}

export default Footer