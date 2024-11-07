"use client";
import Image from "next/image";
import minus from "../../public/assests/minu.svg"; // adjust path as needed
import plus from "../../public/assests/plusp.svg"; // adjust path as needed
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

export function Faq() {
    const [open, setOpen] = useState(`item-1`);

    const items = [
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        },
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        },
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        },
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        },
        {
            question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        },
    ];

    return (
        <div className="px-[20px] lg:px-[100px] lg:flex lg:flex-row items-center justify-between">
            <div className="lg:w-[40%] lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
                    Frequently Asked Questions
                </h3>
                <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                    Lets clarify some of your questions
                </h1>
                <p className="text-[#36485C] pb-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore
                </p>
            </div>
            <div className="lg:w-[60%]">
                <Accordion.Root
                    className="flex flex-col gap-y-4"
                    type="single"
                    defaultValue="item-1"
                    value={open}
                    onValueChange={setOpen}
                    collapsible
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item
                                value={`item-${index + 1}`}
                                className="bg-[#E3F1FF] p-[16px] rounded-[12px]"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex items-center justify-center gap-x-4">
                                        <p className="text-left font-medium text-[#172026]">
                                            {item.question}
                                        </p>
                                        <span>
                                            {/* Conditionally render the plus or minus icon based on the open state */}
                                            {open === `item-${index + 1}` ? (
                                                <Image src={minus} alt="minus" />
                                            ) : (
                                                <Image src={plus} alt="plus" />
                                            )}
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>

            </div>
        </div>
    );
}
