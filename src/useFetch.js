import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch blogs')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPanding(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsPanding(false)
                        setError(err.message)
                    }
                })
        }, 1000)

        return () => abortCont.abort()
    }, [url])

    console.log('In fetch')
    console.log(data)


    return { data, isPanding, error }
}

export default useFetch