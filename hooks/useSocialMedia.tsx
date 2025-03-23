import useSWR from "swr";
import SocialMediaInterface from "@/interfaces/socialMediaInterface";


export default function useSocialMedia() {
  const url = '/api/sociales'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading } = useSWR<SocialMediaInterface[]>(url, fetcher, {
    revalidateOnFocus: false,
  })
  return {
    sociales: data,
    isLoading,
    isError: error
  }
}
