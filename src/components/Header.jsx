import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'


export default function Header() {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.homeAndSearch}>
          <TouchableOpacity>
            <Feather style={styles.home} name="home" size={36} color="#000" />
          </TouchableOpacity>

          <View style={styles.search}>
            <TextInput style={styles.searchText} placeholder='Pesquisar'></TextInput>
          </View>
        </View>

        <View style={styles.userData}>
          <Text style={styles.userName}>Olá, Usuário</Text>
          <TouchableOpacity>
            <FontAwesome style={styles.userImage} name="user-circle" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: "100%",
    padding: 10,
    backgroundColor: "#C19B8F",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 60,  
    borderBottomRightRadius: 60,
    paddingStart: "5%",
    paddingEnd: "5%",
    elevation: 5,
    shadowColor: '#000'
  },

  homeAndSearch: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },

  home: {
    marginBottom: 4
  },

  search: {
    width: 280,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#e4e4e6",
    borderRadius: 10,
    elevation: 5
    // fontFamily: 'Anton'
  },

  searchText: {
    fontSize: 16,
    padding: 8,
    paddingLeft: 12,
  },

  userData: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 5,
    paddingLeft: 12,
    paddingRight: 12
  },

  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5
    // fontFamily: 'anton'
  },

  userImage: {
  },
})