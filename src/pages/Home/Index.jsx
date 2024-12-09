import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
import Header from '../../components/Header'
import ItemMenu from '../../components/ItemMenu'

export default function Index() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <Header />
      
      <View style={styles.menu}>

        <View style={styles.menuTitle}>
          <Text style={styles.categories}>Categorias</Text>
          <Entypo style={styles.threePoints} name="dots-three-horizontal" size={24} color="black" />
        </View>

        <View style={styles.itemRow}>
          <ItemMenu itemTitle="Checklist diário" navigateTo="Checklist" icon="file-text"></ItemMenu>
          <ItemMenu itemTitle="Cálculo do IMC" navigateTo="IMC" icon="file-plus"></ItemMenu>
          <ItemMenu itemTitle="Dados Cadastrais" navigateTo="IMC" icon="user"></ItemMenu>
          <ItemMenu itemTitle="TESTE DO ANPREC" navigateTo="QuestionarioANPREC" icon="check-square"></ItemMenu>
        </View>

        <View style={styles.itemRow}>
          <ItemMenu itemTitle="Receitas" navigateTo="IMC" icon="coffee"></ItemMenu>
          <ItemMenu itemTitle="Consumo de água" navigateTo="IMC" icon="droplet"></ItemMenu>
          <ItemMenu itemTitle="Autoexame" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="Alimentos cancerígenos" navigateTo="IMC"></ItemMenu>
        </View>

        <View style={styles.itemRow}>
          <ItemMenu itemTitle="Ambientes alimentares" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="Manejo dos sintomas" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="Guia Alimentar" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="Movimente-se" navigateTo="IMC"></ItemMenu>
        </View>

        <View style={styles.itemRow}>
          <ItemMenu itemTitle="E-Books" navigateTo="IMC" icon="book"></ItemMenu>
          <ItemMenu itemTitle="Como ler um rótulo?" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="SuperTeg" navigateTo="IMC"></ItemMenu>
          <ItemMenu itemTitle="Amparo" navigateTo="IMC"></ItemMenu>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  menu: {
    flex: 4,
    // justifyContent: "center",
    // backgroundColor: "#aaa",
    paddingStart: "8%",
    paddingEnd: "8%",
  },

  menuTitle: {
    // backgroundColor: "#fda",
    // paddingTop: "5%",
    marginTop: "10%",
    marginBottom: "10%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },

  categories: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -25
  }
})