import {Link} from "react-router-dom"
import {Input} from "@/components/ui/input"

export function Header (){
    return(
        <header className="flex flex-row w-screen h-20 fixed top-0 m-1 border-b-1 space-x-200 ">
            <Link to="/" className=""><img src="src\assets\logo-2.png" alt="logo-2" className="w-20 h-20 ml-2"/></Link>
            <div className="flex space-x-55">
                <Input type="text" className="bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 mt-4 relative right-[-150px] border-0 focus:ring-2 focus:ring-[#b3cc84] " />
                <Link to ="/profile" className="w-18 h-18 rounded-full bg-amber-200"></Link>
            </div>
        </header>
    )
}