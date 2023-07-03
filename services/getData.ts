export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type User = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export async function getAllPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 60 },
    })
    res = await res.json()
    return res as Response & Post[]
}
export async function getPostById(id: number) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    })
    res = await res.json()
    return res as Response & Post
}
export async function getAllUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 60 },
    })
    res = await res.json()
    return res as Response & User[]
}
export async function getUserById(id: number) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 60 },
    })
    res = await res.json()
    return res as Response & User
}
