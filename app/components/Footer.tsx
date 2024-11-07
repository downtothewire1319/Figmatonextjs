import Image from "next/image";
import unionlogo from "../../public/assests/Union.svg";
import cevron from "../../public/assests/Chevron-Down.svg";
import wifi from "../../public/assests/wifi.svg";
import facebook from "../../public/assests/f.svg";
import x from "../../public/assests/x.svg";
import * as Accordion from "@radix-ui/react-accordion";

const tagling = [
    {
        title: "Features",
        description: ["Growth", "Sales", "Chat"],
    },
    {
        title: "Pricing",
        description: ["Free trial", "Standard", "Business"],
    },
    {
        title: "Enterprise",
        description: ["Personalise", "Automation", "Invoicing", "24/7 Support"],
    },
    {
        title: "Careers",
        description: ["Open Positions", "Part-Time", "Contractual", "Contact Us"],
    },
];

export function Footer() {
    return (
        <div className="gap-y-[56px] pt-[86px] pb-4 lg:space-y-[86px] px-[20px] lg:px-[100px]">
            <div className="flex flex-col">
                <div className="lg:flex lg:flex-row justify-between lg:w-full">
                    <div className="flex flex-row items-start mb-4 lg:w-1/3">
                        <Image src={unionlogo} alt="logo" />
                        <p className="ml-2">Your Site</p>
                    </div>
                    <div className="lg:w-2/3">
                        <Accordion.Root
                            className="flex flex-col lg:flex lg:flex-row lg:justify-between lg:gap-x-10 lg:h-[200px] gap-y-4"
                            type="single"
                            defaultValue="item-1"
                            collapsible
                        >
                            {tagling.map((item, index) => (
                                <Accordion.Item key={index} value={`tagline-${index + 1}`}>
                                    <Accordion.Header>
                                        <Accordion.Trigger className="flex w-full items-center justify-between">
                                            {/* Display title in a row layout on lg screens */}
                                            <p >{item.title}</p>
                                            <Image src={cevron} alt="cevron" className="lg:hidden" />
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content>
                                        {/* Add column layout for descriptions */}
                                        <div className="flex flex-col gap-y-2 pl-4 cursor-pointer">
                                            {item.description.map((des, idx) => (
                                                <p key={idx}>{des}</p>
                                            ))}
                                        </div>
                                    </Accordion.Content>
                                </Accordion.Item>
                            ))}
                        </Accordion.Root>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col mt-6 lg:flex-row lg:items-center lg:justify-between">
                        <p> {'\u00A9'} Copyright 2024. Your Site. All rights reserved.</p>
                        <div className="flex flex-row items-center justify-center space-x-6 mt-4">
                            <Image src={x} alt="x" />
                            <Image src={facebook} alt="facebook" />
                            <Image src={wifi} alt="wifi" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
