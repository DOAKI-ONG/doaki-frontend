import {Link as Scroll} from "react-scroll"
import { Link } from "react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Cookies from "js-cookie"

type Headerprops = {
    className?: string
    navigation?: boolean
}

export function Header (props: Headerprops){
    const hasToken = Cookies.get('token')
    const styleHeader = props.className ? props.className :"flex fixed px-1 w-screen h-20 top-0 border-b-1 bg-white z-50"
    const photo = "https://th.bing.com/th/id/OIP.0uaGrLEY_HxDEyklFhqGXgAAAA?rs=1&pid=ImgDetMain"
    
    return(
        <header className={styleHeader}>
            <div className="flex flex-row items-center justify-between w-full h-full">
                <Link to="/" className=""><img src="src\assets\logo-2.png" alt="logo-2" className="w-20 h-20 mr-auto"/></Link>
                  {props?.navigation ? (
                    <nav className=" bg-white flex flex-row gap-x-[60px] justify-center">
                    <Scroll smooth={true} offset={-80} className="cursor-pointer hover:scale-110 transition-transform duration-300" to="quem_somos">Quem somos</Scroll>                                
                    <Scroll smooth={true} offset={-80} className="cursor-pointer hover:scale-110 transition-transform duration-300" to="por_que_nós">Por que nós?</Scroll>
                    <Scroll smooth={true} offset={-80} className="cursor-pointer hover:scale-110 transition-transform duration-300" to="oferecemos">O que oferecemos</Scroll>
                    <Scroll smooth={true} offset={-80} className="cursor-pointer hover:scale-110 transition-transform duration-300" to="junte-se">Doe ou junte-se a nós</Scroll>
                  </nav>
                  ):
                  null }
                <div className="flex items-center justify-center">
                  {hasToken ? (
                    <Link to ="/profile" className="rounded-full  ml-auto mr-5">
                        <Avatar className="w-16 h-16 border-1 border-[#7D7D7D] ">
                            <AvatarImage src={photo} />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                    </Link>
                  ): (
                        <div className="flex mr-5 gap-5">
                            <Link to="/sign-in" className=" text-[#619766] border-1 border-[#619766] p-3 rounded-2xl hover:bg-[#c5f0b0] hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer">
                                Entrar
                            </Link>
                            <Link to="/sign-up" className=" text-[#619766] border-1 border-[#619766] p-3 rounded-2xl hover:bg-[#c5f0b0] hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer">
                                Criar conta
                            </Link>
                        </div>
                  )
                }
                    
                </div>
            </div>
        </header>
    )
}