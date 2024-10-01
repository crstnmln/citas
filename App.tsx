/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from "react";

import { SafeAreaView, StyleSheet, Text, View, Pressable, FlatList, FlexStyle } from "react-native";

import Formulario from "./src/components/Formulario";
import Paciente from "./src/components/Pacientes";

const App = () => {
    //los hooks se colocan en la parte superior

    const [modalVisible, setModalVisible] = useState(false);
    const [pacientes, setPacientes] = useState([]);
    const [changeValue, setChangeValue] = useState<FlexStyle['justifyContent']>('center');
    //console.log("aqui inicia en ", modalVisible);
    let verficado;

    // const nuevaCitaHandler = () => {
    //   console.log(`le diste click a nueva cita`)
    // }
    // esto se comporta como un div

    // if (pacientes.length === 0) {
    //  console.log(styles.mainBlock.)
    //  }

    useEffect(() => {
        if (pacientes.length !== 0) {
            setChangeValue("flex-start");
        } else {
            setChangeValue("center");
        }
    }, [pacientes]);

    return (
        <SafeAreaView style={(verficado = [styles.mainBlock, { justifyContent: changeValue }])}>
            {/* <View style={[styles.mainBlock, { justifyContent: changeValue }]}>   { ...styles.container, justifyContent: changeValue } */}
            <View style={styles.mainBlock}>
                <Text style={styles.title}>Prends ton rendez-vous pour ton animaux de compagnie</Text>
                <Pressable
                    onPressOut={() => {
                        setModalVisible(!modalVisible);
                        //console.log("aqui termina en ", modalVisible);
                    }}
                    style={styles.button1}
                >
                    <Text style={styles.buttonText}>Prenez rendez-vous</Text>
                </Pressable>
            </View>

            {pacientes.length !== 0 ? (
                (console.log(styles.container, changeValue),
                (
                    <FlatList
                        data={pacientes}
                        keyExtractor={(item) => item.id}
                        renderItem={() => {
                            return <Paciente />;
                        }}
                    />
                ))
            ) : (
                <Text> No hay pacientes </Text>

                // <Text>No hay pacientes </Text>
            )}

            <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} pacientes={pacientes} setPacientes={setPacientes} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: "#fff",
        flex: 1,
        //justifyContent: changeValue
    },

    mainBlock: {
        // flex: 1,
        // justifyContent: changeValue
        // alignItems: 'center'
    },

    title: {
        textAlign: "center",
        fontSize: 25,
        color: "#33c8ff",
        fontWeight: "bold",
        marginHorizontal: 30,
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
