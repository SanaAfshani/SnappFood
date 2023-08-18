import {FC} from 'react';
import Image from "next/image";
import {AdvertisingWrapper} from "@/components/advertising/AdvertisingStyled"; // Import styles from AdvertisingStyled.ts

interface AdvertisingProps {
    text: string;
}

const AdvertisingComponent: FC<AdvertisingProps> = ({ text }) => {
    return (
        <AdvertisingWrapper className="advertising">
            <div className="advertising__icon">
                <Image src='/assets/images/advertising.webp'
                       alt='advertising'
                       priority
                       width={20}
                       height={20} />
            </div>
            <div className="advertising__text">{text}</div>
        </AdvertisingWrapper>
    );
};

export default AdvertisingComponent;
