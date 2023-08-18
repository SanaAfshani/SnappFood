import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

export interface QueryParams {
    page: number;
    page_size: number;
    lat: number;
    long: number;
}


export type HydrateAction = {
    type: typeof HYDRATE;
    payload: any; // Replace 'any' with the actual type of your hydrated state
} & AnyAction;