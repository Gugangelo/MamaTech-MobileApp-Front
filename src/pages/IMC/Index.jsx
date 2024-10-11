import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, StyleSheet } from "react-native"
import Header from '../../components/Header'
import ResultIMC from './ResultIMC';

export default function Form() {

    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [IMC, setIMC] = useState()
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState()
    const [resultMessage, setResultMessage] = useState()

    function IMCCalculator(){
        let heightFormat = height.replace(",", ".")
        if (heightFormat.length > 2) {
            let formattedValue = heightFormat.slice(0, 1) + '.' + heightFormat.slice(1);
            heightFormat = formattedValue
        }
        
        console.log(heightFormat)
        let totalIMC = ((weight/(heightFormat*heightFormat)).toFixed(2))

        if (totalIMC <= 18.5) {
            setResultMessage("Abaixo do normal");
        } else if (totalIMC > 18.5 && totalIMC <= 24.9) {
            setResultMessage("Normal");
        } else if (totalIMC >= 25 && totalIMC <= 29.9) {
            setResultMessage("Sobrepeso");
        } else if (totalIMC >= 30 && totalIMC <= 34.9) {
            setResultMessage("Obesidade grau 1");
        } else if (totalIMC >= 35 && totalIMC <= 39.9) {
            setResultMessage("Obesidade grau 2");
        } else {
            setResultMessage("Obesidade grau 3");
        }
        setIMC(totalIMC)
    }

    function verificationIMC(){ // Verificando se os campos estão nulos
        if(IMC == null){
            Vibration.vibrate()
            setErrorMessage("*Campo obrigatório")
        }
    }

    function validationIMC(){
        if(weight != null && height != null){
            IMCCalculator()
            console.log(height)
            console.log(weight)
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é igual a:")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }
        else {
            verificationIMC() // Quando os valores forem nulos ele executa daqui pra baixo
            setIMC(null)
            setMessageIMC("Calcular:")
            setTextButton("Preencha o peso e altura")
        }
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.formContext}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>CALCULADORA DE IMC</Text>
                </View>

                <Pressable style={styles.form} onPress={Keyboard.dismiss}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setHeight} value={height}
                     placeholder='Ex: 1.75' keyboardType='numeric'/>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setWeight} value={weight}
                     placeholder='Ex: 75.365' keyboardType='numeric'/>

                    { IMC == null
                    ?
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                        <Text style={styles.buttonCalculatorText}>{textButton}</Text>
                    </TouchableOpacity>
                    :
                    <View>
                        <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                            <Text style={styles.buttonCalculatorText}>{textButton}</Text>
                        </TouchableOpacity>
                        <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} resultMessage={resultMessage}/>
                    </View>
                    }
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        height: "auto"
    },

    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },

    title: {
        color: "#559955",
        fontSize: 24,
        fontWeight: "bold"
    },

    formContext: {
        // width: "100%",
        height: "auto",
        flex: 4,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 50,
        marginTop: 30,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 10,
        padding: 10
    },

    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#F9F9F9",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },

    buttonCalculator: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#FF0043",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    buttonCalculatorText: {
        fontSize: 20,
        color: "#FFFFFF"
    }
})