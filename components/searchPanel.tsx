"use client"

import { getPostBySearch } from "@/services/getData"
import { FormEventHandler, useState } from "react"
import useSWR from "swr"

export default function SearchPanel({ onChange }: { onChange: (search: string) => void }) {
    const [search, setSearch] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()
        // const posts = await getPostBySearch(search)
        onChange(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                name="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <button type="submit">SEARCH</button>
        </form>
    )
}
