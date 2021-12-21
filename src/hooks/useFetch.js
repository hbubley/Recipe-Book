import { useState, useEffect, useCallback } from 'react'

const useFetch = (url, method = "GET") => {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null);
    
    const fetchData = useCallback(async (fetchOptions) => {
        setIsPending(true);

        try {
            const res = await fetch(url, { ...fetchOptions });
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            const json = await res.json();
            setData(json)
            setIsPending(false);
            setError(null);
        } catch (error) {
            setError("Could not fetch the data")
            console.error(error);
            setIsPending(false);
        }
    }, [url]);

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(() => {
        if (method === "GET") {
            fetchData();
        } else if (method === "POST" && options) {
            fetchData(options)
        }
    }, [fetchData, method, options])

    return [data, isPending, error, postData]
}

export default useFetch;