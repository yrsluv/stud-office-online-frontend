import axios from 'axios';
import useAuth from './useAuth';

export const useRefreshTokenFunction = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async (): Promise<string | null> => {
    if (!auth) return null;

    try {
      const response = await axios.get<string>('/Tokens/', {
        baseURL: `${import.meta.env.VITE_API_URL}/api`,
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      const newAccessToken = response.data;
      if (newAccessToken) {
        setAuth({ ...auth, accessToken: newAccessToken });
        return newAccessToken;
      } else return null;
    } catch {
      setAuth(null);
      return null;
    }
  };
  return refresh;
};
export default useRefreshTokenFunction;
