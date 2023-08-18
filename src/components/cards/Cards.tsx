import {FC} from 'react';
import { CardWrapper } from '@/components/cards/CardsStyled';
import RatingComponent from "@/components/rating/Rating";
import CardImageWrapper from "@/components/imageHeader/ImageHeader";
import usePersianNumberConverter from "@/hooks/persianNumber/usePersianNumber";
import ui from "@/ui/ui";

interface RestaurantCardProps {
    title?: string;
    description?:string;
    logoUrl?: string;
    imageUrl?: string;
    deliveryFee: number;
    isZFExpress:boolean;
    eta: number;
    rate:number;
    voteCount: number;
    is_pro: boolean;
    best_coupon: string;
}

const CardComponent: FC<RestaurantCardProps> = (props) => {
    const {
        title,
        description,
        logoUrl,
        imageUrl,
        deliveryFee,
        isZFExpress,
        eta,
        rate,
        voteCount,
        is_pro,
        best_coupon,
    } = props;

    const { convertToPersianNumber } = usePersianNumberConverter();

    return (
        <CardWrapper className="restaurant-card" style={{overflow: 'auto'}}>
            <CardImageWrapper imageUrl={imageUrl} logoUrl={logoUrl} title={title} is_pro={is_pro} best_coupon={best_coupon} />
            <div className="restaurant-card__content">
                <div className="restaurant-card__content__title">
                    <h2 className="restaurant-card__title">{title}</h2>
                    <div className='restaurant-card__content__title'>
                        <span className='restaurant-card__delivery-time-wrapper__delivery-time-container__title'>{`(${convertToPersianNumber(voteCount?.toLocaleString())})`}</span>
                        <RatingComponent rate={convertToPersianNumber(rate?.toString())}  />
                    </div>
                </div>
                <div className="restaurant-card__description-wrapper">
                    <p className="restaurant-card__description-wrapper__description">{description}</p>
                </div>
                <div className="restaurant-card__grouping">
                    <div className='restaurant-card__delivery-time-wrapper'>
                        <div className='restaurant-card__delivery-time-wrapper__delivery-time-container'>
                            <span className='restaurant-card__delivery-time-wrapper__delivery-time-container__title'>{isZFExpress ? ui.expressSending : ui.courierSeller}</span>
                            <span className='restaurant-card__delivery-time-wrapper__delivery-time-container__price'>{deliveryFee === 0 ? ui.free : convertToPersianNumber(deliveryFee?.toLocaleString())}</span>
                            {deliveryFee !== 0 && (
                                <span>{ui.toman}</span>
                            )}
                        </div>
                    </div>
                    {eta && eta > 0 && (
                        <div className='restaurant-card__time-to-send'>
                            <span>{`${ui.until} ${convertToPersianNumber(eta.toString())} ${ui.minutes}`}</span>
                        </div>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
};

export default CardComponent;
