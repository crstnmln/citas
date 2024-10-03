import { React } from "react";
import { Text } from "react-native";

const Paciente = ({item}) => {
    const {mascota, date} = item
    console.log(mascota)
return (
    <Text>{item.mascota}</Text>
)
// test

}

export default Paciente