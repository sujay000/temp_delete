'use client'

import Users from '@/components/Users'
import { useState } from 'react'

export default function Dashboard() {
    const [nameFilter, setNameFilter] = useState<string>('')
    return (
        <div>
            hello from Dashboard
            <div>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setNameFilter(e.target.value)}
                    value={nameFilter}
                />
                <Users name={nameFilter} />
            </div>
        </div>
    )
}
