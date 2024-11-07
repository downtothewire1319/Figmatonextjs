import Image from "next/image";
import feature1 from "../../public/assests/feature-1.svg";
import feature2 from "../../public/assests/feature-2.svg";
import feature3 from "../../public/assests/feature-3.svg";
import check from "../../public/assests/check.svg";
import bluearrow from "../../public/assests/bluearrow.svg";

export function Feature() {
  return (
    <div className="flex flex-col gap-y[56px] py-[86px] space-y-4 lg:space-y-[86px] px-[20px] lg:px-[100px] ">
      <div className=" lg:w-full flex flex-col lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-6">
        <Image
          src={feature1}
          alt="feature1 "
          className="lg:w-1/2 hidden lg:block"
        />
        <div className="lg:w-1/2">
          <h3 className="text-4 text-[#0085FF] font-medium">
            Sales Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026]">
            Simplify your sales monitoring
          </h1>
          <Image src={feature1} alt="feature 1" className="lg:hidden" />
          <p className="text-[#36485C] font-medium text-4 mt-4">
            Stay on top of things and revamp your work process with our
            game changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div>
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
          </div>
          <p className="flex mt-6 gap-x-4">
            Learn more
            <span>
              <Image src={bluearrow} alt="bluearrow" />
            </span>
          </p>
        </div>
      </div>

      <div className=" lg:w-full flex flex-col lg:flex lg:flex-row lg:space-x-4 lg:items-center lg:justify-center lg:gap-x-6">
        <Image
          src={feature2}
          alt="feature2 "
          className="lg:w-1/2 hidden lg:block"
        />
        <div className="lg:w-1/2">
          <h3 className="text-4 text-[#00A424] font-medium">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026]  pb-4">
            Get in touch with your customers
          </h1>
          <Image src={feature2} alt="feature 1" className="lg:hidden" />
          <p className="text-[#36485C] font-medium text-4 mt-4">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div>
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
          </div>
          <p className="flex mt-6 gap-x-4 text-[#00A424]">
            Learn more
            <span>
              <Image
                src={bluearrow}
                alt="bluearrow"
                className="text-[#00A424]"
              />
            </span>
          </p>
        </div>
      </div>

      <div className=" lg:w-full flex flex-col lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-x-6">
        <Image
          src={feature3}
          alt="feature1 "
          className="lg:w-1/2 hidden lg:block"
        />
        <div className="lg:w-1/2">
          <h3 className="text-4 text-[#EB2891] font-medium">
            Growth Monitoring
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] pb-2">
            Monitor your site’s new subscribers
          </h1>
          <Image src={feature3} alt="feature 1" className="lg:hidden" />
          <p className="text-[#36485C] font-medium text-4 mt-4">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <div className="lg:flex lg:space-x-8 lg:mt-4 flex space-x-2">
            <div className="">
              <p>100+</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="">
              <p>100+</p>
              <p>Conse adipiscing elit</p>
            </div>
          </div>
          <p className="flex  mt-6 gap-x-4">
            Learn more
            <span>
              <Image src={bluearrow} alt="bluearrow" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
