import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import {CardPayment,initMercadoPago,StatusScreen} from '@mercadopago/sdk-react';
import {ICardPaymentBrickPayer,ICardPaymentFormData} from '@mercadopago/sdk-react/esm/bricks/cardPayment/type';
import toast from "react-hot-toast";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
  locale: 'pt-BR',
  advancedFraudPrevention: true,
});

type PaymentProps ={
  amount:number
}

  
async function registerPayment(paymentData: any) {
  try {
    const response = await api.post(`/ongs/donation/`, {
      paymentData
    });
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export function PaymentBrick(props: PaymentProps) {
  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 12,
    },
  }

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (formData:any) => {
      registerPayment(formData)},
    mutationKey: ['user-donation'],
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user-donation'] });
      console.log("Pagamento realizado com sucesso:", data);
    },
    onError: (error) => {
      console.error("Erro ao realizar o pagamento:", error);
    },
  });

     const initialization = {
    amount: props.amount || 0,
  };

    const onSubmit = async (formData:any)=>{
      const payload = {
        paymentMethod:"",
        paymentData:formData
      }
      try{
        mutate(payload.paymentData)
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
      <CardPayment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
      />
    )
    
  }
async function registerNewPayment( paymentData: any) {
  try {
    const response = await api.post(`/ongs/donation/`, {
      paymentData,
    });
    return response.data;
  } catch (error) {
    toast.error('Erro ao registrar novo pagamento');
  }
}

export function BrickCardMpRefreshPayment(props: PaymentProps) {
  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 12,
    },
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (payload: any) => registerNewPayment(payload),
    mutationKey: ['register-payment'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-donation'] });
    },
  });

  const initialization = {
    amount: props.amount || 0,
  };

  const onSubmit = async (
    formData: ICardPaymentFormData<ICardPaymentBrickPayer>
  ) => {
    const payload = {
      paymentMethod: 'CARD',
      paymentData: formData,
    };
    try {
      mutate(payload.paymentData);
    } catch (error) {
      console.error('Erro ao registrar novo pagamento:', error);
      throw error;
    }
  };

  const onError = async (error: any) => {
    console.log(error);
  };

  return (
    <CardPayment
      initialization={initialization}
      onSubmit={onSubmit}
      customization={customization}
      onError={onError}
    />
  );
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
