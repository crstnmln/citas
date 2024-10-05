import { React } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Paciente = ({ item, setModalVisible, pacienteEditar}) => {

    const { mascota, date, nombre, telefono, typeTT, id } = item

    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        return nuevaFecha.toLocaleDateString('es-ES', opciones)
    }

    return (
        <View
            style={styles.contenedor}>
            <Text style={styles.label}>{mascota}</Text>
            <Text style={styles.texto}>{nombre}</Text>
            <Text style={styles.texto}>{formatearFecha(date)}</Text>
            <Text style={styles.texto}>{telefono}</Text>
            <Text style={styles.texto}>{typeTT}</Text>

            <View
                style={styles.EditDelete}
            >

                <Pressable
                    style={[styles.btn , styles.edit ]}
                    onPress={() => {
                        pacienteEditar(id)    
                        setModalVisible (true)}
                    
                    
                    }

                >
                    <Text
                        style={styles.texto}
                    >Modifier</Text>
                </Pressable>

                <Pressable 
                style={[styles.btn , styles.delete ]}
                >
                    <Text
                        style={styles.texto}
                    >Effacer</Text>
                </Pressable>



            </View>

        </View>
    )
    // test

}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 20,
        marginHorizontal: 35,
        backgroundColor: '#1a999f',
        padding: 20,
        borderRadius: 8
    },
    label: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        padding: 10
    },
    texto: {
        color: '#fff',
        marginLeft: 20,
        textTransform: 'capitalize',
        fontWeight: '600',
    },
    EditDelete:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginTop: 5,
        

    },
    btn:{},
    edit:{},
    delete:{}




})

export default Paciente