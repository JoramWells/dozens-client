import React, { useState } from 'react'
import infiniteHooks from './infiniteHooks'

export default function Infinite() {
    const[query,setQuery] = useState('')
    const[pageNumber, setPageNumber] = useState('')
    function handleSearch(e){
        setQuery(e)
        setPageNumber(1)

    }
    infiniteHooks(query, pageNumber)
    return (
        <div className="p-4 flex flex-col">
            <input type="text" placeholder="search item" onChange={()=>handleSearch()}/>
            search
        </div>
    )
}
