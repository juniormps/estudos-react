import { useState, useEffect } from "react"
import { db } from "../firebase/firestore"
import { doc, deleteDoc } from "firebase/firestore"


export const useDeleteDocument = (docCollection) => {
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)


    const deleteDocument = async (id) => {
        if (cancelled) return

        setLoading(true)
    
        try {
            const deletedDocument = await deleteDoc(doc(db, docCollection, id))

        } catch (error) {
            console.log(error)
            setError(error.message)

        } finally {
            setLoading(false)

        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])


    return { deleteDocument, loading, error }
}