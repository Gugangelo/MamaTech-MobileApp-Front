import React from 'react';
import { View, Text, TouchableOpacity, Share, StyleSheet } from "react-native"

export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultIMC
        })
    }

    return (
        <View style={styles.contextIMC}>
            {/* <View style={styles.boxShareButton}>
                {props.resultIMC != null ?
                    <TouchableOpacity style={styles.shared} onPress={onShare}>
                        <Text style={styles.sharedText}>Compartilhar</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View> */}

            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{props.resultIMC}</Text>
            <Text style={styles.information}>{props.resultMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contextIMC: {
        // flex: 1,
        width: "100%",
        height: "auto",
        alignItems: "center",
        marginTop: 15,
        padding: 15,
        borderRadius: 50,
        backgroundColor: "lightblue"
    },

    numberIMC: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000"
    },

    information: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF0043"
        // color: "#000"
    },
})