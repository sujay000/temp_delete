import getUsersByNameHandler from '@/handlers/getUsersByNameHandler'

export default async function Users({ name }: { name: string }) {
    const users = await getUsersByNameHandler(name)
    return <div>{users.map((user) => JSON.stringify(user))}</div>
}
