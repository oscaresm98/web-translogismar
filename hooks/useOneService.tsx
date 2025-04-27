import useSWR from "swr";
import ServiceInterface from "@/interfaces/serviceInterface";

export default function useOneService(id: string) {
  const url = `/api/servicios/${id}`;
  const fetcher = () => 
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar el servicio');
        }
        return res.json();
      })
      .catch(err => {
        console.error('Error en la petición:', err);
        return { error: true };
      });
  
  const { data, error, isLoading, mutate } = useSWR<ServiceInterface>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    dedupingInterval: 60000, // Deduplicar solicitudes en un intervalo de 1 minuto
    errorRetryCount: 3,      // Reintentar máximo 3 veces en caso de error
    focusThrottleInterval: 5000, // Limitar revalidaciones cuando la ventana recupera el foco
    loadingTimeout: 3000,    // Esperar 3 segundos antes de considerar una carga lenta
  });

  return {
    service: data,
    isLoading,
    isError: error,
    mutateService: mutate // Exponer la función mutate para actualizar los datos manualmente
  };
}