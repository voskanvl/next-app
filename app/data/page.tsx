import Posts from "@/components/posts"
import { getAllPosts } from "@/services/getData"
import type { Posts as PostsType } from "@/services/getData"

export default async function Data() {
    // const { data, isLoading } = useSWR("posts", getAllPosts)
    const data = await getAllPosts()
    return (
        <>
            <h2>DATA</h2>
            <Posts posts={data as PostsType} />
        </>
    )
}
