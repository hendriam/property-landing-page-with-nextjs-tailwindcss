"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

let links = [
    { id: 1, name: "home", href: "/" },
    { id: 2, name: "services", href: "/services" },
    { id: 3, name: "sell", href: "/sell" },
    { id: 4, name: "rent", href: "/rent" },
];

export default function Header() {
    const [isDisableMenuMobile, setIsDisableMenuMobile] = useState(false);

    return (
        <section className="xl:px-48 px-10">
            <nav className="w-full py-5">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row place-items-center space-x-1">
                            <Image
                                src="/images/logo.png"
                                width={30}
                                height={30}
                                alt="logo"
                            />
                            <p className="font-bold text-md leading-none text-[#295FB7]">
                                PROPERTY
                            </p>
                        </div>

                        <div className="hidden sm:flex flex-row place-items-center space-x-5 md:space-x-10">
                            {links.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="uppercase text-sm font-bold"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden sm:flex flex-row place-items-center space-x-3">
                            <Link
                                href="/signup"
                                className="uppercase text-sm font-bold"
                            >
                                <button className="border-2 border-white hover:border-blue text-sm font-bold py-2 px-3">
                                    SIGN UP
                                </button>
                            </Link>
                            <Link href="/login">
                                <button className="bg-[#295FB7] hover:bg-[#264180] text-sm font-bold text-white py-2 px-3">
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                        <button
                            onClick={() =>
                                setIsDisableMenuMobile(!isDisableMenuMobile)
                            }
                            className="sm:hidden block "
                        >
                            <Image
                                src="/images/Bars3.svg"
                                alt="bar-icon"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>

                    {isDisableMenuMobile ? (
                        <div className="sm:hidden block w-full absolute left-0 top-[70px] py-3 px-10 bg-white border-t-[1px] border-t-[#757575]">
                            <ul className="flex flex-col space-y-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className="hover:bg-[#295FB7] rounded-md uppercase text-sm hover:text-white hover:p-2 font-bold"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </nav>
        </section>
    );
}
