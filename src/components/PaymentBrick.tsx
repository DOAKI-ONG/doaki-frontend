import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import {Payment,initMercadoPago,StatusScreen} from '@mercadopago/sdk-react';
import toast from "react-hot-toast";
import { IPaymentBrickCustomization, IPaymentBrickPayer } from "@mercadopago/sdk-react/esm/bricks/payment/type";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
  locale: 'pt-BR',
  advancedFraudPrevention: true,
});

type PaymentProps ={
  amount:number
  cnpj: string
}

async function registerNewPayment( paymentData: IPaymentBrickPayer, cnpj: string) {
  try {
    const response = await api.post(`/donations/ong/${cnpj}`,
      paymentData,
    );
    toast.success('Pagamento registrado com sucesso!');
    return response.data;
  } catch (error) {
    toast.error('Erro ao registrar novo pagamento');
  }
}

export function PaymentBrick({amount, cnpj}: PaymentProps) {
  
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (formData:any) => {
      registerNewPayment(formData, cnpj)},
    mutationKey: ['user-donation'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-donation'] });
    },
    onError: (error) => {
      console.error("Erro ao realizar o pagamento:", error);
    },
  });

     const initialization = {
    amount: amount || 0,
  };
  
const customization:IPaymentBrickCustomization = {
 paymentMethods: {
   ticket: `all`,
   bankTransfer: `all`,
   creditCard: `all`,
   prepaidCard: `all`,
   debitCard: `all`,
   mercadoPago: `all`,
 },
};

    const onSubmit = async (formData:any)=>{
      try{
        mutate(formData.formData);
      } 
      catch (error) {
        console.error("Erro ao processar o pagamento:", error);
      }
    }
    const onError = async (error: any) => {
    
        console.log("Error no pagamento.");
        console.log(error);
    };
    return(
      <Payment
   initialization={initialization}
   customization={customization}
   onSubmit={onSubmit}
   onError={onError}
/>
    )
    
  }

export function StatusBrickMp({ paymentId }: { paymentId: string }) {
  const initialization = {
    paymentId, 
  };
  const onError = async (error: any) => {
    console.log(error);
  };

  return <StatusScreen initialization={initialization} onError={onError} />;
}
