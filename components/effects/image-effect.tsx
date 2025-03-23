'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageEffect({ url, alternative, from = "translate-x-[-10rem]", to = "translate-x-0" }: { url: string, alternative: string, from?: string, to?: string }) {
    const [ready, setReady] = useState(false)
    useEffect(() => {
        if (!ready) { setReady(true) }
    }, [])
    return (
        <Image
            className={`transition-all duration-500 delay-50 ${ready ? `${to} opacity-100` : `${from} opacity-0`} `}
            src={url}
            alt={alternative}
            width={1000}
            height={1000}
            loading='lazy'
        />

    )
}
