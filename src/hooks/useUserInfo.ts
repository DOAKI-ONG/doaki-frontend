import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export async function getUserInfo() {
  try {
    const response = await api.get(`/users/profile`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o usuário:', error);
    throw error;
  }
}

export function useUserInfo() {
  const user = useQuery({
    queryFn: () => (getUserInfo()),
    queryKey: ['user-registration'],
  });
  return user;
}