import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Input} from "@/components/ui/input"
import toast from 'react-hot-toast';





export const ContactUs = () => {
  const formEmail = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: any) => {
    e.preventDefault();
    console.log(formEmail.current)

    await emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formEmail.current!, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Formulário enviado com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Falha ao enviar o formulário. Tente novamente mais tarde.');
        },
      );

    await emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID_CORP, formEmail.current!, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      )
  }

  return (
    <form ref={formEmail} onSubmit={sendEmail} className='flex-col w-[50%] bg-white m-10 p-5 rounded-2xl flex items-center justify-center'>
                        <div className='grid grid-cols-2 gap-[50px] pt-5 pb-5'>
                            <div>
                                <label>Nome: </label>
                                <Input type="text" name='user_name' placeholder="Digite o nome da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'/>
                            </div>
                            <div>
                                <label>CNPJ: </label>
                                <Input type="text" name='user_CNPJ' placeholder="Digite o CNPJ da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'/>
                            </div>
                            <div>
                                <label>Descrição: </label>
                                <Input type="text" name='user_description' placeholder="Descrição da atuação da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'/>
                            </div>
                            <div>
                                <label>Email: </label>
                                <Input type="email" name='user_email' placeholder="Digite o email da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'/>
                            </div>
                            <div>
                                <label>Endereço: </label>
                                <Input type="text" name='user_adress' placeholder="Digite o local de atuação da ONG" className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'/>
                            </div>
                            <div>
                                <label>Setor: </label>
                                <select name='user_sector' className='mt-2 bg-[#F5F5F5] rounded-2xl w-80 h-10 shadow-md p-2 focus:outline-none focus:ring-2 focus:ring-[#b3cc84] border-0'>
                                    <option value="SAUDE">Saúde</option>
                                    <option value="EDUCACAO">Educação</option>
                                    <option value="MEIO_AMBIENTE">Meio Ambiente</option>
                                    <option value="DIREITOS_HUMANOS">Direitos Humanos</option>
                                    <option value="ANIMAIS">Animais</option>
                                    <option value="CULTURA">Cultura</option>
                                    <option value="ALIMENTOS">Alimentos</option>
                                    <option value="UTENSILIOS_ADERECOS">Utensílios e adereços</option>
                                    <option value="TRANSPORTE">Transporte</option>
                                    <option value="MORADIA">Moradia</option>
                                    <option value="OUTROS">Outros</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className='bg-[#4C6B4F] text-white p-3 w-20 rounded-2xl mt-10 hover:scale-110 transition-transform duration-300 cursor-pointer' >Enviar</button>
                    </form>
  );
};
    