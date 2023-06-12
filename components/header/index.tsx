import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuImage from "../../public/images/menu.svg";
import Logo from "../../public/images/logo-min.svg";
import Menu from "../menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHeaderWhite = scrollPosition > 80;
  return (
    <>
      <header
        className={`${
          isHeaderWhite
            ? "services-bg duration-200 py-6"
            : "bg-transparent duration-300 py-8"
        } fixed w-full z-10`}
      >
        <div className="max-w-2lg px-6 w-full mx-auto flex items-center justify-between">
          <Link href={"/"}>
            <Image src={Logo} width={182} height={42} alt="logo" />
          </Link>

          <nav className="max-w-[660px] w-full max-[1000px]:hidden">
            <ul className="flex items-center w-full justify-between">
              <li>
                <Link
                  href={"/services"}
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/technology"}
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/blog-news"}
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  Blog and News
                </Link>
              </li>
              <li>
                <Link
                  href={"/faq-support"}
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  FAQ and Support
                </Link>
              </li>
              <li>
                <Link
                  href={"https://docs.finenex.net/"}
                  target="_blank"
                  className="text-white font-NunitoSansSemibold text-xs-semibold"
                >
                  Developer Center
                </Link>
              </li>
            </ul>
          </nav>
          <div className="active:ring-1 p-1 hidden max-[1000px]:block ring-white ring-offset-2 duration-75 ring-offset-slate-50 dark:ring-offset-white" onClick={() => setIsOpen(true)}>
            <Image src={MenuImage} alt="menu" width={30} height={30} />
          </div>
        </div>
      </header>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
