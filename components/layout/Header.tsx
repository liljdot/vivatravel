"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/viva-logo.png"
import { whatsappLink } from "@/app/data";
import { BsTelephone } from "react-icons/bs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Drawer, DrawerContent, DrawerTrigger } from "../ui";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
    const [sandwichOpen, setSandwichOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <div className="navbar fixed bg-neutral px-5 md:px-25 z-1000">
                {/* navbar start */}
                <div className="navbar-start">
                    <Link href="/" className="block relative">
                        <Image
                            alt="mdl logo"
                            src={logo}
                            className="w-19 md:w-50 h-12 md:h-24"
                        />
                    </Link>
                </div>

                {/* navbar center */}
                {/* hidden on mobile, show on desktop */}
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-14 text-base px-1">
                        <li><Link href="/" className="hover:text-primary hover:font-medium">Home</Link></li>
                        <li>
                            <details>
                                <summary className="hover:text-primary focus:text-primary focus:font-medium hover:font-medium">Services</summary>
                                <ul className="p-2 bg-neutral z-1">
                                    <li><Link href="/travel-tourism" className="hover:text-primary hover:font-medium">Travel & Tourism</Link></li>
                                    <li><Link href="/business-growth" className="hover:text-primary hover:font-medium">Business Growth</Link></li>
                                    <li><Link href="/overseas-opportunities" className="hover:text-primary hover:font-medium">Overseas Opportunities</Link></li>
                                    <li><Link href="/international-healthcare" className="hover:text-primary hover:font-medium">International Healthcare</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href="/about" className="hover:text-primary hover:font-medium">About</Link></li>
                    </ul>
                </div>
                {/* navbar end */}
                <div className="navbar-end">
                    {/* hidden on mobile, show on desktop */}
                    <Link href={whatsappLink} className="hidden md:flex btn rounded-full bg-primary font-normal px-5 py-4 transition-all duration-300 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
                        Contact Us
                        <BsTelephone className="ml-2 size-4.5 text-secondary" />
                    </Link>

                    {/* show on mobile, hidden on desktop */}
                    <div className="flex md:hidden">
                        <Drawer key={pathname} swipeDirection="up" onOpenChange={setSandwichOpen}>
                            <DrawerTrigger
                                render={<Button className={"text-primary"} variant="ghost" />}
                            >
                                <FiMenu className={`absolute size-6 text-primary ${sandwichOpen ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all ease-in-out duration-700`} />
                                <IoClose className={`absolute size-6 text-primary ${sandwichOpen ? 'opacity-100' : 'opacity-0 -rotate-180'} transition-all ease-in-out duration-500`} />
                            </DrawerTrigger>
                            <DrawerContent className={`pt-14`}>
                                <div className="flex flex-col py-12 bg-neutral text-base px-4.5 rounded-3xl">
                                    <ul className="flex flex-col text-neutral-content space-y-11">
                                        <li><Link href={"/"}>Home</Link></li>
                                        <li>
                                            <Accordion>
                                                <AccordionItem value="products" className="gap-0">
                                                    <AccordionTrigger className="decoration-0 p-0">Services</AccordionTrigger>

                                                    <AccordionContent className="px-5 pt-11">
                                                        <ul className="flex flex-col space-y-11">
                                                            <li><a className="decoration-0" >Travel & Tourism</a></li>
                                                            <li><a className="decoration-0">Business Growth</a></li>
                                                            <li><a className="decoration-0">Overseas Opportunities</a></li>
                                                            <li><a className="decoration-0">International Healthcare</a></li>
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </li>
                                        <li><Link href={"/about"}>About</Link></li>
                                        <Link href={whatsappLink} className="btn rounded-full bg-primary font-normal px-5 py-4 transition-all duration-300 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
                                            Contact Us
                                            <BsTelephone className="ml-2 size-4.5 text-secondary" />
                                        </Link>
                                    </ul>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;