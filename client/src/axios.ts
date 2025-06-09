import {QueryClient} from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "./environments";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false },
    }
})

export const apiClient = axios.create({
    baseURL: `${SERVER_URL}`,
})

