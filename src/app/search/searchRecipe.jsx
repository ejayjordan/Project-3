import React, {useState} from "react";
import "./searchBar.css";
import { fetchRecipies } from '@/app/lib/data';

export default async function SearchBar() {
    const [input, setInput] = useState("")

    const fetchData = await fetchRecipies().then((response) => response.json()).then(json => {})


    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return(
        <div className="input">
            <input placeholder="Type to search for recipe names or tags..." value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
    )
}