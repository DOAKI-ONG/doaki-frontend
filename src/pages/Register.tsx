import { Link, useNavigate } from "react-router-dom"
import { api } from "../lib/api"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { Eye, EyeClosed} from "lucide-react"
import { useState } from "react"
import {Input} from "@/components/ui/input"
import { AxiosError } from "axios"
import { toast } from 'react-hot-toast';
import { checkCpf } from "@/service/checkCPF"


const signInFormSchema = z.object({
    name: z.string().min(1, {message: "Nome completo é obrigatório."}),
    cpf: z.string().min(11, {message: "CPF é obrigatório."}),
    email: z.string().email({message: "Email inválido."}),
    confirm_email: z.string().email({message: "Email inválido."}),
    password: z.string().min(8, {message: "Senha deve ter no mínimo 8 caracteres."}),
    confirm_password: z.string().min(8, {message: "Senha deve ter no mínimo 8 caracteres."})
}).refine((data) => data.email === data.confirm_email, {
    message: "Os emails não coincidem.",
    path: ["confirm_email"],
}).refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem.",
    path: ["confirm_password"],
}).refine((data) => checkCpf(data.cpf), {
    message: "CPF inválido.",
    path: ["cpf"],
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Register(){
    const[isVisible,setIsVisible] = useState(false)
    const[isVisibleConfirm,setIsVisibleConfirm] = useState(false)
      

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<SignInFormSchema>({
        resolver: zodResolver(signInFormSchema)})
    async function handleRegisterUser(data: SignInFormSchema){ 
        try{
            await api.post('/user/register', data)
            toast.success("Usuário cadastrado com sucesso.")
            navigate('/sign-in')
        }
        catch (error: unknown){
            if (error instanceof AxiosError && error.response) {
                toast.error("Erro! Ocorreu um erro ao resgistrar: " + error.response.data.message)
            } else {
                toast.error("Erro! Algo deu errado.")
            }
        }
}
return(
    
    <div className="relative w-screen h-screen bg-[conic-gradient(#B3CC84_12%,#F4EC6D_24%,#AED59B_40%,#E3D53F_75%,#B3CC84_88%)] flex items-center justify-center flex-col">
        <div className=" relative flex items-center justify-center bg-white p-8 rounded-2xl shadow-md w-215 h-130 flex-col animate-fade-up animate-once animate-duration-[1500ms]">
        <img src="src\assets\logo-1-doaki.png" alt="logo" className="absolute top-[-60px] w-45 h-30 rounded-2xl shadow-md "/>
            <form onSubmit={handleSubmit(handleRegisterUser)}>
                <div className=" mt-8 grid grid-cols-2">
                    <div className="flex flex-col m-3">
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        <label className="mb-2 self-start w-80">Nome:</label>
                        <Input type="text" placeholder="Primeiro nome" {...register(`name`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000" />
                    </div>
                    <div className="flex flex-col m-3">
                    {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
                        <label className="mb-2 self-start">CPF:</label>
                        <Input type="text" minLength={11} maxLength={11} placeholder="Digite o seu CPF" {...register(`cpf`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000" />
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        <label className="mb-2 self-start">Email:</label>
                        <Input type="email" placeholder="Digite o seu email" {...register(`email`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1200" />
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.confirm_email && <span className="text-red-500">{errors.confirm_email.message}</span>}
                        <label className="mb-2 self-start">Confirme o email:</label>
                        <Input type="email" placeholder="Digite o seu email" {...register(`confirm_email`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1200" />
                    </div>
                    <div className="flex flex-col m-2">
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <label className="mb-2 self-start">Senha:</label>
                        <div className="flex flex-row items-center space-x-2">
                        <Input type= {isVisible? "text" : "password"} placeholder="Digite a sua senha" minLength={8} {...register(`password`)} required className="relative bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1400" />
                        <button className="absolute left-[42.7%]" type="button" onClick={()=>setIsVisible(!isVisible)}>{isVisible ? <EyeClosed/>: <Eye/>
                        }</button>
                    </div>
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.confirm_password && <span className="text-red-500">{errors.confirm_password.message}</span>}
                        <label className="mb-2 self-start">Confirme a senha:</label>
                        <div className="flex flex-row items-center space-x-2">
                        <Input type= {isVisibleConfirm? "text" : "password"} placeholder="Confirme a sua senha" minLength={8} {...register(`confirm_password`)} required className="relative bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1400" />
                        <button className="absolute left-[84%]" type="button" onClick={()=>setIsVisibleConfirm(!isVisibleConfirm)}>{isVisibleConfirm ? <EyeClosed/>: <Eye/>
                        }</button>
                    </div>
                    </div>
                    
                </div>
                <button type= "submit" disabled={isSubmitting} className="w-30 h-12 mt-10 mx-auto flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] hover:opacity-80 transition duration-150 ease-in-out cursor-pointer animate-jump animate-once animate-duration-1000 animate-delay-1600">
                    Cadastrar
                    </button>
            </form>
           

            <Link to="/sign-in" className="text-[#619766] font-medium mt-2">Já tenho uma conta.</Link>

        </div>
    </div>
)
}