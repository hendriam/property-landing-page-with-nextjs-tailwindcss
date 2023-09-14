import Image from "next/image";
import Link from "next/link";

let links = [
    { id: 1, name: "home", href: "/" },
    { id: 2, name: "services", href: "/services" },
    { id: 3, name: "sell", href: "/sell" },
    { id: 4, name: "rent", href: "/rent" },
];

export default function Footer() {
    return (
        <section className="xl:px-48 px-10">
            <div className="py-10 flex flex-row justify-between">
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

                <div className="flex flex-row place-items-center space-x-5 md:space-x-10">
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
            </div>
            <p className="text-center mb-10 text-sm">
                Copyright 2023 - Kodkustik All Right Reserved.
            </p>
        </section>
    );
}
