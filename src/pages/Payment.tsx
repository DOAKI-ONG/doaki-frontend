import {Input} from "@/components/ui/input"
import { useLocation } from "react-router-dom"
import {PaymentBrick, StatusBrickMp} from "@/components/PaymentBrick"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Payment() {
    const { ongCnpj } = useParams<{ ongCnpj: string }>();
    const { paymentID } = useParams<{ paymentID: string }>();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const amount = queryParams.get("amount")
    const parsedAmount = amount ? parseFloat(amount) : 0;

    return (
        <div>
            <main className={`w-screen min-h-screen max-h-auto flex flex-col items-center justify-center bg-[conic-gradient(#B3CC84_12%,#F4EC6D_24%,#AED59B_40%,#E3D53F_75%,#B3CC84_88%)] text-black`}>
                {paymentID ? (
                    <>
                    <StatusBrickMp paymentId={paymentID} />
                    <Link to={"/listongs"} className="text-white bg-[#619766] mt-5 p-2 rounded-2xl">Lista de Ongs</Link>
                    </>
                ) : null}
                {parsedAmount && parsedAmount > 0 && ongCnpj ?
                (<PaymentBrick amount={parsedAmount} cnpj ={ongCnpj}/>) :(null)}
                {!paymentID && !parsedAmount ? (
                    <div className="flex flex-col w-100 h-100 rounded-2xl items-center justify-center bg-[#f5f5f5] shadow-md p-5">
                    <h2 className="text-2xl self-center font-medium text-[#619766]">Informação inicial</h2>
                    <form className="my-auto">
                        <div className="flex flex-col w-full h-full justify-center align-center">
                            <div className="flex m-auto flex-row gap-5 justify-center align-center">
                                <label>Quantidade (R$):</label>
                                <Input type="number" name="amount" className="bg-[#619766] border-2 border-[#619766] text-[#619766] rounded-2xl outline-[#619766] border-t-[1.7em] outline-solid outline-[3px] text-center w-40 h-10 shadow-md m-0 transition-all duration-1000 cursor-pointer hover:border-t-[0.2em] hover:bg-[#C3F9A9] hover:text-black focus:border-t-[0.2em] focus:bg-[#C3F9A9] focus:text-black" ></Input>
                            </div>
                        </div>
                        <button type="submit" className="mx-auto mt-10 w-30 h-12 flex justify-center items-center shadow-md text-white font-bold text-lg rounded-2xl bg-gradient-to-b from-[#B3CC84] to-[#AED59B] cursor-pointer hover:scale-115 transition-transform duration-300">Enviar</button>
                    </form>
                </div>
                ): null }
                
            </main>
        </div>
    )
}