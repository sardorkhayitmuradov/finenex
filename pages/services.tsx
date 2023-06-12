import Image from "next/image";
import { services } from "../constants/services/services";
import ServicesCircle from "../public/images/blockchain-traced.svg";
import PinkBackground from "../public/images/pink-bg.svg";

export default function Services() {
  return (
    <main className="pb-[100px]">
      <section className="services-bg pt-[100px]">
        <div className="max-w-lg mx-auto w-full pt-[116px] pb-20 relative px-6">
          <h1 className="text-3lg-extrabold font-NunitoSansExtraBold text-white max-[500px]:text-lg-extrabold">
            Finenex Services
          </h1>
          <div className="shadow-services-circle w-[198px] h-[198px] services-circle flex items-center justify-center rounded-[100%] absolute right-0 -bottom-[30%] max-[750px]:h-[120px] max-[750px]:w-[120px] max-[750px]:-bottom-[25%] max-[750px]:right-6">
            <Image
              src={ServicesCircle}
              width={89}
              height={89}
              className="max-[500px]:w-[45px] max-[500px]:h-[45px]"
              alt="blockchain-traced"
            />
          </div>
        </div>
      </section>
      <section className="pt-11 pb-[85px] max-[700px]:pt-20">
        <div className="max-w-lg mx-auto w-full px-6">
          <h2 className="text-3lg-semibold font-NunitoSansSemibold max-w-[530px] w-full text-Gunmetal max-[500px]:text-sm-semibold">
            Finenex combines blockchain technology with traditional financial
            technology to provide differentiated financial services. Below are
            the main services of Finenex.
          </h2>
        </div>
      </section>
      <section className="pb-[50px]">
        <div className="max-w-lg mx-auto w-full flex flex-col gap-20 px-6">
          {services.length > 0 &&
            services.map((service) => {
              return (
                <div className="w-full" key={service.id}>
                  <div className="max-w-[1000px] w-full relative">
                    <p className="text-4lg-black font-NunitoSansBlack text-Bright-Pink opacity-20 max-[450px]:text-3lg-black">
                      {service.id}
                    </p>
                    <h3 className="text-lg-extrabold font-NunitoSansExtraBold text-Gunmetal absolute ml-14 bottom-1/2 translate-y-1/2 max-[500px]:text-sm-extrabold">
                      {service.title}
                    </h3>
                  </div>
                  <div
                    className={`flex items-center justify-between max-[890px]:flex-col max-[890px]:gap-y-6 ${
                      service.id % 2 == 0 && "flex-row-reverse"
                    }`}
                  >
                    <p className="max-w-[563px] w-full text-2lg-semibold font-NunitoSansSemibold text-Gunmetal max-[1050px]:max-w-[400px] max-[890px]:max-w-[100%] max-[450px]:text-xs-regular">
                      {service.text}
                    </p>
                    <div className="relative">
                      <Image
                        src={service.image}
                        width={400}
                        height={270}
                        className={`relative z-[1] ${
                          service.id % 2 == 0
                            ? "left-8 max-[550px]:left-0"
                            : "right-8 max-[550px]:right-0"
                        }`}
                        alt={service.image}
                      />
                      <Image
                        src={PinkBackground}
                        width={260}
                        height={260}
                        className={`absolute -z-[1] max-[550px]:hidden  ${
                          service.id % 2 == 0
                            ? "-bottom-[26px] left-0"
                            : "-bottom-[26px] right-0"
                        }`}
                        alt="BlockchainTechnologyBackground"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
