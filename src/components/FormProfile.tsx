import {Input} from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {SquarePen} from 'lucide-react';
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { Resolver, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "../lib/api";
import { toast } from 'react-hot-toast';
import { useUserInfo } from "@/hooks/useUserInfo";
import { useAuth } from "@/context/contextAuth";

const editFormSchema = z.object({
  name: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string().min(1, { message: "Nome completo é obrigatório." }).optional()
  ),
  email: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string().email({ message: "Email inválido." }).optional()
  ),
  cpf: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string({ message: "CPF inválido!" }).optional()
  ),
  phone: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string().optional()
  ),
  profileImage: z.preprocess(
    (val) => (typeof val === 'string' && val.trim() === '' ? undefined : val),
    z.string().optional()
  ),
});


export type EditFormSchema = z.infer<typeof editFormSchema>
type FormProfileProps = {
    page: string
    hovered: boolean
}


export function FormProfile({page, hovered}: FormProfileProps){
    const [changeTel,setchangeTel] = useState(false)
    const [changeEmail,setchangeEmail] = useState(false) 
    const [changeURL, setChangeURL] = useState(false)
    const [changeName, setChangeName] = useState(false)
    const {data} = useUserInfo()
    const {user} = data ? data : {}
    const contextAuth = useAuth();

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EditFormSchema>({
  resolver: zodResolver(editFormSchema) as Resolver<EditFormSchema>,
})
    const queryClient = useQueryClient()
    async function handleEdit (data: EditFormSchema){ 
        try{const response = await api.patch('/user/edit', data)
            contextAuth.profileImage = response.data.user.profileImage;
            toast.success("Dados atualizados com sucesso!")
            return response.data
        }
        catch(error: unknown){
            if (error instanceof Error) {
                toast.error("Erro! Ocorreu um erro ao editar os dados: " + error.message)
            } else {
                toast.error("Erro! Algo deu errado.")
            }
        }

    }

    const mutation = useMutation ({
        mutationFn: (data:EditFormSchema) => handleEdit(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["user-info"]})
        },
        onError: (error) => {
            toast.error("Erro! Ocorreu um erro ao atualizar os dados.")
            console.error("Error updating user data:", error);
        },
        mutationKey: ["edit-user"],
    })
    

    const onSubmit = async (data: EditFormSchema) => {
    const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => {
            if (typeof value === "string" || typeof value === "number") {
                return value.trim() !== "";
            }
            return value !== undefined && value !== null;
        })
    ) as EditFormSchema;

    try {
        console.log("Campos a enviar:", filteredData);
        await mutation.mutateAsync(filteredData);
    } catch (error) {
        console.error("Error updating user data:", error);

    }
};

   
        return(
            <form onSubmit={(e) => {handleSubmit(onSubmit)(e)}} className={`bg-white text-black ${hovered ? "rounded-tr-3xl rounded-br-3xl" : "rounded-tl-3xl rounded-bl-3xl"} items-center justify-center transition-all duration-300 ease-in-out`}>                               
                                {page === "Perfil" && (
                                <div className="flex flex-col justify-center items-center h-full gap-[20px]">
                                
                                <h2 className="text-[1.5rem] text-[#947306] ">{page? page : ""} 
                                <span className="ml-2 inline-block bg-[#AED59B] w-3 h-3 rounded-tl-xl rounded-br-xl rounded-bl-xl "></span></h2>

                                <Avatar className="w-30 h-30 border-1 border-[#7D7D7D] ">
                                    <AvatarImage src={user?.profileImage} />
                                    <AvatarFallback>Avatar</AvatarFallback>
                                </Avatar>

                                <div className={`flex ${changeURL ? "flex-row" : "flex-col"} items-center justify-between w-80 h-10 m-3 gap-x-[10px] transition-transform duration-300 ease-in-out`}>
                                    <Input type="text" defaultValue={user?.profileImage} {...register(`profileImage`)} placeholder="Coloque uma nova URL para a imagem..." className={`bg-white ${changeURL ? "" : "hidden"} w-120 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0`}/>
                                    <button type="button">
                                            <SquarePen className="cursor-pointer hover:scale-110 transition-transform duration-300" strokeWidth={1.5} size={18} color="#7D7D7D" onClick={()=>setChangeURL(!changeURL)}/>
                                    </button>
                                </div>

                                <div className="flex flex-row items-center justify-between w-80 h-10 m-3 gap-x-[10px]">
                                    <Input type="text" defaultValue={user?.name} {...register(`name`)} disabled={!changeName} className="bg-white text-center shadow-lg w-120 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0"/>  
                                    <button type="button">
                                        <SquarePen className="cursor-pointer hover:scale-110 transition-transform duration-300" strokeWidth={1.5} size={18} color="#7D7D7D" onClick={()=>setChangeName(!changeName)}/>
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-x-[10px] pb-5"> 
                                    
                                <div className="flex flex-col m-3">
                                    <label className="mb-2 w-50">Senha:</label>
                                    <div className="flex flex-col justify-center items-center">
                                        <button type="button" className="text-sm text-[#619766] bg-[#C3F9A9] rounded-2xl w-80 h-10 shadow-md p-2 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">Alterar</button>
                                    </div>
                                </div>

                                <div className="flex flex-col m-3">
                                    <label className="mb-2 w-50">Email:</label>
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                    <div className="flex flex-col justify-center items-center">
                                        <Input type="email" defaultValue={user?.email} {...register(`email`)} disabled = {!changeEmail} className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                        <button type="button" onClick = {() => setchangeEmail(!changeEmail)} className="text-sm text-[#E4BA30] mt-2 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">{changeEmail ? "Salvar" : "Alterar email"}</button>
                                    </div>
                                </div>
                                <div className="flex flex-col m-3">
                                    <label className="mb-2 w-50">Número de telefone:</label>
                                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                                    <div className="flex flex-col justify-center items-center">
                                        <Input type="tel" defaultValue={user?.phone} {...register(`phone`)} disabled={!changeTel} className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                        <button type="button" onClick={() => setchangeTel(!changeTel)} className="text-sm text-[#E4BA30] mt-2 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                                        {changeTel ? "Salvar" : "Alterar número de telefone"}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col m-3">
                                    <label className="mb-2 w-50">CPF:</label>
                                    <Input type="text" defaultValue={user?.cpf} disabled className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                </div>
                                
                            </div>
                            <button disabled={isSubmitting} type= "submit" className="mx-auto w-30 h-12 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] cursor-pointer hover:scale-115 transition-transform duration-300">
                                     Salvar
                                </button>
                        </div>
                    )}
                                      
               </form>
        )
    }