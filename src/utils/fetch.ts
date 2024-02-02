import {decrypt} from "@/utils/common";
import {message} from 'antd'

async function httpRequest<T>({url, method = 'GET', data, options = {}}: Common.UseFetchProps): Promise<T | null> {
    try {
        const fetchConfig: RequestInit = {
            method,
            ...options
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
            message.error(response.statusText)
            return null
        }
        const result: string = await response.text();
        const {data:res, code, message:msg} = decrypt(result)
        if(code){
            message.error(msg)
            return null
        }
        if(msg !== 'success'){
            message.success(msg)
        }
        return res

    } catch (error: any) {
        console.log(error);
        // message?.error(error.message || 'Service exception')
        return null
    }
}

export default httpRequest;
