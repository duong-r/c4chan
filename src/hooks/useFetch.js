import { useEffect, useState } from 'react'

const useFetch = (url) => {
  // Stores data that has been fetched from the  db
  const [data, setData] = useState(null)

  // While data is being fetched from db, flagged true.
  // Used to display loading message to user.
  const [isPending, setIsPending] = useState(true)

  // Contains any caught errors to be displayed to user
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        // If response was unsuccessful, throw error.
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false)
          setError(err.message)
        }
      })

    return () => abortCont.abort
  }, [url])

  return { data, isPending, error }
}

export default useFetch
