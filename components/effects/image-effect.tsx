'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageEffect({ 
    url, 
    alternative, 
    from = "translate-x-[-10rem]", 
    to = "translate-x-0",
    isPriority = false
}: { 
    url: string, 
    alternative: string, 
    from?: string, 
    to?: string,
    isPriority?: boolean 
}) {
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
            loading={isPriority ? 'eager' : 'lazy'}
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIi8+PC9zdmc+"
        />
    )
}
