import prisma from '@/db'

export default async function getUsersByNameHandler(name: string) {
    const users = await prisma.user.findMany({
        where: {
            name,
        },
    })
    return users
}
