import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'


export default function ItemMenu(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(props.navigateTo)}>

        <View style={styles.icon}>
          <Feather style={styles.home} name={props.icon} size={36} color="#000" />
          {/* {icon} */}
        </View>

        <Text style={styles.iconName}>{props.itemTitle}</Text>

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
    width: 70,
    height: 40,
    fontSize: 12,
    textAlign: "center"
  }
})