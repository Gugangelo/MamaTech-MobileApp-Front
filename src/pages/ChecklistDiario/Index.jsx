import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Result from './Result';


export default function Index() {
  const navigation = useNavigation()
  const [difEngolir, setDifEngolir] = useState(false);
  const [dorEngolir, setDorEngolir] = useState(false);
  const [sacPrecoce, setSacPrecoce] = useState(false);
  const [difAbrirBoca, setDifAbrirBoca] = useState(false);
  const [diarreia, setDiarreia] = useState(false);
  const [constipacao, setConstipacao] = useState(false);
  const [resultCheck, setResultCheck] = useState()

  const toggleSwitch = (switchName) => {
    switch (switchName) {
      case 'difEngolir':
        setDifEngolir((prevState) => !prevState);
        break;
      case 'dorEngolir':
        setDorEngolir((prevState) => !prevState);
        break;
      case 'sacPrecoce':
        setSacPrecoce((prevState) => !prevState);
        break;
      case 'difAbrirBoca':
        setDifAbrirBoca((prevState) => !prevState);
        break;
      case 'diarreia':
        setDiarreia((prevState) => !prevState);
        break;
      case 'constipacao':
        setConstipacao((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const handleAdvance = () => {
    if (resultCheck == null) {
      setResultCheck(1)
    } else {
      setResultCheck(null)
    }
  }


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>TELA CHECKLIST</Text>
      </Animatable.View>

      <ScrollView style={styles.containerForm}>
        <View style={styles.input}>
          <Text>Dificuldade de engolir</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={difEngolir ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('difEngolir')}  // Função chamada quando alternado
            value={difEngolir}  // Estado atual do Switch
          />
        </View>

        <View style={styles.input}>
          <Text>Dor ao engolir</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={dorEngolir ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('dorEngolir')}
            value={dorEngolir}
          />
        </View>

        <View style={styles.input}>
          <Text>Saciedade precoce</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={sacPrecoce ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('sacPrecoce')}
            value={sacPrecoce}
          />
        </View>

        <View style={styles.input}>
          <Text>Dificuldade de abrir a boca</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={difAbrirBoca ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('difAbrirBoca')}
            value={difAbrirBoca}
          />
        </View>

        <View style={styles.input}>
          <Text>Diarréia</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={diarreia ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('diarreia')}
            value={diarreia}
          />
        </View>

        <View style={styles.input}>
          <Text>Constipação</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#33ff00" }}
            thumbColor={constipacao ? "#ffffff" : "#f9f9f9"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch('constipacao')}
            value={constipacao}
          />
        </View>

        { resultCheck == null
        ?
        <View style={styles.buttonAcess}>
          <TouchableOpacity style={styles.button} onPress={handleAdvance}>
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}> */}
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={styles.resultRecommendation}>
          <Result />
          <TouchableOpacity style={styles.button} onPress={handleAdvance}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      }
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C19B8F",
    padding: 20,
    paddingBottom: -20
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

  input: {
    backgroundColor: "#DDDDDD",
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 4,
    marginTop: 20,
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    justifyContent: "center",
    marginBottom: 20
  },
  
  button: {
    backgroundColor: '#5F5D19',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  
  resultRecommendation: {
    flex: 1,
    backgroundColor: "#C19B8F",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    padding: 8,
    height: "auto"
  },

  resultRecommendationText: {
    backgroundColor: "#FFFFAD",
    borderRadius: 10,
    fontSize: 12,
    marginTop: 20,
    padding: 4
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
