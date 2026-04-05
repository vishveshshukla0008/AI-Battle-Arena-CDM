import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../services/auth.api';


const useAuth = () => {
    const { setLoading, setUser } = useContext(AuthContext);


    const handleRegister = async (data) => {
        try {
            setLoading(true);
            const response = await registerUser(data);
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (data) => {
        try {
            setLoading(true);
            const response = await loginUser(data);
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };


    const handleLogout = async () => {
        try {
            setLoading(true);
            const response = await logoutUser();
            setUser(null);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleGetUser = async () => {
        try {
            setLoading(true);
            const response = await getCurrentUser();
            setUser(response.user);
            return response;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }


    return { handleGetUser, handleLogin, handleLogout, handleRegister }

}
export default useAuth