import {AxiosResponse} from "axios";
import axios from "../api/api";
import {QueryParams} from "@/types/staticTypes";

const apiUrl = 'mobile/v3/';

export const getVendorsList = (params: QueryParams): Promise<{ results: any; statusCode: number }> =>
    axios.get(apiUrl + `restaurant/vendors-list`, {params})
        .then((res: AxiosResponse) => ({results: res.data.data.finalResult, statusCode: res.status}))
        .catch((e: any) => ({...e, statusCode: e.status}));
