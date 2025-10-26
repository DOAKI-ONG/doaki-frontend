import logo from '../assets/logo-1-doaki.png'
import sunset from '../assets/sunset.png'
import donate from '../assets/donate.png'
import image from '../assets/volunteer.png'
import image2 from '../assets/volunteer2.png'
import image3 from '../assets/volunteers3.png'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import { ContactUs } from '@/components/ContactForm'
import { Link } from 'react-router-dom'

export function Home(){
    
    return(
        <main className="w-screen h-screen flex flex-col items-center text-[#619766] pt-25">
           <Header navigation={true}/>
            <section id='quem_somos' className="flex text-white bg-[#619766] flex-col p-10 w-[90%] h-95 rounded-2xl">
                <div className='flex flex-row gap-[200px]'>
                    <h1 className='flex flex-wrap w-200 font-semibold '>Conectamos quem quer ajudar a quem precisa</h1>
                    <img src={logo} alt="logo" className='w-65 ml-5 rounded-2xl z-10 shadow-lg hover:scale-115 transition-transform duration-300'/>
                </div>
                <h2 className='flex flex-wrap w-200 text-[1.3rem] text-justify'>
                    O Doaki é uma plataforma sem fins lucrativos, pensada para proporcionar uma forma simples, rápida e segura de realizar doações diretas para ONGs. Nossa missão é conectar doadores e organizações sociais, garantindo que os recursos cheguem de maneira eficiente e sem burocracia. 
                </h2>
                <img src={sunset} alt="" className='w-90 rounded-2xl z-10 shadow-lg self-end absolute top-[50%] right-[13%] hover:scale-115 transition-transform duration-300'/>
                <span className=' bg-amber-200 w-55 h-55 rounded-full absolute top-[51%] right-[18%] blur-3xl z-0'></span>
            </section>

            <section id='por_que_nós' className='mt-20 w-full grid grid-cols-2'>
                <div className='flex flex-col self-start ml-50 mb-20'>
                    <h2 className='font-bold text-[2rem]'>Mas por que doar com o Doaki?</h2>
                    <p className='mt-5 text-[1] text-justify flex flex-wrap w-120'>
                    Muitas ONGs incríveis têm dificuldade para arrecadar online. No Doaki, sua doação chega direto a quem precisa, sem complicações.
                    <img src={donate} alt="" className='w-120 z-10 rounded-2xl shadow-lg mt-10'/>
                    <span className='bg-gray-400 w-45 h-45 rounded-full absolute left-[12%] bottom-[-40%] blur-3xl z-0'></span>
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
                        <Link to="/listongs" className='bg-[#4C6B4F] text-white p-3 rounded-2xl mt-10 ml-30 hover:scale-110 transition-transform duration-300 cursor-pointer'>
                            Faça a sua doação!
                        </Link>
                    </div>
                </div>
            </section>

            <section id='oferecemos' className='w-full '>
                <div className='flex items-center justify-center flex-col'>
                    <h2 className='font-bold text-[2rem]'>
                        Você pode até se perguntar...
                    </h2>

                    <div className='flex items-center justify-center mt-20'>
                    <h2 className='font-bold text-[1.6rem] text-white text-center flex-wrap w-100 h-30 p-5 bg-[#B3CC84] rounded-2xl z-3 shadow-2xl'>
                        Porque doar com o Doaki é diferente?
                    </h2>
                    <span className='border-1 z-1 w-250 absolute'></span>
                    
                    </div>
                    <div className='flex items-center justify-center mt-20 gap-[100px]'>
                    <span className='border-1 z-1 h-50 absolute mt-[-100px]'></span>
                    <span className='border-1 z-1 h-50 absolute mt-[-200px] ml-[66%]'></span>
                    <span className='border-1 z-1 h-50 absolute mt-[-200px] mr-[66%]'></span>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl z-1'>
                        Com poucos cliques, você faz a diferença no mundo.
                    </p>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl z-1'>
                        Você sabe exatamente para onde vai a sua doação — nada de surpresas.
                    </p>
                    <p className='font-bold text-[1.1rem] text-center flex flex-wrap w-100 h-30 p-5 bg-white border-2 border-[#619766] rounded-2xl z-1'>
                        O Doaki é gratuito para você. 100% do que você doa chega na ONG.
                    </p>
                    </div>
                </div>
            </section>
            <section id='junte-se' className='w-full flex items-center justify-center mt-20 mb-50' >
                <div className='w-[90%] bg-[#AED59B] h-150 p-5 rounded-2xl shadow-xl relative z-1 flex items-center justify-center'>
                    <div>
                    <h2 className='font-bold text-[1.6rem] text-white text-center'>
                        Pronto para transformar vidas? Junte-se a nós.
                    </h2>  
                        <div className='flex items-center justify-center mt-10'>
                            <Carousel>
                            <CarouselContent className='w-200'>
                                <CarouselItem className="basis-1/2">
                                 <img src={image3} className='w-150 h-70 rounded 2xl shadow-md' alt="Volunteer" /></CarouselItem>
                                <CarouselItem className="basis-1/2">
                                 <img src={image} className='w-150 h-70 rounded 2xl shadow-md' alt="Volunteer" /></CarouselItem>
                                <CarouselItem className="basis-1/2">
                                <img src={image2} className='w-150 h-70 rounded 2xl shadow-md' alt="Volunteer" /></CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className='cursor-pointer'/>
                            <CarouselNext className='cursor-pointer'/>
                            </Carousel>
                        </div>
                    </div>
                </div>
                
                <span className='bg-gray-300 w-[90%] h-100 rounded-full absolute left-[5%] bottom-[-210%] blur-3xl z-0'></span>
            </section>

            <section className='w-full h-800 bg-gradient-to-b from-[#AED59B] to-[#619766] flex items-center justify-center flex-col pb-10'>
                <h2 className='font-bold text-[1.6rem] text-white text-center mt-15'>Se você é uma ONG interessada em se cadastrar:</h2>
                    <ContactUs/>
            </section>
        <Footer/>
    </main>
        
    )
}