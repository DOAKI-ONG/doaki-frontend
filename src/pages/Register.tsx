import { Link, useNavigate } from "react-router-dom"
import { api } from "../lib/api"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'


const signInFormSchema = z.object({
    first_name: z.string().min(1, {message: "Nome é obrigatório."}),
    last_name: z.string().min(1, {message: "Sobrenome é obrigatório."}),
    email: z.string().email({message: "Email inválido."}),
    confirm_email: z.string().email({message: "Email inválido."}),
    password: z.string().min(8, {message: "Senha deve ter no mínimo 8 caracteres."}),
    confirm_password: z.string().min(8, {message: "Senha deve ter no mínimo 8 caracteres."})
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Register(){
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<SignInFormSchema>({
        resolver: zodResolver(signInFormSchema)})
    async function handleRegisterUser(data: SignInFormSchema){ 
        try{
            await api.post('/users/register', data)
            alert("Usuário cadastrado com sucesso.")
            navigate('/sign-in')
        }
        catch (error){
            alert("Erro ao cadastrar usuário.")
        }
}
return(
    
    <div className="relative w-screen h-screen bg-[conic-gradient(#B3CC84_12%,#F4EC6D_24%,#AED59B_40%,#E3D53F_75%,#B3CC84_88%)] flex items-center justify-center flex-col">
        <div className=" relative flex items-center justify-center bg-white p-8 rounded-2xl shadow-md w-215 h-130 flex-col ">
        <img src="src\assets\logo-1-doaki.png" alt="logo" className="absolute top-[-60px] w-45 h-30 rounded-2xl shadow-md "/>
            <form onSubmit={handleSubmit(handleRegisterUser)}>
                <div className=" mt-8 grid grid-cols-2">
                    <div className="flex flex-col m-3">
                        {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
                        <label className="mb-2 self-start w-80">Nome:</label>
                        <input type="text" placeholder="Primeiro nome" {...register(`first_name`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    <div className="flex flex-col m-3">
                    {errors.last_name && <span className="text-red-500">{errors.last_name.message}</span>}
                        <label className="mb-2 self-start">Sobrenome:</label>
                        <input type="text" placeholder="Último nome" {...register(`last_name`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        <label className="mb-2 self-start">Email:</label>
                        <input type="email" placeholder="Digite o seu email" {...register(`email`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.confirm_email && <span className="text-red-500">{errors.confirm_email.message}</span>}
                        <label className="mb-2 self-start">Confirme o email:</label>
                        <input type="email" placeholder="Digite o seu email" {...register(`confirm_email`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    <div className="flex flex-col m-2">
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        <label className="mb-2 self-start">Senha:</label>
                        <input type="password" placeholder="Digite a sua senha" minLength={8} {...register(`password`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    <div className="flex flex-col m-3">
                        {errors.confirm_password && <span className="text-red-500">{errors.confirm_password.message}</span>}
                        <label className="mb-2 self-start">Confirme a senha:</label>
                        <input type="password" placeholder="Digite a sua senha" minLength={8} {...register(`confirm_password`)} required className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84]" />
                    </div>
                    
                </div>
                <button type= "submit" disabled={isSubmitting} className="w-30 h-12 mt-10 mx-auto flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                    Cadastrar
                    </button>
            </form>
           

            <Link to="/sign-in" className="text-[#619766] font-medium mt-2">Já tenho uma conta.</Link>

        </div>
    </div>
)
}