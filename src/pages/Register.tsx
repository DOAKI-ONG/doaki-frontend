import { Link } from "react-router-dom"

export function Register(){
 
return(
    
    <div className="relative w-screen h-screen bg-[conic-gradient(#B3CC84_12%,#F4EC6D_24%,#AED59B_40%,#E3D53F_75%,#B3CC84_88%)] flex items-center justify-center flex-col">
        <div className=" relative flex items-center justify-center bg-white p-8 rounded-2xl shadow-md w-215 h-130 flex-col ">
        <img src="src\assets\logo-1-doaki.png" alt="logo" className="absolute top-[-60px] w-45 h-30 rounded-2xl shadow-md "/>
            <form className=" mt-8 grid grid-cols-2">
                <div className="flex flex-col m-3">
                    <label className="mb-2 self-start w-80">Nome:</label>
                    <input type="text" required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
                <div className="flex flex-col m-3">
                    <label className="mb-2 self-start">Sobrenome:</label>
                    <input type="text" required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
                <div className="flex flex-col m-3">
                    <label className="mb-2 self-start">Email:</label>
                    <input type="email" required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
                <div className="flex flex-col m-3">
                    <label className="mb-2 self-start">Confirme o email:</label>
                    <input type="email" required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
                <div className="flex flex-col m-2">
                    <label className="mb-2 self-start">Senha:</label>
                    <input type="password" minLength={8} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
                <div className="flex flex-col m-3">
                    <label className="mb-2 self-start">Confirme a senha:</label>
                    <input type="password" minLength={8} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2" />
                </div>
            </form>
            <button type= "submit" className="w-30 h-12 mt-10 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                Cadastrar
            </button>

            <Link to="/sign-in" className="text-[#619766] font-medium mt-2">Já tenho uma conta.</Link>

        </div>
    </div>
)
}