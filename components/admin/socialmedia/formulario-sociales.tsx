'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import SocialMediaInterface from "@/interfaces/socialMediaInterface";
import { createSocialMedias } from "@/data/social-media";

export default function SocialMediaForm({ sociales }: { sociales: SocialMediaInterface[] }) {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async data => {
    setLoading(true)
    const mySocialMedias = []
    for (let clave in data) {
      if (data[clave]) {
        mySocialMedias.push({
          name: clave,
          link: data[clave]
        });
      }
      sociales.forEach(function (social) {
        if (social.name === clave && !data[clave]) mySocialMedias.push({ name: clave, link: 'eliminar' });
      });
    }
    const myData = { data: mySocialMedias }
    const res = await createSocialMedias(myData)
    if (res && Object.keys(res).length > 1) {
      setLoading(false)
      router.refresh()
    }

  })

  const redes = { facebook: '', xtwitter: '', instagram: '', linkedin: '', youtube: '', email: '' }

  sociales.forEach((red) => {
    switch (red.name) {
      case 'facebook':
        redes.facebook = red.link
        break;
      case 'xtwitter':
        redes.xtwitter = red.link
        break;
      case 'instagram':
        redes.instagram = red.link
        break;
      case 'linkedin':
        redes.linkedin = red.link
        break;
      case 'youtube':
        redes.youtube = red.link
        break;
      case 'email':
        redes.email = red.link
        break;
      default:
        break;
    }
  })

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-[1fr_4fr] w-2/3 gap-y-6 mx-auto place-items-center">

      <FontAwesomeIcon className="text-secun" icon={faFacebook} size="3x" />
      <input
        type="url"
        defaultValue={redes.facebook}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("facebook", {
          required: false
        })}
      />

      <FontAwesomeIcon className="text-secun" icon={faXTwitter} size="3x" />
      <input
        type="url"
        defaultValue={redes.xtwitter}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("xtwitter", {
          required: false
        })}
      />

      <FontAwesomeIcon className="text-secun" icon={faInstagram} size="3x" />
      <input
        type="url"
        defaultValue={redes.instagram}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("instagram", {
          required: false
        })}
      />

      <FontAwesomeIcon className="text-secun" icon={faLinkedin} size="3x" />
      <input
        type="url"
        defaultValue={redes.linkedin}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("linkedin", {
          required: false
        })}
      />

      <FontAwesomeIcon className="text-secun" icon={faYoutube} size="3x" />
      <input
        type="url"
        defaultValue={redes.youtube}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("youtube", {
          required: false
        })}
      />

      <FontAwesomeIcon className="text-secun" icon={faEnvelope} size="3x" />
      <input
        type="email"
        defaultValue={redes.email}
        className="border border-gray-400 rounded-md p-2 w-full h-full"
        {...register("email", {
          required: false
        })}
      />

      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Actualizando...' : 'Actualizar Redes Sociales'}
        className="bg-blue-800 col-span-2 transition duration-300 delay-150 hover:bg-blue-900 hover:cursor-pointer text-white p-2 font-bold rounded-md mt-6 disabled:bg-blue-800/50"
      />
    </form>
  )
}
