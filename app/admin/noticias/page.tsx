import Noticia from "@/components/admin/news/noticia";
import NewsInterface from "@/interfaces/newsInterface";
import Link from "next/link";
import { getDataNews } from '@/data/noticias';

export default async function NoticiasPage() {
  const news = await getDataNews() as NewsInterface[];

  return (
    <div className="container p-2">
      <h1 className="font-bold text-4xl text-[#0230E6] block">Noticias</h1>
      <div className="flex justify-between">
        <p className="mt-3">Administra tus noticias</p>
        <Link
          href="/admin/noticias/nuevo"
          className="bg-[#0230E6] max-w-40 text-center text-white font-semibold transition duration-300 p-2 hover:bg-blue-800"
        >
          Nueva noticia
        </Link>
      </div>
      {news?.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Título</th>
              <th className="p-2">Slug</th>
              <th className="p-2">Contenido</th>
              <th className="p-2">Imagen</th>
              <th className="p-2 w-40">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {news.map(noticia => (
              <Noticia
                key={noticia.id}
                noticia={noticia}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay noticias aún</p>
      )}
    </div>
  );
}
