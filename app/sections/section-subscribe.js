import Image from "next/image";
import {
    MapIcon,
    PhoneIcon,
    EnvelopeIcon,
    FilmIcon,
    ChatBubbleBottomCenterTextIcon,
    TvIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Subscribe() {
    return (
        <section className="relative">
            <Image
                src="/images/property-4.jpg"
                className="object-cover"
                fill
                loading="lazy"
            />
            <div className="w-full h-full top-0 bg-black/50 opacity-95">
                <div className="xl:px-48 px-10 py-32">
                    <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-10">
                        <div className="text-white flex flex-col space-y-10">
                            <h1 className="text-4xl font-extrabold">
                                Need Consultation ? <br></br>
                                Contact Us We Are Ready To Help
                            </h1>
                            <div>
                                <h2 className="font-bold text-xl mb-2">
                                    Contact
                                </h2>
                                <p className="flex flex-row space-x-2">
                                    <MapIcon className="w-5 h-5" />
                                    <span>Jl. Bandung, Jakarta</span>
                                </p>
                                <p className="flex flex-row space-x-2">
                                    <PhoneIcon className="w-5 h-5" />
                                    <span>021-394030</span>
                                </p>
                                <p className="flex flex-row space-x-2">
                                    <EnvelopeIcon className="w-5 h-5" />
                                    <span>myproperty@gmail.com</span>
                                </p>
                            </div>

                            <div>
                                <h2 className="font-bold text-xl mb-2">
                                    Social Media
                                </h2>
                                <p className="flex flex-row space-x-2">
                                    <FilmIcon className="w-5 h-5" />
                                    <span>@myproperty</span>
                                </p>
                                <p className="flex flex-row space-x-2">
                                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                                    <span>@myproperty</span>
                                </p>
                                <p className="flex flex-row space-x-2">
                                    <TvIcon className="w-5 h-5" />
                                    <span>My Property</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-10 text-center">
                            <h1 className="text-[#295FB7] text-4xl font-extrabold">
                                Any Question ?
                            </h1>
                            <div className="flex flex-col space-y-3 mt-5">
                                <input
                                    type="text"
                                    placeholder="enter your email here"
                                    className="px-5 py-5 bg-gray-300"
                                />
                                <textarea
                                    placeholder="enter your question here"
                                    className="px-5 py-5 bg-gray-300 h-36"
                                ></textarea>
                                <Link href="#">
                                    <button className="bg-[#295FB7] hover:bg-[#264180] w-full font-bold text-white px-5 py-5">
                                        SEND
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
