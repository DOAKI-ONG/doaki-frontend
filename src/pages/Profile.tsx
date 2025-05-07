import { Header } from "../components/Header"
import { UserRoundPen, HandCoins, LogOut, UserRoundX} from 'lucide-react';
import { useState } from "react"
import {Input} from "@/components/ui/input"
import { useUserInfo } from "@/hooks/useUserInfo";
import { api } from "@/lib/api";
import {useNavigate} from "react-router-dom"
import { toast } from 'react-hot-toast';
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { z } from "zod";

const editFormSchema = z.object({
    email: z.string().email({message: "Email inválido."}).optional(),
    phone: z.string().optional()
})

export type EditFormSchema = z.infer<typeof editFormSchema>

export function Profile() {
    const [page,setPage] = useState("")  
    const [changeTel,setchangeTel] = useState(false)
    const [changeEmail,setchangeEmail] = useState(false) 
    const {data:user, isFetching} = useUserInfo()
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<EditFormSchema>({resolver: zodResolver(editFormSchema)})
    
    async function handleDeleteUser(){

        try{
            await api.patch('/users/delete', user)
            toast.success("Conta deletada com sucesso!");
            navigate('/landing-page');
        }
        catch(error){

             toast.error("Erro! Algo deu errado.")
        }
    }

    async function handleEdit(data: EditFormSchema) {
        try{
        await api.patch('/users/edit', data)
        toast.success("Salvo!")
    }
        catch(error){
            toast.error("Erro! Algo deu errado.")
        }
    }

    return(
        <div>
            <Header/>
                <div className="flex flex-col w-screen h-screen items-center justify-center bg-white text-black overflow-auto">
                    <div className="grid grid-cols-[120px_auto] w-screen h-screen bg-white text-black">
                        <div className="flex flex-col items-center bg-white space-y-20 border-r-1">
                            <button className="mt-30 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer mt-10" title="Perfil" onClick={()=> setPage("Perfil")}><UserRoundPen strokeWidth={1.5}/></button>
                            <button className="hover:opacity-80 transition duration-150 ease-in-out cursor-pointer" title="Doações" onClick={()=> setPage("Doações")}><HandCoins strokeWidth={1.5}/></button>
                            <button onClick={()=>handleDeleteUser()} className="hover:opacity-80 transition duration-150 ease-in-out cursor-pointer" title="Excluir conta"><UserRoundX strokeWidth={1.5} /></button>
                            <button className="mt-auto mb-10 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer" title="Sair da conta">< LogOut strokeWidth={1.5}/> 
                            </button>
                            
                        </div>

                        <form onSubmit={handleSubmit(handleEdit)} className="flex flex-col justify-center items-center bg-white text-black mt-20 mb-5">
                            <div className="flex flex-col">
                                <h2 className="relative top-[43px] left-[20px] flex self-start bg-white border-3 border-[#E4BA30] p-5 w-65 h-10 justify-center items-center rounded-tr-xl">{page? page : "Selecione algo..."} <span className="ml-5 bg-[#AED59B] w-3 h-3 rounded-tl-xl rounded-br-xl rounded-bl-xl "></span></h2>
                                <div className="bg-white w-300 h-150 rounded-tr-xl rounded-br-xl border-3 border-[#E4BA30] shadow-md mt-10 ml-5 pr-10 bg-white"> {page === "Perfil" && (
                                <div className="flex flex-col justify-center items-center h-full gap-[20px]">
                                
                                <div className="flex flex-row m-3 space-x-50">
                                    <label className="mb-2 self-start w-50">Nome:</label>
                                    <Input type="text" defaultValue={user?.name} disabled className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                </div>
                                <div className="flex flex-row m-3 space-x-50">
                                    <label className="mb-2 self-start w-50">Email:</label>
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                    <div className="flex flex-col justify-center items-center">
                                        <Input type="email" defaultValue={user?.email} {...register(`email`)} disabled = {!changeEmail} className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                        <button type="button" onClick = {() => setchangeEmail(!changeEmail)} className="text-sm text-[#E4BA30] mt-2 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">{changeEmail ? "Salvar" : "Alterar email"}</button>
                                    </div>
                                </div>
                                <div className="flex flex-row m-3 space-x-50">
                                    <label className="mb-2 self-start w-50">Número de telefone:</label>
                                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                                    <div className="flex flex-col justify-center items-center">
                                        <Input type="tel" defaultValue={user?.phone} {...register(`phone`)} disabled={!changeTel} className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                        <button type="button" onClick={() => setchangeTel(!changeTel)} className="text-sm text-[#E4BA30] mt-2 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                                        {changeTel ? "Salvar" : "Alterar número de telefone"}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-row m-3 space-x-50">
                                    <label className="mb-2 self-start w-50">CPF:</label>
                                    <Input type="text" defaultValue={user?.cpf} disabled className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                                </div>
                                <button disabled={isSubmitting} onClick={()=>handleEdit} type= "submit" className="mx-auto w-30 h-12 mt-10 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] hover:opacity-80 transition duration-150 ease-in-out cursor-pointer animate-jump animate-once animate-duration-1000 animate-delay-1800">
                                     Salvar
                                </button>
                            </div>
                          )}
                     </div>
                   </div>
                            
        
               </form>
         </div>
    </div>
</div>
)
}
