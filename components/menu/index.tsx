import React, { FC, MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import close from "../../public/images/close.svg";
import logoMenu from "../../public/images/footer-logo.svg";
import styles from "./menu.module.css";
import { CSSTransition } from "react-transition-group";
import LanguageSwitcher from "../languageSwitcher";
import { options } from "../../constants/languages/languages";
import { OptionType } from "../languageSwitcher/optionType";
import languageSwitcherIcon from '../../public/images/material-symbols_arrow-drop-down-rounded-white.svg'

interface MenuProps {
  isOpen: boolean;
  onClose: MouseEventHandler<any>;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
    const handleOptionChange = (option: OptionType) => {
        console.log(option);
      };
  return (
    <CSSTransition
      in={isOpen}
      timeout={150}
      classNames={{
        enter: styles.menuModalEnter,
        enterActive: styles.menuModalEnterActive,
        exit: styles.menuModalExit,
        exitActive: styles.menuModalExitActive,
      }}
      unmountOnExit
    >
      <div className={`${styles.menuModal} fixed inset-0  z-20`}>
        <div className="w-full mx-auto flex flex-col h-[62%] bg-white">
          <div className="flex items-center justify-between pt-8 px-6 mb-[30px]">
            <Image
              src={logoMenu}
              alt="logo"
              onClick={onClose}
              width={166}
              height={38}
            />
            <Image
              src={close}
              alt="close"
              onClick={onClose}
              width={40}
              height={40}
            />
          </div>
          <nav className="flex flex-col items-start mt-[30px] mb-14 px-6 gap-y-5">
            <Link
              href={"/services"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              Service
            </Link>
            <Link
              href={"/technology"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              Technology
            </Link>
            <Link
              href={"/about"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href={"/"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              Blog and News
            </Link>
            <Link
              href={"/"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              FAQ and Support
            </Link>
            <Link
              href={"/"}
              className="font-NunitoSansBold text-base-bold text-Gunmetal"
              onClick={onClose}
            >
              Developer Center
            </Link>
            {/* ... add other Link components as per your original code ... */}
          </nav>
          <div className="px-6 w-fit">
            <LanguageSwitcher type={true} switchIcon={languageSwitcherIcon} options={options} onChange={handleOptionChange} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
