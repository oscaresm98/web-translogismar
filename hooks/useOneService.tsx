
import useSWR from "swr";
import ServiceInterface from "@/interfaces/serviceInterface";


export default function useOneService(id: string) {
  const url = `/api/servicios/${id}`
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading } = useSWR<ServiceInterface>(url, fetcher, {
    revalidateOnFocus: false,
  })
  return {
    service: data,
    isLoading,
    isError: error
  }
}