import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext'


export default function Index() {
  const navigation = useNavigation()
  const [genero, setGenero] = useState(null);
  const [difEngolir, setDifEngolir] = useState(false);
  const toggleSwitch = () => {setDifEngolir(previousState => !previousState)
    console.log(difEngolir)
    console.log(genero)
    console.log(123)
    console.log(difEngolir)
  }; // Função para alternar o estado

  const generos = [
    { label: 'Feminino', value: '1' },
    { label: 'Outro', value: '2' }
  ];

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>TELA CHECKLIST</Text>
      </Animatable.View>

      <View style={styles.containerForm}>
        {/* Seção 1 */}
        <TextInput placeholder='Digite seu nome' style={styles.input} />

        <Text>O Switch está {difEngolir ? "Ativado" : "Desativado"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#33ff00" }}
          thumbColor={difEngolir ? "#ffffff" : "#f9f9f9"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}  // Função chamada quando alternado
          value={difEngolir}  // Estado atual do Switch
        />

        <Dropdown
          style={styles.dropdown}
          data={generos}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setGenero(item.value); }}
        />

        <View style={styles.buttonAcess}>
          {/* <TouchableOpacity style={styles.button} onPress={handleAdvance}> */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonSignInText}>Já possui conta? Entre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C19B8F",
    padding: 20,
  },

  containerHeader: {
    marginTop: "5%",
    marginBottom: "8%",
    paddingStart: "5%" 
  },

  title: {
    fontSize: 28,
    padding: 4,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#fff"
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"
  },

  label: {
    fontSize: 20,
    marginTop: 20,
  },

  input: {
    borderBottomWidth: 1,
    height: 30,
    marginTop: 25,
    marginBottom: 12,
    fontSize: 16,
  },

  dropdown: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  buttonAcess: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  },

  button: {
    backgroundColor: '#5F5D19',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  buttonSignIn: {
    marginTop: 14,
    alignSelf: "center"
  },

  buttonSignInText: {
    color: "#a1a1a1",
    borderBottomWidth: 1,
    borderColor: "#a1a1a1"
  }
});
