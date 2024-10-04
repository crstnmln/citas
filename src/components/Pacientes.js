import { React } from "react";
import { Text, View, StyleSheet } from "react-native";

const Paciente = ({item}) => {
    
    const {mascota, date, nombre, telefono, typeTT} = item
    
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

    </View>
)
// test

}

const styles = StyleSheet.create({
contenedor:{marginTop: 20,
    marginHorizontal: 35,
    backgroundColor: '#1a999f',
    padding:20,
    borderRadius: 8
},
label:{
    textAlign: 'center',
    fontSize:25,
    marginBottom: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    padding:10
},
texto:{color: '#fff',
    marginLeft: 20,
    textTransform: 'capitalize',
    fontWeight: '600',
},




})

export default Paciente