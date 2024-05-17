import prisma from '@/db'

export default async function signupHandler({
    email,
    password,
    name,
}: {
    email: string
    password: string
    name: string
}) {
    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    })
    if (user) {
        return false
    }

    const response = await prisma.user.create({
        data: {
            email,
            password,
            name,
        },
    })
    console.log(response)
    return true
}
