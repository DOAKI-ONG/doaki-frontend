import {Link,useNavigate} from "react-router-dom"
import { api } from "../lib/api"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import  Cookies  from "js-cookie"
import { useState } from "react"
import { Eye, EyeClosed} from "lucide-react"
import {Input} from "@/components/ui/input"
import { AxiosError } from "axios"



const signInFormSchema = z.object({
    email: z.string().email({message: "Email inválido."}),
    password: z.string().min(8, {message: "Senha deve ter no mínimo 8 caracteres."})
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Login (){
    const[isVisible,setIsVisible] = useState(false)
    function handleVisibility(){
        setIsVisible(!isVisible)
    }
    
    const navigate = useNavigate()
        const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<SignInFormSchema>({
            resolver: zodResolver(signInFormSchema)})
        async function handleLoginUser(data: SignInFormSchema){ 
            try{
                const res = await api.post('/users/login', data)
                alert("Sucesso! Usuário logado.")
                Cookies.set('token', res.data.token, { expires: 1 }) 
                navigate('/')
            }
            catch (error: unknown){
                if (error instanceof AxiosError && error.response) {
                    alert("Erro! Ocorreu um erro ao realizar o login: " + error.response.data.message)
                } else {
                    alert("Erro! Algo deu errado.")
                }
            }
    }

    return(

        <div className="relative w-screen h-screen bg-[conic-gradient(#B3CC84_12%,#F4EC6D_24%,#AED59B_40%,#E3D53F_75%,#B3CC84_88%)] flex items-center justify-center flex-col">
        <div className=" relative flex items-center justify-center bg-white p-8 rounded-2xl shadow-md w-100 h-110 flex-col ">
        <img src="src\assets\logo-1-doaki.png" alt="logo" className="absolute top-[-60px] w-45 h-30 rounded-2xl shadow-md "/>
            <form onSubmit={handleSubmit(handleLoginUser)} className=" mt-8">
                <div className="flex flex-col m-3">
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <label className="mb-2 self-start text-black ">Email:</label>
                    <Input type="email" placeholder="Digite o seu email" {...register(`email`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0" />
                </div>
                <div className="flex flex-col m-2">
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <label className="mb-2 self-start text-black ">Senha:</label>
                    <div className="flex flex-row items-center space-x-2">
                        <Input type= {isVisible? "text" : "password"} placeholder="Digite a sua senha" minLength={8}{...register(`password`)} className="relative bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0"/>
                        <button type="button" className="absolute left-[80%]" onClick={handleVisibility}>{isVisible ? <EyeClosed/>: <Eye/>
                        }</button>
                    </div>
                </div>
                <button type= "submit" disabled={isSubmitting} className="mx-auto w-30 h-12 mt-10 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                Entrar
            </button>
            </form>
            
            <Link to="/sign-up" className="text-[#619766] font-medium mt-2">Não tenho uma conta.</Link>
            

        </div>
    </div>
    )
}