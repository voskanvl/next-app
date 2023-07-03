import { getUserById } from "@/services/getData"

export default async function User({ params: { id } }: { params: { id: string } }) {
    const {
        name,
        email,
        phone,
        company: { name: companyName },
    } = await getUserById(+id)

    return (
        <>
            <h2>{name}</h2>
            <div>{companyName}</div>
            <div className="contacts">
                <a href={"mailto:" + email}>{email}</a>
                <a href={"tel:" + phone}>{phone}</a>
            </div>
        </>
    )
}
