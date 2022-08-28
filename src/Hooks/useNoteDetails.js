import { useEffect, useState } from "react"

const useNoteDetails = notesId =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `https://secret-plains-16747.herokuapp.com/parking/${notesId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [notesId, data])
}

export default useNoteDetails;