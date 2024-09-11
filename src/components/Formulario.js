import React, { useState } from "react";
import { Modal, Text, SafeAreaView, StyleSheet, Button, Pressable, ScrollView, TextInput, View } from "react-native";
import DatePicker from "react-native-date-picker";

const Formulario = ({ modalVisible, setModalVisible }) => {
    const [paciente, setPaciente] = useState("");
    const [date, setDate] = useState(new Date());
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");

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
                        <Text style={styles.titulo}>Remplir ton formulaire</Text>
                    </View>
                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Prenom de ton bebe</Text>
                        <TextInput style={styles.input} value={paciente} onChangeText={setPaciente} />
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
                            />
                        </View>
                    </View>

                    <View style={styles.contenedor}>
                        <Text style={styles.label}>Toiletage a faire</Text>
                        <TextInput style={styles.input} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#33c8ff",
        flex: 1,
    },
    viewCancel: {
        flexDirection: "row-reverse",
    },

    cancelContainer: {
        //  alignSelf:'flex-end',

        borderRadius: 20,
        backgroundColor: "#99e1fc",
        marginRight: 30,
        width: 36,
        height: 36,
    },
     btnCanceldiv:{

        justifyContent:'center',
    alignItems: 'center'
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
        marginHorizontal: 20,
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
});

export default Formulario;
