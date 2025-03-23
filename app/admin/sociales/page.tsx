import SocialMediaInterface from "@/interfaces/socialMediaInterface"
import SocialMediaForm from "@/components/admin/socialmedia/formulario-sociales"
import { getSocialMediasAdmin } from "@/data/social-media"


export default async function SocialesAdminPage() {
  const sociales = await getSocialMediasAdmin() as SocialMediaInterface[]
  
  return (
    <div className='container p-2'>
      <h1 className="font-bold text-4xl text-[#0230E6] block">Redes Sociales</h1>
      <p className="my-3">Administra las redes sociales de la empresa</p>
      <SocialMediaForm sociales={sociales} />
    </div>
  )
}
