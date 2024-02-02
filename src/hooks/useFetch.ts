import {useState,useCallback} from 'react';
import {message} from 'antd'
import httpRequest from "@/utils/fetch";


const useFetch = <T>(props: Common.UseFetchProps): Common.UseFetchResult<T> => {
    const [response, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetch = useCallback(async (params?:any) => {
        setLoading(true)
        if(params){
            props.data = params
        }
        const res:any = await httpRequest(props)
        const {data, message: msg, code} = res
        if (code) {
            message.error(msg)
        } else {
            setData(data);
        }
        setLoading(false)
    }, []);

    return {response, loading, handleFetch};
};

export default useFetch;
