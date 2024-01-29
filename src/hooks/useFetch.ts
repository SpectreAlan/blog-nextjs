import {useState, useEffect, useCallback} from 'react';
import {message} from 'antd'
import {decrypt} from "@/utils/common";

interface useFetchProps {
    url: string;
    method: 'GET' | 'POST'
    data?: any;
}

interface useFetchResult<T> {
    response: T | null;
    loading: boolean;
    handleFetch: () => void
}

const useFetch = <T>({url, method, data}: useFetchProps): useFetchResult<T> => {
    const [response, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetch = useCallback(async () => {
        setLoading(true)
        try {
            const fetchConfig: RequestInit = {
                method
            }
            if (method === 'GET') {
                const queryString = new URLSearchParams(data).toString();
                url += `?${queryString}`
            } else {
                fetchConfig.headers = {'Content-Type': 'application/json'}
                fetchConfig.body = JSON.stringify(data)
            }
            const response = await fetch(url, fetchConfig);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result: string = await response.text();
            const {data: res, message: msg, code} = decrypt(result)
            if (code) {
                message.error(msg)
            } else {
                setData(res);
            }
        } catch (error) {
            console.log(error);
            // message.error(error as string)
        } finally {
            setLoading(false);
        }
    }, []);

    return {response, loading, handleFetch};
};

export default useFetch;
