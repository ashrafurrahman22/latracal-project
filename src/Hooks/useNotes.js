import { useEffect, useState } from "react"

const useNotes =() =>{

    const [notes, setNotes] = useState([]);
    
    useEffect(()=>{
        fetch('https://secret-plains-16747.herokuapp.com/parking')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [notes])

    return [notes, setNotes];

}

export default useNotes;