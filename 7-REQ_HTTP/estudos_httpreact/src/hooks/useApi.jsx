import { useState, useEffect } from "react"

//4 - Custom Hook
export const useApi = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //Loading
    const [loading, setLoading] = useState(false)

    //Tratando erros
    const [error, setError] = useState(null)

    //Delete
    const [itemId, setItemId] = useState(null)


    //------------------------------------------------------------------------------
    //Configurações da requisição
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)

        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            })

            setMethod(method)
            setItemId(data)

        }
    }

    //------------------------------------------------------------------------------
    //GET
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)  //inicia o loading
            setError(null)  //Reseta o erro antes de nova requisição

            try {

                const res = await fetch(url)

                if (!res.ok) throw new Error("Erro ao carregar os dados")

                const json = await res.json()
                setData(json)

            } catch (error) {
                console.error(error.message)

                setError(
                    error.message.includes("Failed to fetch") ? "Falha na conexão com o servidor" : `Erro ao carregar os dados: ${error.message}`
                )

            } finally {
                setLoading(false) //finaliza o loading
            }

        }
    
        fetchData()
        
    }, [url, callFetch])


    //------------------------------------------------------------------------------
    //POST e DELETE
    useEffect(() => {

        const httpRequest = async () => {

            setLoading(true) 
            setError(null)

            try {

                if (method === "POST") {

                    const res = await fetch(url, config)
    
                    if (!res.ok) throw new Error("Erro ao criar produto")
    
                    const json = await res.json()
                    setCallFetch(json)
        
    
                } else if (method === "DELETE") {

                    const deleteURL = `${url}/${itemId}`
                    const res = await fetch(deleteURL, config)
    
                    if (!res.ok) throw new Error("Erro ao deletar produto")
    
                    const json = await res.json()
                    setCallFetch(json)
                    
                }

            } catch (error) {
                console.error(error.message)

                setError(
                    error.message.includes("Failed to fetch") ? `Erro de conexão: ${error.message}` : error.message
                )

            } finally {
                setLoading(false)
            }

        }

        httpRequest()

    }, [config, method, url, itemId])
    
    //------------------------------------------------------------------------------
    

    return { data, httpConfig, loading, error }
      
}
