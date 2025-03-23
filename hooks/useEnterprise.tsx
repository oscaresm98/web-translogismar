
import useSWR from "swr";
import EnterpriseInterface from "@/interfaces/enterpriseInterface";


export default function useEnterprise() {
  const url = '/api/nosotros'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading } = useSWR<EnterpriseInterface[]>(url, fetcher, {
    revalidateOnFocus: false,
  })
  return {
    enterprise: data,
    isLoading,
    isError: error
  }
}
