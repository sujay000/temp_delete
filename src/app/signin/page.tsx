'use client'

import Link from 'next/link'
import { useState } from 'react'
import signinHandler from '../../handlers/signinHandler'
import { useRouter } from 'next/navigation'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    return (
        <div>
            <div>Email</div>
            <input
                type="text"
                placeholder="email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
            />
            <div>Password</div>
            <input
                type="text"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
            />
            <div>
                <button
                    onClick={async () => {
                        const valid: boolean | undefined = await signinHandler({ email, password })
                        if (valid) router.push(`/dashboard`)
                        else console.log('signin failed')
                    }}
                >
                    Sign In
                </button>
                <div>
                    <Link href={'/signup'}>New? SignUp</Link>
                </div>
            </div>
        </div>
    )
}
