import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'


export default function ItemMenu() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.item}>

        <View style={styles.icon}>
          <Feather style={styles.home} name="home" size={36} color="#000" />
          {/* {icon} */}
        </View>

        <Text style={styles.iconName}>Dados Pessoais</Text>

      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    // backgroundColor: "#666",
    height: 100,
  },

  home: {
  },

  item: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#46bf17",
    borderRadius: 10
  },

  iconName: {
    width: 60,
    textAlign: "center"
  }
})