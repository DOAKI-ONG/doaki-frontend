import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export async function getUserInfo() {
  try {
    const response = await api.get(`/users/profile`);
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar o usuário.');
  }
}

export function useUserInfo() {
  const user = useQuery({
    queryFn: () => (getUserInfo()),
    queryKey: ['user-info'],
  });
  return user;
}