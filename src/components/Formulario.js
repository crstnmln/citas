import React, { useState, useEffect, useLayoutEffect } from "react";
import { Modal, Text, SafeAreaView, StyleSheet, Button, Pressable, ScrollView, TextInput, View, Alert } from "react-native";
import DatePicker from "react-native-date-picker";

const Formulario = ({ modalVisible, setModalVisible, pacientes, setPacientes, paciente: pacienteObj }) => {
    const [mascota, setMascota] = useState("");
    const [id, setId] = useState("");
    const [date, setDate] = useState(new Date());
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [typeTT, setTypeTT] = useState("");

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setMascota(pacienteObj.mascota);
            setId(pacienteObj.id);
            setDate(pacienteObj.date);
            setNombre(pacienteObj.nombre);
            setCorreo(pacienteObj.correo);
            setTelefono(pacienteObj.telefono);
            setTypeTT(pacienteObj.typeTT);

            console.log("si hay algo");
        } else {
            console.log("no hay algo");
        }
    }, []);

    const hanldeNewApp = () => {
        if ([mascota, nombre, correo, telefono, typeTT, date].includes("")) {
            Alert.alert(
                "Error",
                "Todos los Campos son obligatorios",
                [{ text: "OK" }]
                //title:'la juega', el primero es el de cancelar y el segundo es de ok
                //  con tres el primero es recordar despues  luego cancelar y luego ok
            );
            return;
        }

        const pacienteAgendado = {
            // id: Date.now(),
            mascota,
            nombre,
            correo,
            telefono,
            date,
            typeTT,
        };

        if (id) {
            pacienteAgendado.id = id;

            const pacientesActualizados = pacientes.map( pacienteState  => 
                pacienteState.id === pacienteAgendado.id ? pacienteAgendado :
                pacienteState                  
            )

            // console.log( 'este es el objeto que estoy editando')
            // console.log(pacientesActualizados)

            //     return 


        } else {
            pacienteAgendado.id = Date.now();
            setPacientes([...pacientes, pacienteAgendado]);
            setModalVisible(!modalVisible);
        }


        Alert.alert("Mascota agregada");

        setPacientes([...pacientes, pacienteAgendado]);
        setModalVisible(!modalVisible);

        setMascota("");
        setCorreo("");
        setDate(new Date());
        setNombre("");
        setTelefono("");
        setTypeTT("");

    };


    //tarea hahahah logica inexistente
    // const verifPaciente = (arreglo) => {
    //     arreglo.forEach(objeto => {
    //         if (objeto.telefono === pacienteAgendado.telefono && objeto.mascota === pacienteAgendado.mascota) {

    //             Alert.alert(
    //                 'Error',
    //                 'Paciente ya agendado!',
    //                 [{ text: 'OK', }]
    //                 //title:'la juega', el primero es el de cancelar y el segundo es de ok
    //                 //  con tres el primero es recordar despues  luego cancelar y luego ok

    //             );
    //             console.log(`esta es la que esta en el arreglo: propietario=${objeto.nombre} nombre de mascota= ${objeto.mascota}  \n y esta es la que esta en el paciente que recien agrego: propietario=${pacienteAgendado.nombre} nombre de mascota= ${pacienteAgendado.mascota} `);
    //             return;
    //         } else {
    //             console.log(`paciente agregado sin duplicar`);
    //         }

    //     });

    // }
    // verifPaciente(pacientes);






    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView>
                    <View>
                        <View style={styles.viewCancel}>
                            <Pressable
                                style={styles.cancelContainer}
                                onPressOut={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <View style={styles.btnCanceldiv}>
                                    <Text style={styles.btnCancel}>x</Text>
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.titulo}>REMPLIR FORMULAIRE</Text>
                    </View>
                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Prenom de ton bebe</Text>
                        <TextInput style={styles.input} value={mascota} onChangeText={setMascota} />
                    </View>

                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Prenom de Papa/Mama</Text>
                        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />
                    </View>

                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Couriel</Text>
                        <TextInput style={styles.input} value={correo} onChangeText={setCorreo} />
                    </View>

                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Telephone</Text>
                        <TextInput style={styles.input} value={telefono} onChangeText={setTelefono} />
                    </View>

                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Date</Text>

                        <View style={styles.dateContenedor}>
                            <DatePicker
                                date={date}
                                onDateChange={(date) => {
                                    setDate(date);
                                }}
                                locale="fr"
                                mode="date"
                                dividerColor="#1a999f"
                            // theme='auto'
                            //minimumDate='new Date("2024-01-01")'
                            // mode="date"
                            />
                        </View>
                    </View>
                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Type de toiletage</Text>
                        <TextInput style={styles.input} value={typeTT} onChangeText={setTypeTT} />
                    </View>

                    <View>
                        <Pressable style={styles.btnNewApp} onPress={hanldeNewApp}>
                            <Text style={styles.btnNewAppText}>Confirmer</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#1a999f",
        flex: 1,
        paddingTop: 35,
    },
    viewCancel: {
        flexDirection: "row-reverse",
    },

    cancelContainer: {
        //  alignSelf:'flex-end',

        borderRadius: 20,
        backgroundColor: "#f59e0b",
        marginRight: 30,
        width: 36,
        height: 36,
    },
    btnCanceldiv: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnCancel: {
        color: "#fff",
        //padding: 10, revisar si puedo agregar un padding vertical para alinearlo
        fontSize: 25,
        fontWeight: "bold",

        //textAlignVertical: "center",

        // paddingTop:3,
        // paddingBottom: 3,
        // paddingHorizontal: 8,
    },
    titulo: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
    },
    contenedor: {
        marginTop: 15,
        marginHorizontal: 30,
    },
    label: {
        fontSize: 25,
        color: "#fff",
    },
    input: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#fff",
    },
    dateContenedor: {
        color: "#fff",
        dividerColor: "#1a999f",
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 5,
    },
    btnNewApp: {
        marginVertical: 50,
        backgroundColor: "#f59e0b",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 5,
    },
    btnNewAppText: {
        textAlign: "center",
        fontSize: 25,
        color: "#fff",
    },
});

export default Formulario;
