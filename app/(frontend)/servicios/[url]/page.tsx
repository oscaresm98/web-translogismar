import Service from "@/components/servicios/service"

export const metadata = {
    title: 'Servicio',
}


export default async function Servicio({ params }: { params: { url: string } }) {
    return (
        <main className="max-w-6xl mx-auto my-12 grid md:grid-cols-2 gap-4 items-center p-4 md:p-0">
            <Service serviceSlug={params.url} />
        </main>
    )
}
