import Image from "next/image";
import { technologies } from "../constants/technology/technology";
import TechnologyInformation from "../public/images/digital-transformation.svg";
import PinkBackground from "../public/images/pink-bg.svg";

export default function Technology() {
  return (
    <main className="pb-[100px]">
      <section className="services-bg pt-[100px]">
        <div className="max-w-lg mx-auto w-full pt-[116px] pb-20 relative">
          <h1 className="text-3lg-extrabold font-NunitoSansExtraBold text-white">
            Finenex Technology
          </h1>
          <div className="shadow-services-circle w-[198px] h-[198px] services-circle flex items-center justify-center rounded-[100%] absolute right-0 -bottom-[30%]">
            <Image
              src={TechnologyInformation}
              width={89}
              height={89}
              alt={TechnologyInformation}
            />
          </div>
        </div>
      </section>
      <section className="pt-11 pb-[85px]">
        <div className="max-w-lg mx-auto w-full">
          <h2 className="text-3lg-semibold font-NunitoSansSemibold max-w-[530px] w-full text-Gunmetal">
            Finenex combines blockchain technology with traditional financial
            technology to provide innovative financial services. The following
            are the main technical elements of Finenex.
          </h2>
        </div>
      </section>
      <section className="pb-[50px]">
        <div className="max-w-lg mx-auto w-full flex flex-col gap-20">
          {technologies.length > 0 &&
            technologies.map((technology) => {
              return (
                <div className="w-full" key={technology.id}>
                  <div className="max-w-[1000px] w-full relative">
                    <p className="text-4lg-black font-NunitoSansBlack text-Bright-Pink opacity-20">
                      {technology.id}
                    </p>
                    <h3 className="text-lg-extrabold font-NunitoSansExtraBold text-Gunmetal absolute ml-14 bottom-1/2 translate-y-1/2">
                      {technology.title}
                    </h3>
                  </div>
                  <div
                    className={`flex items-center justify-between ${
                      technology.id % 2 == 0 && "flex-row-reverse"
                    }`}
                  >
                    <p className="max-w-[563px] w-full text-2lg-semibold font-NunitoSansSemibold text-Gunmetal">
                      {technology.text}
                    </p>
                    <div className="relative">
                      <Image
                        src={technology.image}
                        width={400}
                        height={270}
                        alt={technology.image}
                      />
                      <Image
                        src={PinkBackground}
                        width={260}
                        height={260}
                        className={`absolute -z-[1] ${
                          technology.id % 2 == 0
                            ? "-bottom-[26px] -left-8"
                            : "-bottom-[26px] -right-8"
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
