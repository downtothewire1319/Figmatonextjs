import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assests/Logo.svg";
import User from "../../public/assests/User.svg";
import Menu from "../../public/assests/Menu.svg";

const navlink = [
    {
        name: " Features",
        url: "/features"
    },
    {
        name: " Pricing",
        url: "/pricing"
    },
    {
        name: " Enterprise",
        url: "/enterprise"
    },
    {
        name: " Careers",
        url: "/careers"
    }

];


export function Navbar() {
    return (
        <nav className="flex w-full items-center border-b border-gray-500 justify-between px-[20px] py-[16px] lg:container lg:max-auto lg:px-20">
            <div className="flex items-center justify-around">
                <Image src={logo} alt="logo" />

                <div className="hidden lg:flex pl-[57px] gap-x-[56px]" >
                    {navlink.map((item, index) => (
                        <Link key={index} href={item.url} className="text-[#3648C] font-medium "> {item.name}</Link>

                    ))}


                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <p className="hidden font-medium text-[#36485C] pr-[56px] lg:block ">Opne an account</p>
                    <Image src={User} alt="User profile" />
                    <span className="hidden font-medium text-[#36485C] lg:block">
                        Sign in
                    </span>
                </div>
                <div>
                    <Image src={Menu} alt="Menu" className="lg:hidden" />
                </div>
            </div>
        </nav>
    );
}
