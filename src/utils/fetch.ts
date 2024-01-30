import {decrypt} from "@/utils/common";

async function httpRequest<T>({url, method = 'GET', data}: Common.UseFetchProps): Promise<Common.FetchResult<T>> {
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
            return {
                data: null,
                message: response.statusText,
                code: response.status
            }
        }
        const result: string = await response.text();
        return decrypt(result)
    } catch (error: any) {
        return {message: error.message, code: error?.response?.status || 400, data: null};
    }
}

export default httpRequest;
