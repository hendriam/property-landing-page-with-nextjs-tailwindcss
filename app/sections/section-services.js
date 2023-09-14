import { ClockIcon, HomeIcon, WalletIcon } from "@heroicons/react/24/solid";

export default function Services() {
    return (
        <section className="bg-[#ECF4FD] xl:px-48 px-10">
            <div className="py-20 flex flex-col items-center">
                <p className="text-center text-[48px] font-extrabold text-[#295FB7]">
                    Our Services
                </p>
                <p className="text-center text-lg">
                    With us, you can expect a transparent <br></br> and
                    trustworthy partnership
                </p>

                <div className="grid md:grid-cols-3 grid-rows-1 md:gap-x-3 gap-y-3 2xl:w-[80%] w-full justify-center mt-10">
                    <div className="flex flex-col bg-white py-12 px-6">
                        <div className="flex flex-row justify-center bg-[#295FB7] self-center rounded-full p-4 w-20 mb-6">
                            <HomeIcon className="w-12 text-white hover:text-[#000000]" />
                        </div>
                        <p className="text-center text-[18px] font-bold mb-3">
                            Property Insurance
                        </p>
                        <p className="text-center text-base">
                            Protect your home and peace of mind with our
                            comprehensive property insurance coverage.
                        </p>
                    </div>
                    <div className="flex flex-col bg-white py-12 px-6">
                        <div className="flex flex-row justify-center bg-[#295FB7] self-center rounded-full p-4 w-20 mb-6">
                            <WalletIcon className="w-12 text-white hover:text-[#000000]" />
                        </div>
                        <p className="text-center text-[18px] font-bold mb-3">
                            Easy Payment
                        </p>
                        <p className="text-center text-base">
                            Experience hassle-free payments with our easy
                            payment options.. Simplify your life and manage your
                            finances effortlessly.
                        </p>
                    </div>

                    <div className="flex flex-col bg-white py-12 px-6">
                        <div className="flex flex-row justify-center bg-[#295FB7] self-center rounded-full p-4 w-20 mb-6">
                            <ClockIcon className="w-12 text-white hover:text-[#000000]" />
                        </div>
                        <p className="text-center text-[18px] font-bold mb-3">
                            Quick Process
                        </p>
                        <p className="text-center text-base">
                            Experience swift and efficient service with our
                            quick process. Say goodbye to long waits and hello
                            to instant results
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
