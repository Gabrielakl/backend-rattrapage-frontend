import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const login = async (email: string, password: string) => {
    const response = await api.post('/auth', {
        email,
        password,
    });
    return response;
};

export const register = async (username: string, password: string, email: string) => {
    const response = await api.post('/user', {
        name: username,
        password,
        email
    });
    return response;
}

export const getMyUser = async () => {
    const response = await api.get('/user');
    return response;
}

export const addPokemon = async (name: string, type: string, health: number) => {
    const response = await api.post('/pokemon', {
        name,
        type,
        health
    });
    return response;
}