import Image from "next/image";
import { ValueCardProps } from "./propTypes";

const ValueCard: React.FC<ValueCardProps> = ({ title, image, text, className }) => {
  return (
    <div className={`shadow-value-card rounded-10 bg-white p-10 ${className}`}>
      <div className="flex items-start justify-between mb-[94px]">
        <h3 className="text-base-extrabold font-NunitoSansExtraBold text-Gunmetal max-w-[205px] w-full">
          {title}
        </h3>
        <Image src={image} width={60} height={60} alt={image} />
      </div>
      <p className="text-base-regular text-Gunmetal font-NunitoSansRegular">
        {text}
      </p>
    </div>
  );
};

export default ValueCard;
