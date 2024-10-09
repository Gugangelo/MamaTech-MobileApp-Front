import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import * as SecureStore from 'expo-secure-store'
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken]     = useState();
  const [loading, setLoading] = useState(true);
  const navigation            = useNavigation()

  useEffect(() => {
    async function loadStoragedData() {
      const storagedToken = await SecureStore.getItemAsync('MamaTech_token') // POR EQUANTO FUNCIONA PRA PEGAR O VALOR
      setToken(storagedToken) // ATENÇÃO, MODIFICAR NO FUTURO PARA ALGO MAIS SUCINTO
      console.log(storagedToken)
      console.log(token)

      if (storagedToken) {
        console.log(11)
        console.log(1122)
        setLoading(false)
    } else {
        setLoading(false)
      }
    }
    loadStoragedData()
  }, [token])

  const login = async (login, senha) => {
    try {
      console.log(1)
      console.log(login)
      console.log(senha)
      // const response = await api.post('/login', {
      //   email: login,
      //   password: senha
      // })
      const response = await api.post('/login', {
        email: "gustavoangelo06@hotmail.com",
        password: "1234"
      })
      setToken(response.data.token)
      await SecureStore.setItemAsync('MamaTech_token', response.data.token)
      
      api.defaults.headers.Authorization = `Bearer ${token}`

    } catch(error) {
      if (error.response) {
        // Erros de resposta do servidor (código 4xx ou 5xx)
        console.error("Erro de resposta do servidor:", error.response);
      } else if (error.request) {
        // Erro de solicitação (nenhuma resposta recebida)
        console.error("Nenhuma resposta do servidor:", error.request);
      } else {
        // Outros tipos de erros (como erro na configuração da solicitação)
        console.error("Erro na solicitação:", error.message);
      };
    }
  }

  const logout = async () => {
    try {
      SecureStore.deleteItemAsync('MamaTech_token')
      console.log(2)
      api.defaults.headers.Authorization = null;
      console.log(token)
      setToken(null)
      console.log("ACABOOOOU")
      console.log(token)
    } catch (e) { console.error(e) }
  };


  return (
    <AuthContext.Provider value={{ authenticated: !!token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}