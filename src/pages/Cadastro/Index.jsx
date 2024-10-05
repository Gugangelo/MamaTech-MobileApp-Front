import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';


export default function Index() {
  const navigation = useNavigation()
  const [genero, setGenero] = useState(null);
  const [estadoCivil, setEstadoCivil] = useState(null);
  const [nivelEscolaridade, setNivelEscolaridade] = useState(null);
  const [cancer, setCancer] = useState(null);

  const generos = [
    { label: 'Feminino', value: '1' },
    { label: 'Outro', value: '2' }
  ];

  const estadosCivis = [
    { label: 'Solteira', value: '1' },
    { label: 'Casada', value: '2' },
    { label: 'Viúva', value: '3' },
    { label: 'Divorciada', value: '4' },
    { label: 'Outro', value: '5' }
  ];

  const escolaridades = [
    { label: 'Ensino Fundamental', value: '1' },
    { label: 'Ensino Médio', value: '2' },
    { label: 'Ensino Superior (Graduação)', value: '3' },
    { label: 'Pós-graduação', value: '4' },
    { label: 'Mestrado', value: '5' },
    { label: 'Doutorado', value: '6' },
    { label: 'Outro', value: '7' }
  ];

  const cancerResposta = [
    { label: 'Sim', value: '1' },
    { label: 'Não', value: '2' }
  ];

  const handleAdvance = () => {
    if (cancer === '1') {
      navigation.navigate('Login')
    } else if (cancer === '2') {
      navigation.navigate('Cadastro2')
    }
  }


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>Registre sua conta</Text>
      </Animatable.View>

      <View style={styles.containerForm}>
        {/* Seção 1 */}
        <TextInput placeholder='Digite seu nome' style={styles.input} />
        
        <TextInput placeholder='Digite seu email' style={styles.input} />
        
        <TextInput placeholder='Digite sua senha' style={styles.input} secureTextEntry={true} />
        
        <TextInput placeholder='Data de nascimento' style={styles.input} />

        <Dropdown
          style={styles.dropdown}
          data={generos}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setGenero(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={estadosCivis}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Estado civil'
          value={estadoCivil}
          onChange={item => { setEstadoCivil(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={escolaridades}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Nível de escolaridade'
          value={nivelEscolaridade}
          onChange={item => { setNivelEscolaridade(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={cancerResposta}
          labelField="label"
          valueField="value"
          placeholder='Já foi diagnosticada com câncer?'
          value={cancer}
          onChange={item => { setCancer(item.value); }}
        />

        <View style={styles.buttonAcess}>
          <TouchableOpacity style={styles.button} onPress={handleAdvance}>
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
