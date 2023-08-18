import React, { MutableRefObject, useEffect } from "react";

type InfinityScrollType<T extends HTMLElement> = (
    ref: MutableRefObject<T | null>,
    fetcher: () => void,
    option?: IntersectionObserverInit
) => void;

export const useInfinityScroll: InfinityScrollType<HTMLElement> = (
    ref,
    fetcher,
    option
) => {
    useEffect(() => {
        const observeValue = ref.current;
        const observe = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetcher();
            }
        }, {
            threshold: 0,
            ...option,
        });

        if (observeValue) {
            observe.observe(observeValue);
        }

        return () => {
            if (observeValue) {
                observe.unobserve(observeValue);
            }
        };
    }, [ref,ref.current,fetcher]);
};



