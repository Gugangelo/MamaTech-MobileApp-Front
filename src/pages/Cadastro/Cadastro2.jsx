import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext'


export default function Index() {
  const navigation = useNavigation()
  const { register } = useContext(AuthContext)

  const [examesReg, setExamesReg] = useState(null);
  const [tratOncologico, setTratOncologico] = useState(null);
  const [tipoDeTratamento, setTipoDeTratamento] = useState([]);
  const [efeitosColaterais, setEfeitosColaterais] = useState([]);
  const [complicacao, setComplicacao] = useState(null);
  const [qualidade, setQualidade] = useState(null);
  const [apoio, setApoio] = useState(null);

  const examesRegularidade = [
    { label: 'Sim, anualmente', value: '1' },
    { label: 'Sim, a cada dois anos', value: '2' },
    { label: 'Sim, ocasionalmente', value: '3' },
    { label: 'Não', value: '4' }
  ];

  const tratamentoOncologico = [
    { label: 'Sim', value: '1' },
    { label: 'Não', value: '2' }
  ];

  const itensTiposDeTratamento = [
    { label: 'Quimioterapia', value: '1' },
    { label: 'Radioterapia', value: '2' },
    { label: 'Cirurgia', value: '3' },
    { label: 'Imunoterapia', value: '4' },
    { label: 'Terapia Alvo', value: '5' },
    { label: 'Outros (Especificar)', value: '6' }
  ];

  const itensEfeitosColaterais = [
    { label: 'Náusea', value: '1' },
    { label: 'Vômitos', value: '2' },
    { label: 'Perda de cabelo', value: '3' },
    { label: 'Fadiga extrema', value: '4' },
    { label: 'Perda de apetite', value: '5' },
    { label: 'Mudanças de peso significativas', value: '6' },
    { label: 'Problemas de sono', value: '7' },
    { label: 'Alterações de humor', value: '8' },
    { label: 'Problemas de memória ou concentração', value: '9' },
    { label: 'Dores musculares ou articulares', value: '10' },
    { label: 'Outros (Especificar)', value: '11' }
  ];

  const complicacoesDoTratamento = [
    { label: 'Sim', value: '1' },
    { label: 'Não', value: '2' },
    { label: 'Não tenho certeza', value: '3' }
  ];

  const qualidadesDeVida = [
    { label: 'Muito ruim', value: '1' },
    { label: 'Ruim', value: '2' },
    { label: 'Neutra', value: '3' },
    { label: 'Boa', value: '4' },
    { label: 'Muito boa', value: '5' }
  ];

  const apoioTratamento = [
    { label: 'Sim, totalmente', value: '1' },
    { label: 'Sim, em certa medida', value: '2' },
    { label: 'Não', value: '3' }
  ];

  // const handleSubmit = async (e) => {
  //   setLoading(true)

  //   try {
  //     e.preventDefault();

  //     login(user, password)
  //   } catch (e) {
  //     console.error(e)
  //     setLoading(false)
  //   } finally {
  //     setLoading(false)
  //   }
  // };


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.title}>Registre sua conta</Text>
      </Animatable.View>

      <ScrollView style={styles.containerForm}>
        <Text style={styles.label}>Qual tipo de câncer e região?</Text>
        <TextInput placeholder='' style={styles.input} />

        <Text style={styles.label}>Você já enfrentou algum tipo de desafio de saúde significativo além do câncer? (Especificar se possível)</Text>
        <TextInput placeholder='' style={styles.input} />
        
        <Text style={styles.label}>Você realiza exames de saúde regularmente?</Text>
        <Dropdown
          style={styles.dropdown}
          data={examesRegularidade}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setExamesReg(item.value); }}
        />
        
        <Text style={styles.label}>Você já passou por tratamento oncológico?</Text>
        <Dropdown
          style={styles.dropdown}
          data={tratamentoOncologico}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setTratOncologico(item.value); }}
        />
        
        <Text style={styles.label}>Se sim, por favor, marque todos os tipos de tratamento que você recebeu:</Text>
        <Dropdown
          style={styles.dropdown}
          data={itensTiposDeTratamento}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setTipoDeTratamento(item.value); }}
        />
        
        <Text style={styles.label}>Durante ou após o tratamento, você experimentou algum dos seguintes efeitos colaterais? (Marque todas as opções que se aplicam)</Text>
        <Dropdown
          style={styles.dropdown}
          data={itensEfeitosColaterais}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setEfeitosColaterais(item.value); }}
        />
        
        <Text style={styles.label}>Você teve alguma complicação séria decorrente do tratamento? (por exemplo, infecções graves, problemas cardíacos, etc.)</Text>
        <Dropdown
          style={styles.dropdown}
          data={complicacoesDoTratamento}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setComplicacao(item.value); }}
        />
        
        <Text style={styles.label}>Como você avaliaria a sua qualidade de vida durante o tratamento e após o término dele?</Text>
        <Dropdown
          style={styles.dropdown}
          data={qualidadesDeVida}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setQualidade(item.value); }}
        />
        
        <Text style={styles.label}>Você sentiu que recebeu apoio adequado para lidar com os efeitos colaterais e complicações do tratamento oncológico?</Text>
        <Dropdown
          style={styles.dropdown}
          data={apoioTratamento}
          labelField="label"
          valueField="value"
          placeholder='Gênero'
          value={genero}
          onChange={item => { setApoio(item.value); }}
        />
        
        <View style={styles.buttonAcess}>
          <TouchableOpacity style={styles.button} onPress={handleAdvance}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
          
          {/* <TouchableOpacity style={styles.buttonSignIn} onPress={handleSubmit}> */}
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonSignInText}>Já possui conta? Entre</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 16,
    marginTop: 12,
    marginBottom: 10
  },

  input: {
    borderBottomWidth: 1,
    height: 20,
    marginTop: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#EEE"
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
