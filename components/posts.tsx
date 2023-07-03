"use client"

import { getPostBySearch, Post } from "@/services/getData"
import Link from "next/link"
import { useState } from "react"
import SearchPanel from "./searchPanel"
import type { Posts } from "../services/getData"

export default function Posts({ posts }: { posts: Posts }) {
    const [postsData, setPostData] = useState(posts)

    const handleChange = async (search: string) => {
        const posts = await getPostBySearch(search)
        setPostData(posts as Posts)
    }
    return (
        <>
            <SearchPanel onChange={handleChange} />
            <ul>
                {postsData.map(e => (
                    <li>
                        <Link href={"/data/" + e.id.toString()}>{e.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
