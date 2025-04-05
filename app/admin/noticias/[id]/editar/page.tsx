import { redirect } from "next/navigation";
import FormularioNoticioEditar from "@/components/admin/news/formulario-noticia";
import NewsInterface from "@/interfaces/newsInterface";

async function getDataNews(id: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/noticias/${id}`, {
      method: "GET",
      next: { tags: ['dataNew'] }
    });
    if (!res.ok) {
      throw new Error('No se pudo cargar la data');
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    return { error: { message: error?.message } };
  }
}

export default async function EditarNoticia({ params }: { params: { id: string } }) {
  const noticia = await getDataNews(params.id) as NewsInterface;

  if ('error' in noticia) {
    redirect('/admin/noticias');
  }
  return (
    <div className="container">
      <h1 className="font-black text-4xl text-[#0230E6]">Editar Noticia</h1>
      <p className="mt-3">A continuación podrás modificar los datos de una noticia</p>
      <FormularioNoticioEditar noticia={noticia} />
    </div>
  );
}
