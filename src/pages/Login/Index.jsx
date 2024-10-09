import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../context/AuthContext'
import userAuth from '../../hooks/userAuth';


export default function Index() {
  const navigation = useNavigation()
  const { login, SignIn } = userAuth();

  const [user, setUser]         = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true)

    try {
      e.preventDefault();
      console.log(123)
      console.log(user)
      console.log(password)
      login(user, password)
      // SignIn();
    } catch (e) {
      console.error(e)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  };


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>Faça seu Login</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder='Digite seu email' style={styles.input}
          onChangeText={(text) => setUser(text)}>
        </TextInput>

        <Text style={styles.label}>Senha</Text>
        <TextInput placeholder='Digite sua senha' style={styles.input}
          secureTextEntry={true} onChangeText={(text) => setPassword(text)}>
        </TextInput>

        <View style={styles.buttonAcess}>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IndexBottomTab')}> TESTAR 'home' */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonSignUpText}>Não possui uma conta? Registre-se</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C19B8F" 
  },

  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%" 
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff"
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  label: {
    fontSize: 20,
    marginTop: 20
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  button: {
    backgroundColor: "#5F5D19",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  buttonSignUp: {
    marginTop: 14,
    alignSelf: "center"
  },

  buttonAcess: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  },

  buttonSignUpText: {
    color: "#a1a1a1",
    borderBottomWidth: 1,
    borderColor: "#a1a1a1"
  }
})