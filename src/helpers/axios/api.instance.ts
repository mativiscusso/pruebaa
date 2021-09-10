import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

interface IFetchAPI {
    url: string;
    body?: object;
    method: Method;
}

const config: AxiosRequestConfig = {
    withCredentials: false,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const instance: any = axios.create(config);

export const fetchAPI = async ({
    method,
    url,
    body,
}: IFetchAPI): Promise<AxiosResponse> => instance[method](url, body);
