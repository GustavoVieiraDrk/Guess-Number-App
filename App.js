import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  var count = 0;
  var randomNumber = 0;
  const [valorA, setValorA] = React.useState(0);
  const [resultado, setResultado] = React.useState(0);

  const numberGeneration = (evento) => {
    //alert("A=" + valorA + " B=" + valorB);
    randomNumber = Math.floor(Math.random() * 10 +1);
    console.log(randomNumber);
  } 

  const isNumberMatched = (evento) => {
    //alert("A=" + valorA + " B=" + valorB);
    if (randomNumber == parseInt(valorA)) {
      setResultado(count.toString());
      console.log(count);
    } else {
      count = count + 1;
      console.log(count);
    }
  } 


  return (
    <View style={styles.container}>
      
      <View style={styles.containerEntrada}>
        <TextInput 
          placeholder="type a number"
          keyboardType="numeric"
          style={styles.campoDeEntrada}
          onChangeText={(valor) => setValorA(valor)}
        />
      </View>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={numberGeneration}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Number Gen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estiloBotao}
        onPress={isNumberMatched}
      >
        <Text
          style={styles.estiloTextoBotao}
        >
          Match Number
        </Text>
      </TouchableOpacity>

      <Text style={styles.textoResultado}>
        {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1F2EB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  }, 
  containerEntrada: {
    flexDirection: "row"
  },
  campoDeEntrada: {
    fontSize: 40,
    width: "50%",
    height: 80,
    paddingLeft: 10,
    textAlign: "center"
  },
  estiloBotao: {
    backgroundColor: "#6495ED",
    width: "100%"
  },
  estiloTextoBotao: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    alignSelf: "center",
  },
  textoResultado: {
    color: 'grey',
    fontSize: 60,
    padding: 15
  }
});