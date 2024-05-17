'use client'

import signinHandler from '@/handlers/signinHandler'
import Link from 'next/link'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import signupHandler from '@/handlers/signupHandler'

export default function Signup() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const router = useRouter()
    return (
        <div>
            <div>Email</div>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <div>Name</div>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
            <div>Password</div>
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div>
                <button
                    onClick={async () => {
                        const valid = await signupHandler({ email, password, name })
                        if (valid) router.push(`/dashboard`)
                        else console.log('singup failed')
                    }}
                >
                    Sign Up
                </button>
                <div>
                    <Link href={'/signin'}>Go to Sign in</Link>
                </div>
            </div>
        </div>
    )
}
