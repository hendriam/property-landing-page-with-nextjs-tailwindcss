import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-[#2456AB] to-[#1A3B77]">
            <div className="bg-hero bg-no-repeat bg-cover w-full xl:px-48 px-10">
                <div className="flex flex-col md:items-start items-center w-full 2xl:w-[55%] lg:w-2/3  md:py-32 py-10">
                    <h1 className="uppercase md:text-start text-center sm:text-6xl text-5xl text-white font-black sm:leading-[70px] leading-[50px]">
                        unlock the <br className="sm:hidden block"></br> door to
                        your ideal home
                    </h1>
                    <p className="text-white sm:text-lg text-sm md:text-start text-center sm:leading-[30px] leading-[20px] md:mt-5 mt-3">
                        Browse, explore, and find the perfect property with our
                        innovative website. Seamlessly connect with sellers,
                        agents, and a vibrant community of home seekers. Your
                        dream home awaits!
                    </p>

                    <div className="bg-white w-full py-3 px-4 md:mt-12 mt-5 flex flex-row justify-between items-center opacity-100 sm:opacity-90">
                        <div className="flex flex-row sm:space-x-6 space-x-3">
                            <div className="flex flex-col space-y-1 border-[#757575] border-r-2 pr-6">
                                <p className="flex sm:flex-none flex-row space-x-1 md:text-sm text-xs font-extrabold">
                                    <span>Location</span>
                                    <Image
                                        src="/images/map.svg"
                                        width={15}
                                        height={15}
                                        alt="map"
                                        className="block sm:hidden"
                                    />
                                </p>
                                <div className="flex flex-row space-x-2 justify-items-center">
                                    <span className="text-[#757575] text-[10px] sm:text-xs">
                                        Select Your City
                                    </span>
                                    <Image
                                        src="/images/map.svg"
                                        width={20}
                                        height={20}
                                        alt="map"
                                        className="hidden sm:block"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1 border-[#757575] border-r-2 pr-6">
                                <p className="flex sm:flex-none flex-row space-x-1 md:text-sm text-xs font-extrabold">
                                    <span>Price</span>
                                    <Image
                                        src="/images/price.svg"
                                        width={15}
                                        height={15}
                                        alt="map"
                                        className="block sm:hidden w-auto h-auto"
                                    />
                                </p>
                                <div className="flex flex-row space-x-2 justify-items-center">
                                    <span className="text-[#757575] text-[10px] sm:text-xs">
                                        $10.000 - $50.000
                                    </span>
                                    <Image
                                        src="/images/price.svg"
                                        width={20}
                                        height={20}
                                        alt="map"
                                        className="hidden sm:block"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <p className="flex sm:flex-none flex-row space-x-1 md:text-sm text-xs font-extrabold">
                                    <span>Type</span>
                                    <Image
                                        src="/images/arrow-down.svg"
                                        width={15}
                                        height={15}
                                        alt="map"
                                        className="block sm:hidden"
                                    />
                                </p>
                                <div className="flex flex-row space-x-2 justify-items-center">
                                    <span className="text-[#757575] text-[10px] sm:text-xs">
                                        Select Your City
                                    </span>
                                    <Image
                                        src="/images/arrow-down.svg"
                                        width={20}
                                        height={20}
                                        alt="map"
                                        className="hidden sm:block"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button>
                                <Image
                                    src="/images/home-search.svg"
                                    width={1}
                                    height={1}
                                    alt="home-search"
                                    className="w-10 md:w-12"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-4 md:mt-12 mt-5">
                        <div className="bg-white rounded-full py-3 px-[13px] flex flex-col items-center">
                            <Image
                                src="/images/icon-home.svg"
                                width={1}
                                height={1}
                                alt="icon-home"
                                className="w-7"
                            />
                            <p className="text-xs font-bold">+500 K</p>
                        </div>

                        <div className="bg-white rounded-full py-3 px-[13px] flex flex-col items-center">
                            <Image
                                src="/images/icon-village.svg"
                                width={1}
                                height={1}
                                alt="icon-home"
                                className="w-7"
                            />
                            <p className="text-xs font-bold">+200 K</p>
                        </div>

                        <div className="bg-white rounded-full py-3 px-[13px] flex flex-col items-center">
                            <Image
                                src="/images/icon-apartment.svg"
                                width={1}
                                height={1}
                                alt="icon-home"
                                className="w-7"
                            />
                            <p className="text-xs font-bold">+300 K</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
