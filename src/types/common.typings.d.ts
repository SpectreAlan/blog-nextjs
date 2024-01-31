declare namespace Common {
    interface UseFetchProps {
        url: string;
        method?: 'GET' | 'POST'
        data?: any;
    }

    interface UseFetchResult<T> {
        response: T;
        loading: boolean;
        handleFetch: () => void
    }
    interface IProps {
        searchParams: { [key: string]: string }
    }
}
