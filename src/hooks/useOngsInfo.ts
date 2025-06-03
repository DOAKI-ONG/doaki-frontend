import { api } from "@/lib/api";
import { Event } from "@/types/Event";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export async function getOngsInfo(){
    try {
        const response = await api.get(`ongs/users/getAll`)
        return response.data;
    }
    catch(error){
        toast.error("Erro ao buscar Ongs.")
    }
}

export function getOngbyCnpj (cnpj: string | null, queryClient: ReturnType <typeof useQueryClient>) {
    try{
        const events = queryClient.getQueryData<Event[]>(["ongs-info"]);
        if(!events) {
            return null;
        }
        return events.find((event)=> event.cnpj === cnpj);
    }
    catch (error) {
        toast.error("Erro ao buscar Ong pelo CNPJ.")
        return null;
    }
    
}

export function useOngsInfo(cnpj:string | null = null) {
    const queryClient = useQueryClient();
    const {data:ongs, isError, isFetched, isLoading} = useQuery({
        queryFn: () => (getOngsInfo()),
        queryKey: ["ongs-info"],
    });
    const ongByCnpj = getOngbyCnpj(cnpj, queryClient);
    return {ongs, isError, isFetched, isLoading, ongByCnpj};
}

