import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Index() {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image style={styles.backgroundImage} source={require('../../assets/images/WelcomeBackground2x.png')} resizeMode='contain' />
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} resizeMode='contain' />
        <Text style={styles.title}>MamaTech</Text>
        <Text style={styles.subTitle}>Monitore e organize sua saúde</Text>
      </View>

      <Animatable.View animation="fadeInUp" delay={100} style={styles.containerText}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Text style={styles.buttonText}>Entrar</Text>
            <Image source={require('../../assets/images/dash.png')}/>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonSignUpText}>Não possui uma conta? Registre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C19B8F" 
  },

  containerLogo: {
    flex: 2,
    // backgroundColor: "#C19B8F",
    justifyContent: "center",
    alignItems: "center"
  },

  backgroundImage: {
    width: "100%",
    // height: "100%",
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // zIndex: 1,
    resizeMode: 'contain'
  },

  logo: {
    width: "100%",
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    top: "10%"
  },

  containerText: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "#fff",
    borderTopLeftRadius: 25,  
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 12,
    color: "#5F5D19",
    // fontFamily: 'Anton'
    position: 'absolute',
    zIndex: 2,
    top: "50%"
  },

  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#5F5D19",
    // fontFamily: 'anton'
    position: 'absolute',
    zIndex: 2,
    top: "65%"
  },

  text: {
    color: "#a1a1a1"
  },

  button: {
    // position: "absolute",
    backgroundColor: "#5F5D19",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    // bottom: "15%",
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 14,
    width: "60%",
  },

  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 8,
    marginBottom: 4
  },

  buttonSignUp: {
    alignSelf: "center",
    marginTop: 14
  },

  buttonSignUpText: {
    color: "#a1a1a1",
    borderBottomWidth: 1,
    borderColor: "#a1a1a1"
  }
})