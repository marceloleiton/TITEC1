import React from 'react';
import {Text, ImageBackground,TouchableOpacity,Pressable} from 'react-native';
import styles from './Eventostyles';
import {useNavigation} from '@react-navigation/native';
const Evento = (props) => {
  const navigation = useNavigation();
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol")
    imageURL = require("../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol")
    imageURL = require("../../assets/images/basquetbol.jpg")
  else if (Evento.nombre_actividad === "Natacion" || Evento.nombre_actividad === "Natación" )
    imageURL = require("../../assets/images/natacion.jpg")
  
  return (

      <ImageBackground blurRadius={5} source={imageURL} resizeMode="cover" style={styles.image}>
      <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>
      <Text style={styles.description} >{Evento.descripción}</Text>
      <Text style={styles.cupos} >Cupos: {Evento.cupos}</Text>
      <Text style={styles.requisitos} >Requisitos: {Evento.requisitos}</Text>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Form')}>
        <Text style={styles.searchButtonText}>inscribirse</Text>
      </Pressable>
      </ImageBackground>
 
  );
};

export default Evento;