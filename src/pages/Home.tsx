import { Header } from "../components/Header"
import { useState } from "react"

export function Home (){
    const [isVisible,setIsVisible] = useState(false)
    function handleVisibility (){
        setIsVisible(!isVisible)

    }
    return(
        <div>
            <Header/>
                <div className="flex flex-col w-screen h-screen items-center justify-center">
                    <div className="flex flex-row w-300 h-75 border-3 border-[#619766] rounded-2xl shadow-md ml-5 pr-10 space-x-15 ">
                        <img src="src\assets\logo-1-doaki.png" alt="" className="w-70 h-55 border-gray-100 border-2 rounded-2xl self-center ml-10" />
                        <div className="flex flex-col items-center justify-center text-justify w-250">
                            <h2 className="text-2xl text-[#619766] mb-5">Nome da ONG</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam placeat cupiditate laborum! Possimus nulla minima et nobis impedit neque soluta quidem ipsam quam nihil, id reprehenderit, est aliquam. Quaerat, quo?</p>

                            <p className={isVisible ? "" : "hidden"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam placeat cupiditate laborum! Possimus nulla minima et nobis impedit neque soluta quidem ipsam quam nihil, id reprehenderit, est aliquam. Quaerat, quo?</p>

                            <button type="button" onClick={handleVisibility} className="text-sm text-gray-400 mt-2 hover:opacity-80 transition duration-150 ease-in-out cursor-pointer">{isVisible ? "Ver menos...": "Ver mais..."}</button>

                            <button type= "submit" className=" w-30 h-12 mt-2 flex justify-center items-center text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] self-end hover:opacity-80 transition duration-150 ease-in-out cursor-pointer" >Doar</button>
                        </div>
                    </div>
                    <a href="" className=" relative w-18 h-18 rounded-full bg-gray-300 self-end right-[30px] bottom-[-110px] shadow-md hover:opacity-80 transition duration-150 ease-in-out cursor-pointer"></a>
                    <span className="relative flex size-3 self-end right-[35px] bottom-[-40px]">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
                    </span>
                </div>
        </div>
        
    )
}