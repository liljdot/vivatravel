import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/viva-logo.png"
import { whatsappLink } from "@/app/data";
import { BsTelephone } from "react-icons/bs";

const Header: React.FC = () => {

    return (
        <>
            <div className="navbar fixed bg-neutral px-5 md:px-25 z-1000">
                {/* navbar start */}
                <div className="navbar-start">
                    <Link href="/" className="block relative">
                        <Image
                            alt="mdl logo"
                            src={logo}
                            className="w-15 md:w-50 h-15 md:h-24"
                        />
                    </Link>
                </div>

                {/* navbar center */}
                <div className="navbar-center hidden lg:flex">
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
                    <Link href={whatsappLink} className="btn rounded-full bg-primary font-normal px-5 py-4 transition-all duration-300 ease-in-out hover:scale-105" target="_blank" rel="noopener noreferrer">
                        Contact Us
                        <BsTelephone className="ml-2 size-4.5 text-secondary" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;