import { ValueCardProps } from "./propTypes";

const ValueCard: React.FC<ValueCardProps> = ({title, image , text}) => {
    return (
        <div className="shadow-value-card rounded-10 bg-white p-10">
                    <div>
                        <h3>Innovation</h3>
                        
                    </div>
        </div>
    )
};

export default ValueCard;
