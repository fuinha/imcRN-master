import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';

export default function App() {

  const [altura, setAltura] = useState(0);
  const [massa, setMassa] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultadoText, setResultadoText] = useState("");

  function calcular() {
   
    let imc = massa / (altura * altura);
    setResultado(imc);

    /*
    < 16 Magresa grave
    16 a 17 Magresa moderada
    17 a 18,5 Magresa Leve
    18.5 a < 25 Saudavel
    25 < 30 Sobrepeso
    30 a < 35 Obesidade Grau I 
    35 a < 40 Obesidade Grau II (Severa)
    > 40 Obesidade Grau III (Morbida)

    */
   let res = "";

   if(resultado < 16){
    res = "Magresa Grave";
   }else if(resultado < 17){
    res = "Magresa Moderada";
  }else if(resultado < 18.5){
    res = "Magresa Leve";
  }else if(resultado < 25){
    res = "Saudavel";
  }else if(resultado < 30){
    res = "Sobrepeso";
  }else if(resultado < 35){
    res = "Obesidade Grau I";
  }else if(resultado < 40){
    res = "Obesidade Grau II (Severa)";
  }else {
    res = "Obesidade Grau III (Morbida)";
  }

    setResultadoText(res);
  }

  return (

    <View style={styles.container}>

      <View style={styles.entrada}>

        <TextInput
          placeholder="Massa"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setMassa(text)}
        />

        <TextInput
          placeholder="Altura"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => setAltura(text)}
        />

      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { calcular() }} >

          <Text style={styles.buttonText}>
            Calcular
        </Text>

        </TouchableOpacity>

        <Text style={styles.resultado}>
          {resultado.toFixed(2)}
        </Text>

        <Text style={[, { fontSize: 25 }]}>
          {resultadoText}
        </Text>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrada: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "40%",
    fontSize: 30,
    marginTop: 24,
  },
  button: {
    backgroundColor: "#89ffa5",

  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 20,
    color: '#9a0d00',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    padding: 15,
    fontSize: 35,
    color: 'lightgray',
    fontWeight: 'bold',
  },

});
