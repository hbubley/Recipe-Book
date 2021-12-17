import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        setIsPending(true);

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const json = await res.json();
            setData(json)
            setIsPending(false);
            setError(null)
        } catch (error) {
            setError("Could not fetch the data")
            console.error(error);
            setIsPending(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return [data, isPending, error]
}

export default useFetch;