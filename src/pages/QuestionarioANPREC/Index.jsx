import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext'


export default function Index() {
  const navigation = useNavigation()

  const [peso, setPeso] = useState(null);
  const [IMC, setIMC] = useState(null);
  const [circunferencia, setCircunferencia] = useState(null);
  // SEÇÃO
  const [freqAtivFis, setFreqAtivFis] = useState(null);
  const [durIntFis, setDurIntFis] = useState(null);
  const [horasSedentarismo, setHorasSedentarismo] = useState(null);
  
  const [consumoGraos, setConsumoGraos] = useState(null);
  const [consumoHortalicas, setConsumoHortalicas] = useState(null);
  const [consumoLegumes, setConsumoLegumes] = useState(null);

  const [freqFastFood1, setFreqFastFood1] = useState(null);
  const [freqFastFood2, setFreqFastFood2] = useState(null);

  const [porcaoCarne, setPorcaoCarne] = useState(null);
  const [freqCarne, setFreqCarne] = useState(null);

  const [freqSucoDoce, setFreqSucoDoce] = useState(null);

  const [freqBebidaAlcoolica, setFreqBebidaAlcoolica] = useState(null);
  const [dosesBebidaAlcoolica, setDosesBebidaAlcoolica] = useState(null);

  const [consumoVitaminas, setConsumoVitaminas] = useState(null);


  const aumentoPeso = [
    { label: 'Sim', value: '0' },
    { label: 'Não', value: '1' },
    { label: 'Não lembro/Não sei', value: '0' }
  ];

  const frequenciaAtividadeFisica = [
    { label: 'Nunca', value: '0' },
    { label: '1-2 vezes por semana', value: '0.25' },
    { label: '3-4 vezes por semana', value: '0.5' },
    { label: 'Diariamente', value: '1' },
  ];

  const duracaoAtividadeFisica = [
    { label: 'Menos de 45 minutos/dia de atividade moderada (caminhada, passeio de bicicleta, afazeres domésticos e de jardinagem, atividades de recreação) ', value: '0' },
    { label: 'Mais de 45 minutos/dia e menos de 60 minutos/dia de atividade moderada (caminhada, passeio de bicicleta, afazeres domésticos e de jardinagem, atividades de recreação)', value: '0.5' },
    { label: 'Mais de 60 minutos/ dia de atividade moderada (caminhada, passeio de bicicleta, afazeres domésticos e de jardinagem, atividades de recreação) ou vigorosa ', value: '1' },
  ];

  const horasSedentario = [
    { label: 'Menos do que 1 hora', value: '1' },
    { label: 'Entre 1-3 horas', value: '0.5' },
    { label: 'Mais do que 3 horas', value: '0' }
  ];

  const frequenciaRefeicoes = [
    { label: 'Nunca', value: '0' },
    { label: 'Raramente', value: '0.25' },
    { label: '2-3 vezes por semana', value: '0.5' },
    { label: 'Diariamente', value: '0.75' },
    { label: 'Sempre', value: '1' },
  ];

  const qtdPorcoes = [
    { label: '0 porções', value: '0' },
    { label: '1-2 porções', value: '0.25' },
    { label: '3-4 porções', value: '0.5' },
    { label: '5 ou mais porções', value: '1' },
  ];

  const frequenciaRefeicoesProcessadas = [
    { label: 'Nunca', value: '1' },
    { label: 'Raramente', value: '0.5' },
    { label: '2-3 vezes por semana', value: '0.25' },
    { label: 'Diariamente', value: '0' },
  ];

  const consumoCarne = [
    { label: 'Não consome', value: '1' },
    { label: '1-2 porções', value: '0.5' },
    { label: 'Mais de 3 porções', value: '0' },
  ];

  const frequenciaAlcool = [
    { label: 'Nunca', value: '1' },
    { label: '1 vez por mês', value: '0.75' },
    { label: '1-3 vezes por mês', value: '0.5' },
    { label: '1-4 vezes por mês', value: '0.25' },
    { label: 'Diariamente', value: '0' },
  ];

  const dosesAlcool = [
    { label: 'Até 2 doses', value: '1' },
    { label: '3-4 doses', value: '0.5' },
    { label: '5-11 doses', value: '0.25' },
    { label: '12 ou mais', value: '0' },
  ];

  const simNao = [
    { label: 'Sim', value: '0' },
    { label: 'Não', value: '1' },
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
        <Text style={styles.title}>Questionário ANPREC</Text>
      </Animatable.View>

      <ScrollView style={styles.containerForm}>
        {/* Seção 1 GERENCIAMENTO DO PESO */}
        <Text style={styles.input}>GERENCIAMENTO DO PESO</Text>

        <Dropdown
          style={styles.dropdown}
          data={aumentoPeso}
          labelField="label"
          valueField="value"
          placeholder='Seu peso aumentou na idade adulta?'
          value={peso}
          onChange={item => { setPeso(item.value); }}
        />

        <TextInput placeholder='Seu IMC atual' style={styles.input} keyboardType='numeric' />

        <TextInput placeholder='Circunferência da cintura (cm)' style={styles.input} keyboardType='numeric' />

        {/* Seção 2 PRÁTICA DE ATIVIDADE FÍSICA */}
        <Text style={styles.input}>PRÁTICA DE ATIVIDADE FÍSICA</Text>

        <Dropdown
          style={styles.dropdown}
          data={frequenciaAtividadeFisica}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você pratica atividade/exercício físico?'
          value={freqAtivFis}
          onChange={item => { setFreqAtivFis(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={duracaoAtividadeFisica}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='A duração e intesidade da sua atividade física é:'
          value={durIntFis}
          onChange={item => { setDurIntFis(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={horasSedentario}
          labelField="label"
          valueField="value"
          placeholder='Quantas horas por dia você fica sentado, assistindo TV, usando o computador, tablet, smartphone, ou no videogame?'
          value={horasSedentarismo}
          onChange={item => { setHorasSedentarismo(item.value); }}
        />

        {/* Seção 3 CONSUMO DE GRÃOS INTEGRAIS, LEGUMES, FRUTAS E FEIJÕES */}
        <Text style={styles.input}>CONSUMO DE GRÃOS INTEGRAIS, LEGUMES, FRUTAS E FEIJÕES</Text>

        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoes}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Na maioria das suas refeições, com que frequência você consome arroz ou macarrão integral, aveia, trigo, milho, gergelim, linhaça, quinoa ou chia ao invés de arroz branco, macarrão comum, farinha de mandioca e pão branco?'
          value={consumoGraos}
          onChange={item => { setConsumoGraos(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoes}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Na maioria das suas refeições, com que frequência você consome hortaliças verdes folhosas, brócolis, quiabo, berinjela, repolho, cenoura, beterraba e outros legumes sem amido, frutas e feijão, fava, grão de bico ou ervilhas?'
          value={consumoHortalicas}
          onChange={item => { setConsumoHortalicas(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={qtdPorcoes}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Quantas porções diferentes de legumes sem amido como maxixe, abobrinha, jerimum, cenoura, repolho, tomate, beterraba, vagem e de frutas você consome diariamente?'
          value={consumoLegumes}
          onChange={item => { setConsumoLegumes(item.value); }}
        />

        {/* Seção 4 CONSUMO DE “FAST FOODS” E ALIMENTOS PROCESSADOS RICOS EM GORDURAS, AMIDO OU AÇÚCARES */}
        <Text style={styles.input}>CONSUMO DE “FAST FOODS” E ALIMENTOS PROCESSADOS RICOS EM GORDURAS, AMIDO OU AÇÚCARES</Text>
        
        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoesProcessadas}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você consome refeições prontas, petiscos, hambúrguer, pedaços de frango frito, batatafrita, refrigerante, milk-shake?'
          value={freqFastFood1}
          onChange={item => { setFreqFastFood1(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoesProcessadas}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você consome alimentos como batata-frita, chips, produtos feitos com farinha branca como pão, macarrão e pizza, bolos, doces, biscoitos e outros alimentos de padaria e confeitaria (doces)?'
          value={freqFastFood2}
          onChange={item => { setFreqFastFood2(item.value); }}
        />
        
        {/* Seção 5 CONSUMO DE CARNE VERMELHA E CARNE PROCESSADA */}
        <Text style={styles.input}>CONSUMO DE CARNE VERMELHA E CARNE PROCESSADA</Text>
        
        <Dropdown
          style={styles.dropdown}
          data={consumoCarne}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Quantas porções carne bovina ou carne de porco ou carne de carneiro/cabra/ovelha você consome por semana?'
          value={porcaoCarne}
          onChange={item => { setPorcaoCarne(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoesProcessadas}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você consome salame, bacon, salsicha, linguiça, presunto, carne salgada?'
          value={freqCarne}
          onChange={item => { setFreqCarne(item.value); }}
        />

        {/* Seção 6 CONSUMO DE BEBIDAS ADOÇADAS COM AÇÚCAR */}
        <Text style={styles.input}>CONSUMO DE BEBIDAS ADOÇADAS COM AÇÚCAR</Text>
        
        <Dropdown
          style={styles.dropdown}
          data={frequenciaRefeicoesProcessadas}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você bebe sucos de frutas industrializados ou naturais (com ou sem adição de açúcar), refrigerantes, bebidas esportivas energéticas, café ou chá com adição de açúcar ou mel?'
          value={freqSucoDoce}
          onChange={item => { setFreqSucoDoce(item.value); }}
        />

        {/* Seção 7 CONSUMO DE BEBIDA ALCOÓLICA */}
        <Text style={styles.input}>CONSUMO DE BEBIDA ALCOÓLICA</Text>
        
        <Dropdown
          style={styles.dropdown}
          data={frequenciaAlcool}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Com que frequência você geralmente bebe cerveja, vinho, cachaça, whisky, vodca, licor ou qualquer outra bebida com fonte de álcool?'
          value={freqBebidaAlcoolica}
          onChange={item => { setFreqBebidaAlcoolica(item.value); }}
        />

        <Dropdown
          style={styles.dropdown}
          data={dosesAlcool}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Nos dias em que você ingere bebida alcoólica, quantas doses você geralmente bebe?'
          value={dosesBebidaAlcoolica}
          onChange={item => { setDosesBebidaAlcoolica(item.value); }}
        />
        
        {/* Seção 8  USO DE SUPLEMENTOS ALIMENTARES PARA A PREVENÇÃO DO CÂNCER */}
        <Text style={styles.input}>USO DE SUPLEMENTOS ALIMENTARES PARA A PREVENÇÃO DO CÂNCER</Text>
        
        <Dropdown
          style={styles.dropdown}
          data={simNao}
          labelField="label"
          valueField="value"
          maxHeight={200}
          placeholder='Você consome algum suplemento alimentar como ferro, vitamina D, vitamina B12, polivitamínicos e minerais, vitamina C para prevenir o câncer?'
          value={consumoVitaminas}
          onChange={item => { setConsumoVitaminas(item.value); }}
        />

        <View style={styles.buttonAcess}>
          <TouchableOpacity style={styles.button} onPress={handleAdvance}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
          
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
    height: "auto",
    marginTop: 25,
    marginBottom: 12,
    fontSize: 16
  },

  dropdown: {
    marginTop: 10,
    marginBottom: 10,
    height: "auto", 
    minHeight: 50,
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
