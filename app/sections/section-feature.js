import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Feature({ features }) {
    return (
        <section className="bg-[#ECF4FD] xl:px-48 px-10">
            <div className="py-20">
                <div className="flex flex-row justify-between items-center mb-2">
                    <p className="text-[48px] text-[#295FB7] font-extrabold">
                        Feature
                    </p>
                    <Link href="#">
                        <button className="bg-[#295FB7] hover:bg-[#264180] text-sm font-bold text-white py-2 px-3">
                            VIEW ALL
                        </button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-3">
                    {features.map((feature) => (
                        <div className="group h-fit cursor-pointer">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={feature.src}
                                    className=" h-[500px] object-cover"
                                />
                                <div className="absolute text-white w-full h-full bg-black/25 flex flex-col items-center justify-center space-y-2 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h1 className="text-4xl font-bold ">
                                        Couch Bed
                                    </h1>
                                    <p className="text-sm">
                                        Minimalist Furniture
                                    </p>
                                    <h3 className="font-bold">IDR 200jt</h3>
                                    <Link href="#">
                                        <button className="bg-[#295FB7] hover:bg-[#264180] text-sm font-bold text-white py-2 px-3">
                                            VIEW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-center space-x-3 mt-10">
                    <button className="bg-[#295FB7] w-10 rounded-full p-1">
                        <ChevronLeftIcon className="text-white font-bold" />
                    </button>
                    <button className="bg-[#295FB7] w-10 rounded-full p-1">
                        <ChevronRightIcon className="text-white font-bold" />
                    </button>
                </div>
            </div>
        </section>
    );
}
