import React, {FC} from 'react';
import {ProSpan, Wrapper} from "@/components/imageHeader/ImageHeaderStyled";

interface CardImageWrapperProps {
    imageUrl?: string;
    logoUrl?: string;
    title?: string;
    best_coupon?: string;
    is_pro?: boolean;
}

const CardImageWrapper: FC<CardImageWrapperProps> = (props) => {
    const {imageUrl, logoUrl, title,best_coupon,is_pro} = props
    return (
        <Wrapper className='restaurant-card__image-wrapper'>
            <img className="restaurant-card__image-wrapper__image" src={imageUrl} alt={title}/>
            <img className="restaurant-card__image-wrapper__logo" src={logoUrl} alt={`${title} Logo`}/>
            {best_coupon && (
                <ProSpan isPro={!!is_pro}>{best_coupon}</ProSpan>
            )}
        </Wrapper>
    );
};

export default CardImageWrapper;
