import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainApi from "../utils/MainApi";

export default function useLogin() {
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            const resp = await MainApi.login(email, password);
            console.log('resp', resp);
            if (!resp.token) {
                throw new Error('No token received');
            }
            localStorage.jwt = resp.token;
        } catch (e) {
            console.error(e);
            setError(e.message);
        }
    };

    useEffect(() => {
        console.log('test', localStorage.jwt);
        if (!localStorage.jwt) {
            return;
        }
        setToken(localStorage.jwt);
        navigate("/movies/all");
    }, []);

    return {
        loggedIn: !!token,
        login,
        error
    };
}