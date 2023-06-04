import Image from "next/image";
import Button from "../components/button";
import ValueCard from "../components/cards/valueCard";
import LanguageSwitcher from "../components/languageSwitcher";
import { options } from "../constants/languages/languages";
import { OptionType } from "../components/languageSwitcher/optionType";
import { values } from "../constants/valuesCard/values";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";

export default function Home() {
  const handleOptionChange = (option: OptionType) => {
    console.log(option);
  };
  return (
    <main>
      <section className="pt-[203px] pb-[70px] bg-[url('/images/hero-bg-min.svg')] bg-no-repeat bg-center bg-cover">
        <div className="max-w-2lg px-6 w-full mx-auto flex flex-col">
          <h1 className="text-4lg-extrabold text-center mb-[33px] text-white font-NunitoSansExtraBold">
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
        <div className="max-w-2lg px-6 w-full mx-auto flex flex-col gap-5 max-[450px]:h-[529px] max-[450px]:items-center">
          <div className="flex gap-5 items-stretch max-[1000px]:flex-col max-[450px]:hidden">
            <h2 className="text-2lg-extrabold max-w-[340px] w-full text-Charcoal font-NunitoSansExtraBold max-[1000px]:text-center mx-auto">
              Core Values of <br />{" "}
              <span className="text-3xl-extrabold finenex">Finenex</span>
            </h2>
            <div className="grid gap-5 grid-cols-2 max-[700px]:grid-cols-1">
              {values.length > 0 &&
                values.slice(0, 2).map((value) => {
                  return (
                    <ValueCard
                      key={value.id}
                      title={value.title}
                      image={value.image}
                      text={value.text}
                      className={
                        "max-w-[450px] w-full max-[1000px]:max-w-[100%]"
                      }
                    />
                  );
                })}
            </div>
          </div>
          <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 items-stretch flex-wrap max-[700px]:grid-cols-1 max-[450px]:hidden">
            {values.length > 0 &&
              values.slice(2).map((value) => {
                return (
                  <ValueCard
                    key={value.id}
                    title={value.title}
                    image={value.image}
                    text={value.text}
                    className={"lg:max-w-[400px] w-full"}
                  />
                );
              })}
          </div>

          <Swiper
            effect={"coverflow"}
            direction={"vertical"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            draggable={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 1,
              modifier: 5,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="flex flex-col justify-center"
          >
           {
            
           }
          </Swiper>
   -     </div>
      </section>
      <section></section>
    </main>
  );
}
