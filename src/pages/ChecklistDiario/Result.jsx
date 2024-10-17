import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Result(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.resultRecommendation}>
      <Text style={styles.title}>Recomendações</Text>
      <Text style={styles.resultRecommendationText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestias possimus quisquam eos dolor! Quia unde consectetur hic, incidunt magnam, sed quam quo facilis tenetur inventore possimus doloribus atque dolorem!</Text>
      <Text style={styles.resultRecommendationText}>Imagens de Frutas</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  resultRecommendation: {
    flex: 1,
    backgroundColor: "#C19B8F",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    // padding: 4,
    height: "auto"
  },
  
  title: {
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#FFF",
    padding: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF"
  },

  resultRecommendationText: {
    backgroundColor: "#FFFFAD",
    // backgroundColor: "#FBFBB7",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 12,
    marginTop: 20,
    padding: 6
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
});
