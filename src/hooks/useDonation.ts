import { api } from "@/lib/api";
import {useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export async function getDonation (){
    try{
        const response = await api.get("donation/user/getAll")
        console.log(response.data);
        return response.data;
    }
    catch(error){
        toast.error("Erro ao buscar doações.");
    }
}

export function useDonation() {
    const {data:donations, isFetched, isLoading, isError} = useQuery({
        queryFn: () => (getDonation()),
        queryKey:["donations"],
    })
    return {donations, isFetched, isLoading, isError};
}