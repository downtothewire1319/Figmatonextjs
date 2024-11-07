import Image from "next/image";
import bluearrow from "../../public/assests/bluearrow.svg"

// import imagepro from "../../public/assests/Gradient 2.svg";
export function Pro() {
  return (
    <div className=" w-full px-[32px] text-center  lg:px-[100px] " >


      <div className=" rounded-md bg-gradient-to-br p-4 from-pink-500 via-red-500 to-yellow-500 lg:py-[90px] ">

        <h1 className="text-white font-semibold lg:pb-4 text-4xl pb-6">
          Monitor your website like a pro
        </h1>
        <p className="text-white font-normal text-4 lg:pb-2 pb-4">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>
        <div className="flex flex-col  lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-4 mt-4 items-center gap-y-5">
          <p>
            <button className="bg-white text-red-400 py-2 rounded-md px-4">Try for free</button>
          </p>
          <div className="flex flex-row gap-x-3">
            <p className="text-white">Contact Sales</p>
            <span><Image src={bluearrow} alt="bluearrow" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
