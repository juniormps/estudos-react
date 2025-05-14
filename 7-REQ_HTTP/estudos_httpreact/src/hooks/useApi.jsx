import { useState, useEffect } from "react"

//4 - Custom Hook
export const useApi = (baseUrl) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
      
    const request = async (method, endpoint = "", body = null) => {
        
        setLoading(true)
        setError(null)

        try {
            const url = endpoint ? `${baseUrl}/${endpoint}` : baseUrl
            const options = {
                method,
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : null,
            }
        
            const res = await fetch(url, options)
            if (!res.ok) throw new Error(`Erro: ${res.status}`)
        
            const json = await res.json();
            
            if (method === "GET") {
                setData(json)
            } else if (method === "POST") {
                setData(prev => [...prev, json]) // Adiciona novo item
            } else if (method === "DELETE") {
                setData(prev => prev.filter(item => item.id !== endpoint)) // Remove item
            } else if (method === "PUT" || method === "PATCH") {
                setData(prev => prev.map(item => item.id === endpoint ? { ...item, ...json } : item))
            }
            
            return json
    
        } catch (error) {
            setError(error.message)
            throw error

        } finally {
            setLoading(false)

        }
    }


    // Carrega dados iniciais
    useEffect(() => {
        request("GET")
    }, [baseUrl])
    
    
    // Métodos nomeados (opcional)
    const get = () => request("GET")
    const post = (body) => request("POST", "", body)
    const put = (id, body) => request("PUT", id, body)
    const patch = (id, body) => request("PATCH", id, body)
    const del = (id) => request("DELETE", id)
    
    return { data, loading, error, get, post, put, patch, del }
      
}


//Dúvidas:
//isto é uma API?
//isto é CRUD?
//Patch