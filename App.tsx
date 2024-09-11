/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, Pressable, Modal } from "react-native";

import Formulario from "./src/components/Formulario";

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
    //los hooks se colocan en la parte superior

    const [modalVisible, setModalVisible] = useState(false);
    console.log("aqui inicia en ", modalVisible);

    // const nuevaCitaHandler = () => {
    //   console.log(`le diste click a nueva cita`)
    // }
    /* esto se comporta como un div */
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Rendez-vous pour ton animaux de compagnie</Text>
            <Pressable
                onPressOut={() => {
                    setModalVisible(!modalVisible);
                    console.log("aqui termina en ", modalVisible);
                }}
                style={styles.button1}
            >
                <Text style={styles.buttonText}>Prenez rendez-vous</Text>
            </Pressable>

            <Formulario modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
            />
        </SafeAreaView>
    );
};

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}); */

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },

    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#33c8ff",
        fontWeight: "bold",
    },
    button1: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#33c8ff",
        marginHorizontal: 30,
        marginTop: 20,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25,
        color: "#fff",
    },
});

export default App;
