declare namespace Common {
    interface UseFetchProps {
        url: string;
        method?: 'GET' | 'POST'
        data?: any;
    }

    interface UseFetchResult<T> {
        response: T | null;
        loading: boolean;
        handleFetch: () => void
    }
    interface FetchResult<T> {
        data: T;
        message?: string;
        code: number;
    }
}
