import axios, { AxiosRequestConfig, AxiosError } from 'axios';

interface UseRequestResult<T> {
    data: T | null;
    error: AxiosError | null;
}

const useRequest = async <T>(
    config?: AxiosRequestConfig,
): Promise<UseRequestResult<T>> => {
    const { url, method, data } = config;
    try {
        const fetchData = await axios.request<T>({ url, method, data });
        return { data: fetchData.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

export default useRequest;
