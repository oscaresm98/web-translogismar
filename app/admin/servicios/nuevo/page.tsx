import FormularioNuevo from "@/components/admin/servicios/formulario-nuevo"


export default function NuevoServicio() {
    return (
        <div className="container p-2">
            <h1 className="font-black text-4xl text-[#0230E6] ">Nuevo Servicio</h1>
            <p className="mt-3">A continuación podrás crear un nuevo servicio</p>
            <FormularioNuevo />
        </div>
    )
}
