import Image from "next/image";
import Button from "../components/button";
import ValueCard from "../components/cards/valueCard";
import LanguageSwitcher from "../components/languageSwitcher";
import { options } from "../constants/languages/languages";
import { OptionType } from "../components/languageSwitcher/optionType";
import { values } from "../constants/valuesCard/values";
import { objectives } from "../constants/objectives/objectives";
import global from "../public/images/global-map-min.svg";
import addressSk from "../public/images/sk-address.svg";
import addresskz from "../public/images/kz-address.svg";
import languageSwitchIcon from '../public/images/material-symbols_arrow-drop-down-rounded.svg'
import ArrowDown from '../public/images/arrow-down.svg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

export default function Home() {
  const handleOptionChange = (option: OptionType) => {
    console.log(option);
  };
  return (
    <main>
      <section className="pt-[203px] pb-[70px] bg-[url('/images/hero-bg-min.svg')] bg-no-repeat bg-center bg-cover">
        <div className="max-w-2lg px-6 w-full mx-auto flex flex-col">
          <h1 className="text-4lg-extrabold text-center mb-[33px] text-white font-NunitoSansExtraBold max-[1000px]:text-3xl-extrabold max-[450px]:text-lg-extrabold">
            Discover the Future of Finance with Finenex
          </h1>
          <p className="text-center text-lg-regular font-NunitoSansRegular text-white mb-10">
            Finenex: Bridging the Gap between Traditional Finance and Blockchain
            Technology!
          </p>
          <Button className="rounded-10 mb-8 bg-Bright-Pink py-[15px] px-[33px] text-white text-3lg-semibold font-NunitoSansSemibold self-center">
            Explore Objectives
          </Button>

          <div className="self-start max-[1000px]:hidden">
            <LanguageSwitcher type={false} switchIcon={languageSwitchIcon} options={options} onChange={handleOptionChange} />
          </div>
          <Image src={ArrowDown} width={15} height={46} alt="arrow-down" className="h-[46px] mx-auto hidden max-[1000px]:inline-block mt-10"  />
        </div>
      </section>
      <section className="py-[120px] px-6">
        <div className="max-w-2lg w-full mx-auto flex flex-col gap-5 max-[450px]:h-[529px] max-[450px]:items-center">
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
          <div className="hidden max-[450px]:block">
            <Swiper
              effect={"creative"}
              direction={"vertical"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              draggable={true}
              passiveListeners={false}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 0,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="h-[500px]"
            >
              {values.map((value) => {
                return (
                  <SwiperSlide
                    key={value.id}
                    className="!h-[300px] !mb-0 !flex !flex-col !justify-center"
                  >
                    <div
                      className={`rounded-10 bg-white w-full p-5 h-full text-base-extrabold flex flex-col justify-between`}
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-base-extrabold font-NunitoSansExtraBold text-Gunmetal max-w-[205px] w-full">
                          {value.title}
                        </h3>
                        <Image
                          src={value.image}
                          width={52}
                          height={52}
                          alt={value.image}
                        />
                      </div>
                      <p className="text-base-regular text-Gunmetal font-NunitoSansRegular">
                        {value.text}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="pt-[173px] bg-[url('/images/objective-bg-min.svg')] pb-[391px] bg-no-repeat bg-center bg-cover relative max-[1050px]:pb-[500px] max-[1050px]:pt-10">
        <div className="max-w-lg mx-auto px-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-3lg-extrabold max-[1050px]:text-lg-extrabold text-white font-NunitoSansExtraBold">
              Objectives of{" "}
            </p>
            <h2 className="text-5lg-extrabold max-[1050px]:text-3xl-extrabold text-white font-NunitoSansExtraBold">
              Finenex
            </h2>
          </div>
          <div className="absolute max-w-[778px] max-[1270px]:max-w-[700px] max-[1145px]:max-w-[650px] max-[1100px]:max-w-[600px] max-[1050px]:max-w-[550px] h-fit w-full -right-0 top-[40%] transform -translate-y-1/2 max-[1050px]:right-1/2 max-[1050px]:translate-x-1/2 max-[1050px]:-translate-y-[10%] max-[600px]:px-6">
            <Swiper
              effect={"creative"}
              direction={"vertical"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              draggable={true}
              passiveListeners={false}
              slideActiveClass="active-slide-objective"
              slideNextClass="next-slide-objective"
              slidePrevClass="prev-slide-objective"
              
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 10,
                modifier: 0,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="h-[490px] flex flex-col justify-center max-[600px]:h-[900px]"
            >
              {objectives.map((objective) => {
                return (
                  <SwiperSlide
                    key={objective.id}
                    className="flex !flex-col justify-center"
                  >
                    <div
                      className={`bg-transparent w-full pt-12 pb-6 flex items-start gap-x-10`}
                    >
                      <Image
                        src={objective.image}
                        width={60}
                        height={60}
                        alt={objective.image}
                      />

                      <p className="text-4lg-semibold h-[75%] w-full text-white font-NunitoSansSemibold max-[1270px]:text-2lg-semibold">
                        {objective.text}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div> 
        </div>
      </section>
      <section className="py-[120px] px-6">
        <div className="max-w-lg mx-auto w-full flex gap-[78px] max-[1124px]:flex-col max-[450px]:gap-y-14">
          <h2 className="max-w-[332px] w-full text-3lg-extrabold font-NunitoSansExtraBold text-Gunmetal mb-6 max-[1124px]:max-w-[100%] max-[1124px]:text-center max-[610px]:text-lg-extrabold hidden max-[450px]:block">
            Global Expansion
          </h2>
          <Image
            src={global}
            width={762}
            height={368}
            alt="global"
            className="max-[1124px]:mx-auto"
          />
          <div>
            <h2 className="max-w-[332px] w-full text-3lg-extrabold font-NunitoSansExtraBold text-Gunmetal mb-6 max-[1124px]:max-w-[100%] max-[1124px]:text-center max-[610px]:text-lg-extrabold max-[450px]:hidden">
              Global Expansion
            </h2>
            <div className="flex flex-col gap-y-2 max-[1124px]:items-center max-[450px]:items-start">
              <div className="flex items-center gap-x-[10px]">
                <Image src={addressSk} width={24} height={24} alt="sk" />
                <p className="text-lg-regular font-NunitoSansRegular text-Gunmetal">
                  South Korea
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <Image src={addresskz} width={24} height={24} alt="sk" />
                <p className="text-lg-regular font-NunitoSansRegular text-Gunmetal">
                  Kazakhstan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

