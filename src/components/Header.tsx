import {Link} from "react-router-dom"
import {Input} from "@/components/ui/input"
import {Search} from "lucide-react"

export function Header (){
    return(
        <header className="flex flex-row w-screen h-20 fixed top-0  border-b-1 space-x-200 bg-white z-10">
            <Link to="/" className=""><img src="src\assets\logo-2.png" alt="logo-2" className="w-20 h-20 ml-2"/></Link>
            <div className="flex space-x-50">
                <form className="relative">
                    <Input type="search" className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 mt-4 border-0 focus:ring-2 focus:ring-[#b3cc84] pr-10" placeholder="Está procurando algo?" /> 
                    <button type="submit" className="hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">
                        <Search className="absolute right-3 top-[35px] transform -translate-y-1/2 text-[#619766]"/>
                    </button>
                </form>
                <Link to ="/profile" className="w-18 h-18 rounded-full bg-amber-200 "></Link>
            </div>
        </header>
    )
}