import axios from 'axios';
import {LoginRequest} from '../models/requests/LoginRequest';
import {RegisterRequest} from '../models/requests/RegisterRequest';

export namespace auth {
    export async function login(loginRequest: LoginRequest): Promise<void> {
        const response = await axios.post<void>('/auth/login', {
            data: loginRequest
        });

        return response.data;
    }

    export async function signup(registerRequest: RegisterRequest): Promise<void> {
        const response = await axios.post<void>('/auth/signup', {
            data: registerRequest
        });

        return response.data;
    }

    export async function logout(): Promise<void> {
        const response = await axios.post<void>('/auth/logout');

        return response.data;
    }
}