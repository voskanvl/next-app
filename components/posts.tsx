"use client"

import { getPostBySearch, Post } from "@/services/getData"
import Link from "next/link"
import { useState } from "react"
import SearchPanel from "./searchPanel"
import type { Posts } from "../services/getData"

import styled from "styled-components"

const List = styled.ul`
    padding: 1rem;
    list-style: none;
    column-count: auto;
    column-width: max(320px, 30vw);
    column-gap: 1rem;
`
const Li = styled.li`
    font-weight: 400;
    transition: font-weight 0.5s;
    padding-block: 4px;
    &:hover {
        font-weight: 800;
    }
`

export default function Posts({ posts }: { posts: Posts }) {
    const [postsData, setPostData] = useState(posts)

    const handleChange = async (search: string) => {
        const posts = await getPostBySearch(search)
        setPostData(posts as Posts)
    }
    return (
        <>
            <SearchPanel onChange={handleChange} />
            <List>
                {postsData.map(e => (
                    <Li key={e.id}>
                        <Link href={"/data/" + e.id.toString()}>{e.title}</Link>
                    </Li>
                ))}
            </List>
        </>
    )
}
