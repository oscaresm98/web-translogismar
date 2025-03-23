
import useSWR from "swr";
import ServiceInterface from "@/interfaces/serviceInterface";


export default function useService() {
  const url = '/api/servicios'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading } = useSWR<ServiceInterface[]>(url, fetcher, {
    revalidateOnFocus: false,
  })
  return {
    services: data,
    isLoading,
    isError: error
  }
}
