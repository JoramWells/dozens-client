import React, { useState } from 'react'

export default function TextPasswordInput({}) {
    const [value, setValue]=useState("")
    return (
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />        
    )
}
