import logo from "../assets/logo-1-doaki.png"
import { Linkedin, Instagram, Mail } from 'lucide-react';
import {Link as Scroll} from "react-scroll"


export function Footer() {
    return(
        <footer className="h-300 w-screen bg-[#4C6B4F] text-white">
            <div className="mx-5 my-5 flex flex-col justify-between gap-[20px]">
                <section className="flex flex-col gap-5">
                    <img src={logo} alt="logo" className="w-40 rounded 2xl opacity-95" />
                    <div className="flex flex-row gap-5 w-40 justify-center">
                        <a href=""><Linkedin /></a>
                        <a href=""><Instagram /></a>
                        <a href=""><Mail /></a>
                    </div>
                </section>
                <section className="flex flex-row items-center justify-center gap-40">
                    <div>
                        <h2 className="text-[1.2rem]">Contato</h2>
                        <p className="text-gray-300 opacity-90">+55 83 98150-7860</p>
                        <p className="text-gray-300 opacity-90">+55 83 98214-6005</p>
                    </div>
                    <div>
                        <h2 className="text-[1.2rem]">Informações</h2>
                        <div className="flex flex-col">
                            <Scroll smooth={true} offset={-80} className="text-gray-300 opacity-90 cursor-pointer hover:scale-110 transition-transform duration-300" to="quem_somos">Quem somos</Scroll>
                            <Scroll smooth={true} offset={-80} className="text-gray-300 opacity-90 cursor-pointer hover:scale-110 transition-transform duration-300" to="oferecemos">O que oferecemos</Scroll>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[1.2rem]">Localização</h2>
                        <div className="flex flex-col">

                            <p className="text-gray-300 opacity-90">Rua Alguma coisa - PB</p>
                            <p className="text-gray-300 opacity-90">CEP: </p>
                            
                        </div>
                    </div>
                </section>
                <span className="h-[1px] bg-gray-300 opacity-30"></span>
                <section className="flex flex-row justify-between mb-3">
                    <div className="flex gap-[40px]">
                        <a href="">Termos de uso</a>
                        <a href="">Política de cookies</a>
                        <a href="">Política de privacidade</a>
                    </div>
                    <div>
                        <p className="text-gray-300 opacity-90">2025 © Doaki - Todos os direitos reservados.</p>
                    </div>
                </section>
            </div>
            
        </footer>
    )}