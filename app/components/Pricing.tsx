import Image from "next/image"
import check from "../../public/assests/check.svg"
export function Pricing() {

    return (
        <div className="px-[20px] lg:px-[100px] lg:py-20">
            <div className="text-center">
                <h1 className="text-[#172026] text-center font-medium text-2xl lg:text-[42px]">
                    Flexible plans for you
                </h1>
                <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
                    No hidden fees!
                </p>

            </div>

            <div >



                <div className="w-full  gap-x-4 rounded-[8px] gap-y-6 flex  lg:flex lg:flex-row flex-col lg:justify-between" >
                    <div className=" bg-[#F5F4FF] lg:p-8 p-4 lg:font-medium lg:w-1/3 rounded-sm">
                        
                        <h3>Free Trial</h3>
                        <p>Perfect for testing the waters</p>
                        <h1>{'\u0024'}0/mo</h1>

                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Consectetur adipiscing elit</p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Sed do eiusmod tempor incididunt ut labore </p>
                        </div>
                       
                        <p className="pl-4">

                            <button className="bg-white mt-2 lg:mt-40 pt-2 px-24  text-blue-500 py-2  rounded-sm"> Start Trial</button>
                        </p>
                    </div>
                    <div className=" bg-[#4328EB] lg:text-white lg:font-medium lg:w-1/3 p-4 lg:p-8   rounded-smlg:p-8">
                        
                        <h3>Business</h3>
                        <p>Perfect for small businesses</p>
                        <h1> {'\u0024'} 5000/mo</h1>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Consectetur adipiscing elit</p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Sed do eiusmod tempor incididunt ut labore </p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Sed do eiusmod tempor incididunt ut labore </p>
                        </div>
                        <div className="flex gap-x-4 mt-4">
                            <Image src={check} alt="check" />
                            <p>Sed do eiusmod tempor incididunt ut labore </p>
                        </div>
                        <p className="pl-4 ">

                            <button className="bg-white mt-8 pt-2 px-24 py-2 text-blue-500 rounded-sm"> Start Trial</button>
                        </p>
                    </div>
                    <div className=" bg-[#F5F4FF] lg:p-8 p-4  lg:w-1/3 lg:font-medium rounded-sm">
                        <h3>Enterprise</h3>
                        <p>Perfect for big companies</p>
                        <h1 className="py-4">Custom</h1>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <p className="pl-4 ">

                            <button className="bg-white px-24 mt-3 lg:mt-40 pt-2 py-2 text-blue-500"> Start Trial</button>
                        </p>
                    </div>



                </div>
            </div>

        </div>
    )

}