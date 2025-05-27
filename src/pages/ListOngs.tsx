import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import { useOngsInfo } from "@/hooks/useOngsInfo"
import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"
//import {Headset } from "lucide-react"
export type Ong = {
    id_ong: string;
    name: string;
    cnpj: string;
    email: string;
    address: string;
    context: string;
    description: string;
    profileImage: string;
}

export function ListOngs (){
    const {data: ongs, isLoading, isError, isFetched} = useOngsInfo()
    const [isVisible,setIsVisible] = useState(false)
    function handleVisibility (){
        setIsVisible(!isVisible)
    }
    useEffect(() => {
        if (isError) {
            toast.error("Erro ao listar Ongs.")
        }
        if (isLoading) {
            toast.loading("Carregando Ongs...")
        }
        if (isFetched) {
            toast.dismiss()
            toast.success("Ongs carregadas com sucesso!")
        }
    }
    , [isError, isLoading])

    return(
        <main>
            <Header/>
                <div className="flex flex-col w-screen h-screen items-center justify-center bg-white text-black">
                    {ongs && ongs.map((ong:Ong) =>(
                        <div className="flex flex-row w-[90%] h-[45%] border-3 border-[#619766] rounded-2xl shadow-md ml-5 pr-10 space-x-15 bg-white text-black">
                        <img src={ong.profileImage} alt="" className="w-80 h-55 border-gray-100 border-2 rounded-2xl self-center ml-10" />
                        <div className="flex flex-col gap-2 justify-center text-justify w-250 bg-white text-black">
                            <h2 className="flex self-center text-2xl text-[#619766] mb-5">{ong.name}</h2>

                            <div className="flex gap-10 self-center">
                                <div>
                                    <h2 className="text-[#619766] font-semibold">CNPJ:</h2>
                                    <p className="text-black">{ong.cnpj}</p>
                                </div>
                                <div>
                                    <h2 className="text-[#619766] font-semibold">Email:</h2>
                                    <p className="text-black">{ong.email}</p>
                                </div>
                                <div>
                                    <h2 className="text-[#619766] font-semibold">Região de atuação: </h2>
                                    <p className="text-black">{ong.address}</p>
                                </div>
                                <div>
                                    <h2 className="text-[#619766] font-semibold">Setor:</h2>
                                    <p className="text-black">{ong.context}</p>
                                </div>
                            </div>
                            <div>
                                <h2 className={isVisible?"text-[#619766] font-semibold":"hidden"}>Descrição:</h2>
                                <p className={isVisible ? "text-justify" : "hidden"}>{ong.description}</p>
                            </div>

                            <button type="button" onClick={handleVisibility} className="text-sm text-gray-400 mt-2 hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer">{isVisible ? "Ver menos...": "Ver mais..."}</button>

                            <button type= "submit" className=" w-30 h-12 mt-2 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] self-end hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" ><Link to="/donation" className="w-[100%]">Doar</Link></button>
                        </div>
                    </div>
                    ))}
                    
                    {/* <button className=" relative w-18 h-18 rounded-full bg-[#F4F1F1] self-end right-[30px] bottom-[-110px] shadow-md hover:opacity-80 transition duration-150 ease-in-out cursor-pointer"> <Headset className="w-10 h-10 text-[#619766] font-[200] relative left-[15px]" style={{ strokeWidth: 1.5 }} /></button>
                    <span className="relative flex size-3 self-end right-[35px] bottom-[-40px]"> 
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                    </span> */}
                </div>
        </main>
        
    )
}