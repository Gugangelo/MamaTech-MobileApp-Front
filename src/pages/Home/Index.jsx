import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
        </View>

        <View style={styles.itemRow}>
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
          <ItemMenu></ItemMenu>
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