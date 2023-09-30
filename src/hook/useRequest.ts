import axios, { AxiosRequestConfig } from 'axios';

const useRequest = async <T>(config?: AxiosRequestConfig): Promise<T> => {
    const { url, method, data } = config;
    try {
        const fetchData = await axios.request<T>({ url, method, data });
        return fetchData.data;
    } catch (error) {
        return error;
    }
};

export default useRequest;
