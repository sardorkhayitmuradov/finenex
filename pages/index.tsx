import Image from "next/image";
import Button from "../components/button";
import { options } from "../constants/languages/languages";
import LanguageSwitcher from "../components/languageSwitcher";
import { OptionType } from "../components/languageSwitcher/optionType";

export default function Home() {
  const handleOptionChange = (option: OptionType) => {
    console.log(option);
  };
  return (
    <main>
      <section className="pt-[203px] pb-[70px] bg-[url('/images/hero-bg-min.svg')] bg-no-repeat bg-center bg-cover">
        <div className="max-w-2lg w-full mx-auto flex flex-col">
          <h1 className="text-3lg-extrabold text-center mb-[33px] text-white font-NunitoSansExtraBold">
            Discover the Future of Finance with Finenex
          </h1>
          <p className="text-center text-lg-regular font-NunitoSansRegular text-white mb-10">
            Finenex: Bridging the Gap between Traditional Finance and Blockchain
            Technology!
          </p>
          <Button className="rounded-10 mb-8 bg-Bright-Pink py-[15px] px-[33px] text-white text-3lg-semibold font-NunitoSansSemibold self-center">
            Explore Objectives
          </Button>

          <div className="self-start">
            <LanguageSwitcher options={options} onChange={handleOptionChange} />
          </div>
        </div>
      </section>
      <section className="py-[120px]">
        <div className="max-w-2lg w-full mx-auto">

        </div>
      </section>
    </main>
  );
}
