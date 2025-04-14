import { Header } from "../components/Header"

export function Profile() {
    return(
        <div>
            <Header/>
                <div className="flex flex-col w-screen h-screen items-center justify-center ">
                    <div className="grid grid-cols-[350px_auto] w-350 h-120">
                        <div className="flex flex-col items-center bg-[#d2bd8ea8] rounded-tl-2xl rounded-bl-2xl space-y-4">
                            <img src="src\assets\logo-1-doaki.png" alt="" className="w-40 h-40 rounded-full m-20" />
                            <button className="bg-[#E4BA30] text-[#FFFFFF] shadow-md w-30 p-2 rounded-2xl hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">Ver doações</button>
                            <button className="bg-[#E4BA30] text-[#FFFFFF] shadow-md w-30 p-2 rounded-2xl hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">Relatórios</button>
                            <button className="bg-[#E4BA30] text-[#FFFFFF] shadow-md w-30 p-2 rounded-2xl hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">Sair da conta</button>
                            <button className="bg-[#E4BA30] text-[#FFFFFF] shadow-md w-30 p-2 rounded-2xl mb-10 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">Excluir conta</button>
                        </div>

                        <form className="flex flex-col justify-center items-center border-1 border-[#E4BA30] rounded-tr-2xl rounded-br-2xl">
                            <div className="flex flex-row m-3 space-x-50">
                                <label className="mb-2 self-start w-50">Nome:</label>
                                <input type="text" className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                            </div>
                            <div className="flex flex-row m-3 space-x-50">
                                <label className="mb-2 self-start w-50">Email:</label>
                                <input type="email" className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                            </div>
                            <div className="flex flex-row m-3 space-x-50">
                                <label className="mb-2 self-start w-50">Número de telefone:</label>
                                <input type="tel"  className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                            </div>
                            <div className="flex flex-row m-3 space-x-50">
                                <label className="mb-2 self-start w-50">CPF:</label>
                                <input type="text" className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                            </div>
                    
                        </form>
                    </div>
                </div>
        </div>
    )
}