import React from 'react';
import {Text, ImageBackground,TouchableOpacity,Pressable} from 'react-native';
import styles from './Eventostyles';
import {useNavigation} from '@react-navigation/native';

const Evento = (props) => {
  const navigation = useNavigation();
  const Evento = props.evento;

  let imageURL = "";

  // Condiciones para el fondo en los talleres
  if (Evento.nombre_actividad === "Futbol" || Evento.nombre_actividad === "Fútbol" || Evento.nombre_actividad === "fútbol" || Evento.nombre_actividad === "futbol")
    imageURL = require("../../assets/images/futbol.jpg")
  else if (Evento.nombre_actividad === "Basquetbol" || Evento.nombre_actividad === "basquetbol" ||Evento.nombre_actividad === "Básquetbol" || Evento.nombre_actividad === "básquetbol")
    imageURL = require("../../assets/images/basquetbol.jpg")
  else if (Evento.nombre_actividad === "Natacion" || Evento.nombre_actividad === "Natación" ||Evento.nombre_actividad === "natación" || Evento.nombre_actividad === "natacion" )
    imageURL = require("../../assets/images/natacion.jpg")
  else if (Evento.nombre_actividad === "Tenis" || Evento.nombre_actividad === "tenis" )
    imageURL = require("../../assets/images/tenis.jpg")
  else if (Evento.nombre_actividad === "Maraton" || Evento.nombre_actividad === "maraton" ||Evento.nombre_actividad === "Maratón" || Evento.nombre_actividad === "maratón" )
    imageURL = require("../../assets/images/maraton.jpg")
  
  return (

      <ImageBackground blurRadius={5} source={imageURL} resizeMode="cover" style={styles.image}>
      <Text style={styles.TituloGeneral}>{Evento.nombre_actividad}</Text>
      <Text style={styles.description} >{Evento.descripción}</Text>
      <Text style={styles.cupos} >Cupos: {Evento.cupos}</Text>
      <Text style={styles.requisitos} >Requisitos: {Evento.requisitos}</Text>
      <Text style={styles.cupos} >Tipo: {Evento.tipo}</Text>
      <Text style={styles.requisitos} >Modalidad: {Evento.modalidad}</Text>
      <Text style={styles.cupos} >fecha de inicio: {Evento.fecha_inicio}</Text>
      <Text style={styles.cupos} >fecha de termino: {Evento.fecha_termino}</Text>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Form', { Evento })}> 
        <Text style={styles.searchButtonText}>inscribirse</Text>
      </Pressable>
      </ImageBackground>
 
  );
};

export default Evento;