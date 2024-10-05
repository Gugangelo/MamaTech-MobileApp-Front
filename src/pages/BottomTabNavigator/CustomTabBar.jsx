import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) { // Caso o item não esteja em foco e não tenha comportamento padrão
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return(
            <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={{ padding: 6 }}>
              <View style={[styles.innerTabButton, { backgroundColor: isFocused ? "#f8e0fd" : "transparent" }]}>
                <Feather name={options.tabBarIcon} size={36} color={isFocused ? '#673ab7' : '#222'}/>
              </View>
            </View>
          </TouchableOpacity>
          )

        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },

  content: {
    flexDirection: "row",
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    gap: 30,
    borderRadius: 45,
    
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    elevation: 4,
    shadowColor: "#000", // IOS
    shadowOffset: {
      width: 0, 
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,  
  },
  
  tabButton: {

  },

  innerTabButton: { 
    padding: 6, 
    borderRadius: 45
  }
})