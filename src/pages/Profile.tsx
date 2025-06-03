import { Header } from "../components/Header"
import { UserRoundPen, HandCoins, LogOut, UserRoundX} from 'lucide-react';
import { useState } from "react"
import { api } from "@/lib/api";
import {useNavigate} from "react-router-dom"
import { toast } from 'react-hot-toast';
import Cookies from "js-cookie";
import { FormProfile } from "../components/FormProfile";

export function Profile() {
    const [page,setPage] = useState("Perfil")  
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    async function handleDeleteUser(){

        try{
            await api.patch('/users/delete')
            toast.success("Conta deletada com sucesso!");
            navigate('/home');
        }
        catch(error){

             toast.error("Erro! Algo deu errado.")
        }
    }

    async function handleLogout() {
        Cookies.remove("token")
        const hasToken = Cookies.get('token')
        toast.success("Você saiu da conta com sucesso!")
    if (!hasToken) {
        navigate('/sign-in')
    }
        
    }
    

    return(
        <>
            <Header className="flex flex-row w-screen h-20 top-0 border-b-1 space-x-200 bg-white" navigation = {false}/>
                <section className={`grid transition-all duration-300 bg-[#FFFAA4] ease-in-out w-screen h-screen text-black ${hovered ? "grid-cols-[15%_85%] " : "grid-cols-[8%_92%] "} `}>
                        <aside onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className={`flex flex-col items-center justify-center bg-[#FFFAA4] space-y-5 transition-all duration-300 ease-in-out`}>
                            
                            <button className="flex flex-row gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer mt-10" title="Perfil" onClick={()=> setPage("Perfil")}><UserRoundPen strokeWidth={1.5} color="#947306"/>
                            {hovered ? <p className="text-[#947306] text-[1rem]">Perfil</p> : ""}</button>
                            <span className="w-50 bg-[#FFE180] h-[0.5px]"></span>

                            <button className="flex flex-row gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer" title="Doações" onClick={()=> setPage("Doações")}><HandCoins strokeWidth={1.5} color="#947306"/>
                            {hovered ? <p className="text-[#947306] text-[1rem]">Doações</p> : ""}</button>
                            <span className="w-50 bg-[#FFE180] h-[0.5px]"></span>

                            <button onClick={()=>handleDeleteUser()} className="flex flex-row gap-2 hover:scale-110 transition-transform duration-300 cursor-pointer" title="Excluir conta"><UserRoundX strokeWidth={1.5} color="#947306" />
                            {hovered ? <p className="text-[#947306] text-[1rem]">Deletar conta</p> : ""}</button>
                            <span className="w-50 bg-[#FFE180] h-[0.5px]"></span>

                            <button onClick={()=>handleLogout()} className="flex flex-row gap-2 mt-auto mb-10 hover:scale-110 transition-transform duration-300 cursor-pointer" title="Sair da conta">< LogOut strokeWidth={1.5} color="#947306"/>
                            {hovered ? <p className="text-[#947306] text-[1rem]">Sair da conta</p> : ""}</button>
                                     
                        </aside>

                        <div>
                            {page === "Perfil" && <FormProfile page = {page} hovered = {hovered}/>}
                            {page === "Doações" &&
                                <main className={`bg-white text-black ${hovered ? "rounded-tr-3xl rounded-br-3xl" : "rounded-tl-3xl rounded-bl-3xl"} items-center justify-center transition-all duration-300 ease-in-out`}>
                                    <div className="flex items-center justify-center h-full">
                                        <h2 className="text-[1.5rem] text-[#947306] ">{page? page : ""}<span className="ml-2 inline-block bg-[#de9e5a] w-3 h-3 rounded-tl-xl rounded-br-xl rounded-bl-xl "></span></h2>
                                    </div>
                                    <h2>Histórico de doações</h2>
                                </main>
                                }
                                </div>
                        
    </section>
</>
)
}
