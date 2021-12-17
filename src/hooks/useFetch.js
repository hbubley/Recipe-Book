import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState();

    const fetchData = useCallback(async () => {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
    }, [url])
    useEffect(() => {
        fetchData();
    }, [fetchData])

    return [data]
}

export default useFetch;