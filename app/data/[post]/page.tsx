import { getPostById, getUserById } from "@/services/getData"
import Link from "next/link"

export default async function Post({ params }: { params: { post: string } }) {
    const { title, body, userId } = await getPostById(+params.post)
    const { name } = await getUserById(+userId)
    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
            <sub>
                <Link href={"/user/" + userId}>{name}</Link>
            </sub>
        </>
    )
}
