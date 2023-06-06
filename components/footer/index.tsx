import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../input";
import FooterLogo from "../../public/images/footer-logo.svg";
import Address from "../../public/images/address-min.svg";
import Phone from "../../public/images/phone-min.svg";
import mail from "../../public/images/email-min.svg";
import arrowRight from '../../public/images/input-arrow-right-bold.svg'

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="pt-14 pb-5 border-t border-Sky-Blue px-6">
      <div className="max-w-xl w-full mx-auto">
        <div className="flex items-start justify-between flex-wrap max-[1000px]:mb-2 max-[1000px]:justify-center max-[450px]:justify-start">
          <Link href={"/"} className="max-[1000px]:mr-auto max-[1000px]:mb-11">
            <Image src={FooterLogo} width={267} height={62} alt={FooterLogo} />
          </Link>
          <div className="max-w-[280px] w-full flex flex-col gap-5 max-[1000px]:mb-5 max-[1000px]:ml-auto max-[450px]:mx-0">
            <div className="flex gap-[10px] items-start">
              <Image
                className="mt-[2px]"
                src={Address}
                width={20}
                height={20}
                alt={Address}
              />
              <p className="text-xs-regular font-NunitoSansRegular text-Gunmetal">
                #59A, Amangeldy Str., Almaty city, Republic of Kazakhstan
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={Phone} width={20} height={20} alt={Phone} />
              <p className="text-xs-regular font-NunitoSansRegular text-Gunmetal">
                +7-705-131-47-47
              </p>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image src={mail} width={20} height={20} alt={mail} />
              <p className="text-xs-regular font-NunitoSansRegular text-Gunmetal">
                Info@Finenex.Kz
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-10 mb-10 max-[450px]:justify-between max-[450px]:gap-0 max-[450px]:flex-col max-[450px]:gap-y-5">
              <Link href={'/'} className="text-md-regular text-Gunmetal font-NunitoSansRegular">
                Products
              </Link>
              <Link href={'/'} className="text-md-regular text-Gunmetal font-NunitoSansRegular">
                Main Net
              </Link>
              <Link href={'/'} className="text-md-regular text-Gunmetal font-NunitoSansRegular">
                Test Net
              </Link>
              <Link href={'/'} className="text-md-regular text-Gunmetal font-NunitoSansRegular">
                Development
              </Link>
            </div>
            <p className="text-2lg-regular text-Gunmetal font-NunitoSansRegular self-end mb-[10px] max-[1000px]:self-center max-[450px]:self-start">
              Subscribe to Our Newsletter
            </p>
            <div className="self-end max-[1000px]:self-center rounded-10 border-Gunmetal border pl-5 py-[5px] pr-[10px] flex items-center max-[450px]:self-start">
              <Input
                placeholder={'Email Address'}
                className={
                  "outline-none placeholder:text-xs-regular placeholder:text-Gunmetal placeholder:font-NunitoSansRegular"
                }
                nameValue={"search"}
                onGetValue={(e) => setEmail(e.target.value)}
                type={"email"}
                value={email}
              />
              <Image
                src={arrowRight}
                width={45}
                height={45}
                alt={arrowRight}
              />
            </div>
          </div>
        </div>
        <p className="text-xxs-regular text-Gunmetal font-NunitoSansRegular">© 2023 FINENEX, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
