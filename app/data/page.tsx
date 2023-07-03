import Posts from "@/components/posts"
import { getAllPosts } from "@/services/getData"

export default async function Data() {
    const data = await getAllPosts()
    return (
        <>
            <h2>DATA</h2>
            <Posts posts={data} />
        </>
    )
}
