import logo from '../assets/logo-1-doaki.png'
import sunset from '../assets/sunset.png'
import donate from '../assets/donate.png'
import image from '../assets/volunteer.png'
import image2 from '../assets/volunteer2.png'
import image3 from '../assets/volunteers3.png'
import {Input} from "@/components/ui/input"

export function LandingPage(){
    return(
        <div className="w-screen h-screen flex flex-col items-center text-[#619766]">
            <header className=" bg-white flex flex-row p-8 gap-[70px] justify-center">
                <a href="#quem_somos">Quem somos</a>                                
                <a href="#por_que_nós">Por que nós?</a>
                <a href="#oferecemos">O que oferecemos</a>
                <a href="#junte-se">Doe ou junte-se a nós</a>
            </header>
            <section id='quem_somos' className=" flex text-white bg-[#619766] flex-col p-10 w-[90%] h-95 rounded-2xl">
                <div className='flex flex-row gap-[200px]'>
                    <h1 className='flex flex-wrap w-200 font-semibold '>Conectamos quem quer ajudar a quem precisa</h1>
                    <img src={logo} alt="logo" className='w-65 ml-5 rounded-2xl shadow-lg'/>
                </div>
                <h2 className='flex flex-wrap w-200 text-[1.3rem] text-justify'>
                    O Doaki é uma plataforma sem fins lucrativos, pensada para proporcionar uma forma simples, rápida e segura de realizar doações diretas para ONGs. Nossa missão é conectar doadores e organizações sociais, garantindo que os recursos cheguem de maneira eficiente e sem burocracia. 
                </h2>
                <img src={sunset} alt="" className='w-90 rounded-2xl shadow-lg self-end relative top-[-80px] right-[100px]'/>
            </section>

            <section id='por_que_nós' className='mt-20 w-full grid grid-cols-2'>
                <div className='flex flex-col self-start ml-50 mb-20'>
                    <h2 className='font-bold text-[2rem]'>Mas por que doar com o Doaki?</h2>
                    <p className='mt-5 text-[1] text-justify flex flex-wrap w-120'>
                    Muitas ONGs incríveis têm dificuldade para arrecadar online. No Doaki, sua doação chega direto a quem precisa, sem complicações.
                    <img src={donate} alt="" className='w-120 rounded-2xl shadow-lg mt-10'/>
                    </p>
                </div>
                <div className='mt-40 ml-10'>
                    <h2 className='font-bold text-[2rem]'>
                        Quais ONGs são nossas parceiras?
                    </h2>
                    <p className='mt-5 text-[1rem] text-justify flex flex-wrap w-120'>
                        ONGs sérias e registradas, escolhidas para garantir a confiança e a transparência em cada doação.
                    </p>

                    <div className='flex flex-col w-100 justify-center items-center'>
                        <button className='bg-[#4C6B4F] text-white p-3 rounded-2xl mt-10 ml-30'>
                            Faça a sua doação!
                        </button>
                        <button className='bg-[#4C6B4F] text-white p-3 rounded-2xl mt-5 ml-30'>
                            Entrar na conta!
                        </button>
                    </div>
                </div>
            </section>

            <section id='oferecemos' className='w-full '>
                <div className='flex items-center justify-center flex-col'>
                    <h2 className='font-bold text-[2rem]'>
                        Você pode até se perguntar...
                    </h2>

                    <div className='flex items-center justify-center mt-20'>
                    <h2 className='font-bold text-[1.6rem] text-white text-center flex-wrap w-100 h-30 p-5 bg-[#B3CC84] rounded-2xl'>
                        Porque doar com o Doaki é diferente?
                    </h2>
                    </div>
                    <div className='flex items-center justify-center mt-20 gap-[100px]'>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl'>
                        Com poucos cliques, você faz a diferença no mundo.
                    </p>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl'>
                        Você sabe exatamente para onde vai a sua doação — nada de surpresas.
                    </p>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl'>
                        O Doaki é gratuito para você. 100% do que você doa chega na ONG.
                    </p>
                    </div>
                </div>
            </section>
            <section id='junte-se' className='w-full flex items-center justify-center mt-20 mb-50' >
                <div className='w-[90%] bg-[#AED59B] h-105 p-5 rounded-2xl shadow-xl relative'>
                    <div>
                    <h2 className='font-bold text-[1.6rem] text-white text-center'>
                        Pronto para transformar vidas? Junte-se a nós.
                    </h2>
                    <div className='absolute left-[32%] w-[35%] h-110 p-5 bg-[#AED59B] rounded-2xl flex items-center justify-center '>
                        <div className='flex flex-row items-center justify-center gap-[35px] mb-5'>
                            <img src={image3} className='w-100 h-60 m-5 rounded 2xl shadow-md opacity-70' alt="Volunteer" />
                            <img src={image} className='w-110 h-85 rounded 2xl shadow-md' alt="Volunteer" />
                            <img src={image2} className='w-100 h-60 m-5 rounded 2xl shadow-md opacity-70' alt="Volunteer" />
                        </div>
                    </div>
                    </div>
                    

                </div>
            </section>

            <section className='w-full h-100 bg-gradient-to-b from-[#AED59B] to-[#619766] flex items-center justify-center flex-col'>
                <h2 className='font-bold text-[1.6rem] text-white text-center mt-15'>Se você é uma ONG interessada em se cadastrar:</h2>
                    <form className='w-[50%] bg-white m-10 p-5 rounded-2xl flex items-center justify-center'>
                        <div className='grid grid-cols-2 gap-[50px] pt-5 pb-5'>
                            <div>
                                <label>Nome: </label>
                                <Input type="text" placeholder="Digite o nome da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000'/>
                            </div>
                            <div>
                                <label>CNPJ: </label>
                                <Input type="text" placeholder="Digite o CNPJ da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000'/>
                            </div>
                            <div>
                                <label>Descrição: </label>
                                <Input type="text" placeholder="Descrição da atuação da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000'/>
                            </div>
                            <div>
                                <label>Email: </label>
                                <Input type="email" placeholder="Digite o email da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0 animate-jump animate-once animate-duration-1000 animate-delay-1000'/>
                            </div>
                        </div>
                    </form>
            </section>
            
        </div>
        
    )
}