import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {HydrateAction} from "@/types/staticTypes";

const initialState = {
    vendorsList: [],
} as any;

const vendorsSlice = createSlice({
    name: "vendors",
    initialState,
    reducers: {
        setVendorsList: (state, action: PayloadAction<any>) => {
            state.vendorsList.push(...action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action:HydrateAction) => {
            return {
                ...state,
                ...action.payload.vendors,
            };
        });
    },
});

export const { setVendorsList } = vendorsSlice.actions;
export default vendorsSlice.reducer;
