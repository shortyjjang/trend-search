import { useRouter } from "next/router"
import { useState } from "react"

export default function Search() {
    const router = useRouter()
    const [value, setValue] = useState('')
    const onChange = (value: string) => {
        router.push(`/${value}`)
    }
    return (
        <div className="flex gap-1 justify-between">
            <input type="text" 
                value={value}
                className="border border-solid border-gray-100 rounded-sm h-8 p-2 text-sm"
                onKeyDown={(e) => {
                    if(e.key === 'Enter') onChange(value)
                }}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <button onClick={() => onChange(value)}></button>
        </div>
    )
}
