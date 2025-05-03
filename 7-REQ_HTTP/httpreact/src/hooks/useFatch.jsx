import { useState, useEffect } from "react"

//4 - Custom Hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {

            try {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)

            } catch (error) {
            console.error(`Erro ao buscar dados: ${error}`)
            }

        }
    
        fetchData()
        
    }, [url])

    return {data}
      
}
