import { Header } from "../components/Header"
import { UserRoundPen, HandCoins, LogOut, UserRoundX} from 'lucide-react';
import { useState, useEffect } from "react"
import { api } from "@/lib/api";
import {useNavigate} from "react-router-dom"
import { toast } from 'react-hot-toast';
import { FormProfile } from "../components/FormProfile";
import { useAuth } from "@/context/contextAuth";
import { useDonation } from "@/hooks/useDonation";

export function Profile() {
    const [page,setPage] = useState("Perfil")  
    const [hovered, setHovered] = useState(false);
    const contextAuth = useAuth();
    const navigate = useNavigate();
    const {donations, isError, isFetched, isLoading} = useDonation();
    
    async function handleDeleteUser(){

        try{
            await api.delete('/user/delete')
            toast.success("Conta deletada com sucesso!");
            contextAuth.logout();
            navigate('/');
            
        }
        catch(error){
            console.error(error);
             toast.error("Erro! Algo deu errado.")
        }
    }

    async function handleLogout() {
        contextAuth.logout();     
    }
    
    useEffect(() =>{
        if(isError) {
            toast.error("Erro ao buscar doações.")
        }
        if(isLoading) {
            toast.loading("Carregando doações...")
        }
        if(isFetched) {
            toast.dismiss();
            toast.success("Doações carregadas com sucesso!")
        }
    }, [isError, isLoading]);

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
                                    <main className={`bg-white text-black ${hovered ? "rounded-tr-3xl rounded-br-3xl" : "rounded-tl-3xl rounded-bl-3xl"} p-5 flex flex-col h-full transition-all duration-300 ease-in-out`}>
                                    <div className="flex justify-center">
                                        <h2 className="text-[1.5rem] text-[#947306] ">{page? page : ""}<span className="ml-2 inline-block bg-[#de9e5a] w-3 h-3 rounded-tl-xl rounded-br-xl rounded-bl-xl "></span></h2>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                    {donations ? (donations.map((donation:any)=>(    
                                        <div className="grid grid-cols-2 border-2 border-[#de9e5a] rounded-2xl p-5 mt-10">
                                            <p>Para: {donation.name}</p>
                                            <p>Método de pagamento: {donation.paymentMethod}</p>
                                            <p>Valor: {donation.amount}</p>
                                            <p>Data: {donation.dataCreated}</p>
                                        </div>
                                    ))):(
                                    <div className="flex justify-center items-center h-full">
                                        <p className="text-[#947306] text-[1.5rem]">Você ainda não fez nenhuma doação.</p>
                                    </div>
                                    )}
                                    </div>
                                </main>
}
                                </div>
                        
    </section>
</>
)
}
