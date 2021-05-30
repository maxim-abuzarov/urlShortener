import {createContext} from "react";

function pass() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: pass,
    logout: pass,
    isAuthenticated: false
})