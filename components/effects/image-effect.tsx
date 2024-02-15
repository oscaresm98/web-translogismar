'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageEffect({ url, alternative, from = "translate-x-[-10rem]", to = "translate-x-0" }: { url: StaticImageData, alternative: string, from?: string, to?: string }) {
    const [ready, setReady] = useState(false)
    useEffect(() => {
        if (!ready) { setReady(true) }
    }, [])
    return (
        <Image
            className={`transition-all duration-500 delay-50 ${ready ? `${to} opacity-100` : `${from} opacity-0`} `}
            src={url}
            alt={alternative}
            loading='lazy'
        />

    )
}
