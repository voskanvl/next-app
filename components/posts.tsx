"use client"

import { Post } from "@/services/getData"
import Link from "next/link"

type Posts = {
    posts: Post[]
}

export default function Posts({ posts }: Posts) {
    return (
        <ul>
            {posts.map(e => (
                <li>
                    <Link href={"/data/" + e.id.toString()}>{e.title}</Link>
                </li>
            ))}
        </ul>
    )
}
