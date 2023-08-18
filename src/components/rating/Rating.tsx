import {FC} from 'react';
import Image from "next/image";
import {RatingWrapper} from "@/components/rating/RatingStyled"; // Import styles from RatingStyled.ts

interface RatingProps {
    rate: string;
}

const RatingComponent: FC<RatingProps> = ({rate}) => {
    return (
        <RatingWrapper className='rating'>
            <span className="rating__count">{rate}</span>
            <Image src='/assets/images/star.svg' alt='star' width={10} height={10}/>
        </RatingWrapper>
    );
};

export default RatingComponent;
