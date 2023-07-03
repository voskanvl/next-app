export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export type Posts = Post[]

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

export type Users = User[]

export async function getAllPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    res = await res.json()
    return res as Response & Posts
}
export async function getPostById(id: number) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    res = await res.json()
    return res as Response & Post
}

export async function getPostBySearch(search: string) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
    res = await res.json()
    return res as Response & Posts
}

export async function getAllUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    res = await res.json()
    return res as Response & Users
}
export async function getUserById(id: number) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    res = await res.json()
    return res as Response & User
}
