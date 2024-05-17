'use server'

import prisma from '@/db'

export default async function signinHandler({ email, password }: { email: string; password: string }) {
    const user = await prisma.user.findFirst({
        where: {
            email,
            password,
        },
    })
    if (user) {
        return true
    }

    return false
}
