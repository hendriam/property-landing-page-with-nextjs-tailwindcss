import Image from "next/image";

import {
    IdentificationIcon,
    GlobeAltIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/solid";

let properties = [
    { id: 1, src: "/images/property-1.jpg" },
    { id: 2, src: "/images/property-2.jpg" },
    { id: 3, src: "/images/property-3.jpg" },
    { id: 4, src: "/images/property-4.jpg" },
    { id: 5, src: "/images/property-5.jpg" },
    { id: 6, src: "/images/property-6.jpg" },
];

export default function BestCollections({ properties }) {
    return (
        <section className="bg-white xl:px-48 px-10">
            <div className="py-20 flex flex-col items-center">
                <p className="text-center text-[48px] font-extrabold text-[#295FB7]">
                    Best Collections On Sale
                </p>
                <p className="text-lg text-center">
                    Get your dream property right now <br></br> and get best
                    seller
                </p>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center mt-10">
                    {properties.map((property) => (
                        <div
                            className={`bg-[#ECF4FD] hover:bg-gradient-to-b hover:from-[#295EB5] hover:to-[#1f46a9] hover:shadow-2xl shadow-none shadow-gray-800  hover:text-white p-3`}
                        >
                            <Image
                                src={property.src}
                                alt="property-1"
                                className="w-[353px] h-[261px] object-cover"
                            />
                            <p className="text-lg font-bold mt-2">
                                IDR 200.000.000
                            </p>
                            <p className="text-sm">
                                Jl. Soekarno Hatta, Jakarta
                            </p>
                            <p className="text-[#FFAC33] mt-2">Sell</p>
                            <div className="mt-2 grid grid-cols-3">
                                <div className="grid grid-rows-2 gap-y-1">
                                    <div className="flex flex-row space-x-2 items-center">
                                        <IdentificationIcon className="w-7" />
                                        <span className="text-sm font-bold">
                                            5
                                        </span>
                                    </div>
                                    <p className="text-[14px] font-semibold">
                                        Bedroom
                                    </p>
                                </div>
                                <div className="grid grid-rows-2 gap-y-1">
                                    <div className="flex flex-row space-x-2 items-center">
                                        <CubeTransparentIcon className="w-7" />
                                        <span className="text-sm font-bold">
                                            3
                                        </span>
                                    </div>
                                    <p className="text-[14px] font-semibold">
                                        Bathroom
                                    </p>
                                </div>
                                <div className="grid grid-rows-2 gap-y-1">
                                    <div className="flex flex-row space-x-2 items-center">
                                        <GlobeAltIcon className="w-7" />
                                        <span className="text-sm font-bold">
                                            360m
                                        </span>
                                    </div>
                                    <p className="text-[14px] font-semibold">
                                        Home Area
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
