import { api } from "../../../api/httpClient";

export const registerUser = async (userData) => {
    return await api.post("/auth/register", userData);
};

export const loginUser = async (userData) => {
    return await api.post("/auth/login", userData);
};

export const logoutUser = async () => {
    return await api.post("/auth/logout");
};

export const getCurrentUser = async () => {
    return await api.get("/auth/me");
};  