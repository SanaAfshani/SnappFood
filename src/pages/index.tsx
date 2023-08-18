import styles from "@/styles/Home.module.css";
import {FC, useMemo, useRef, useState} from "react";
import {useInfinityScroll} from "@/hooks/scroll/useInfinityScroll";
import {getVendorsList} from "@/utils/services/vendors-list";
import {QueryParams} from "@/types/staticTypes";
import CardComponent from "@/components/cards/Cards";
import {setVendorsList} from "@/store/reducers/vendorsSlice";
import {RootState, wrapper} from "@/store/store";
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from '@/store/hooks'

const Home: FC = () => {
    const dispatch = useAppDispatch();
    const vendorsData = useAppSelector(
        (state) => state.vendors.vendorsList
    );
    const ref = useRef<HTMLDivElement | null>(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const queryParams: QueryParams = useMemo(
        () => ({
            page,
            page_size: 10,
            lat: 35.754,
            long: 51.328,
        }),
        [page]
    );

    useInfinityScroll(ref, () => {
        if (!loading) {
            setLoading(true);
            getVendorsList(queryParams)
                .then((res: any) => {
                    dispatch(setVendorsList(res.results));
                    setPage((prevPage) => prevPage + 1);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    });

    return (
        <div className={styles.container}>
            {vendorsData?.map((vendor: any, index: any) => {
                if (index === vendorsData.length - 1) {
                    return <div ref={ref} key={index}></div>;
                }
                return (
                    <CardComponent
                        key={index}
                        title={vendor.data.title}
                        imageUrl={vendor.data.backgroundImage}
                        description={vendor.data.description}
                        logoUrl={vendor.data.defLogo}
                        deliveryFee={vendor.data.deliveryFee}
                        isZFExpress={vendor.data.isZFExpress}
                        eta={vendor.data.eta}
                        rate={vendor.data.rate}
                        voteCount={vendor.data.voteCount}
                        is_pro={vendor.data.is_pro}
                        best_coupon={vendor.data.best_coupon}
                    />
                );
            })}
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        const queryParams: QueryParams = {
            page: 0,
            page_size: 10,
            lat: 35.754,
            long: 51.328,
        };

        const initialVendors = await getVendorsList(queryParams);
        initialVendors.results.shift()
        await store.dispatch(setVendorsList(initialVendors.results));

        return {
            props: {},
        };
    }
);

export default Home;

