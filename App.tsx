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
    const [paciente, setPaciente] = useState({});
    const [changeValue, setChangeValue] = useState<FlexStyle["justifyContent"]>("center");

    //console.log("aqui inicia en ", modalVisible);

    const pacienteEditar = (id: number) => {
        const pacienteEditar = pacientes.filter((paciente) => paciente.id === id);
        setPaciente(pacienteEditar[0]);
    };
    // const nuevaCitaHandler = () => {
    //   console.log(`le diste click a nueva cita`)
    // }
    // esto se comporta como un div

    // if (pacientes.length === 0) {
    //  console.log(styles.mainBlock.)
    //  }

    useEffect(() => {
        if (pacientes.length !== 0) {
            console.log(pacientes);
            setChangeValue("flex-start");
        } else {
            console.log(pacientes);
            setChangeValue("center");
        }
    }, [pacientes]);

    return (
        <SafeAreaView style={[styles.container, { justifyContent: changeValue }]}>
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
                (
                    (
                        <FlatList
                            style={styles.lista}
                            data={pacientes}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return <Paciente

                                    item={item}
                                    setModalVisible={setModalVisible}
                                    pacienteEditar={pacienteEditar}
                                />;
                            }}
                        />
                    ))
            ) : (
                <></>
            )}  

            <Formulario 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
            pacientes={pacientes} 
            setPacientes={setPacientes} 
            paciente={paciente}/>
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
        color: "#1a999f",
        fontWeight: "bold",
        marginHorizontal: 30,
    },
    button1: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#1a999f",
        marginHorizontal: 30,
        marginTop: 20,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25,
        color: "#fff",
    },
    lista: {
        marginTop: 20,
    },
});

export default App;
