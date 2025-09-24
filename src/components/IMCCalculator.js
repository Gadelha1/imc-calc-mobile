import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from '../styles/styles';
import { calculateIMC } from '../utils/imcCalculations';

const IMCCalculator = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);
  const [status, setStatus] = useState('Não classificado');

  useEffect(() => {
    if (imc < 18.5) {
      setStatus('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
      setStatus('Peso normal');
    } else if (imc >= 25 && imc < 30) {
      setStatus('Sobrepeso');
    } else if (imc >= 30 && imc < 35) {
      setStatus('Obesidade Grau I');
    } else if (imc >= 35 && imc < 40) {
      setStatus('Obesidade Grau II');
    } else if (imc >= 40) {
      setStatus('Obesidade Grau III');
    } else {
      setStatus('Não classificado');
    }
  }, [imc]);

  const handleCalculate = () => {
    const calculatedIMC = calculateIMC(peso, altura);
    setImc(calculatedIMC);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC:</Text>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu peso"
          keyboardType="numeric"
          onChangeText={setPeso}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua altura"
          keyboardType="numeric"
          onChangeText={setAltura}
        />

        <div>
        <Pressable onPress={handleCalculate}>
          <Text style={styles.btn}>Calcular</Text>
        </Pressable>
        </div>

        <Text style={styles.result_label}>SEU IMC É:</Text>
        <Text style={styles.result}>{imc.toFixed(2)}</Text>
        <Text style={styles.result}>{status}</Text>

      </View>
      <View>
      </View>
    </View>
  );
};

export default IMCCalculator;