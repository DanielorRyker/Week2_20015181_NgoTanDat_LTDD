import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const solveQuadratic = () => {
    const coefA = parseFloat(a);
    const coefB = parseFloat(b);
    const coefC = parseFloat(c);
    const delta = coefB * coefB - 4 * coefA * coefC;

    if (delta > 0) {
      const x1 = (-coefB + Math.sqrt(delta)) / (2 * coefA);
      const x2 = (-coefB - Math.sqrt(delta)) / (2 * coefA);
      setResult(`Nghiệm thứ nhất x1 = ${x1}, Nghiệm thứ hai x2 = ${x2}`);
    } else if (delta === 0) {
      const x = -coefB / (2 * coefA);
      setResult(`Nghiệm kép x = ${x}`);
    } else {
      setResult('Phương trình vô nghiệm');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2</Text>
      <TextInput style={styles.input} placeholder="a" keyboardType="numeric" onChangeText={text => setA(text)} value={a} />
      <TextInput style={styles.input} placeholder="b" keyboardType="numeric" onChangeText={text => setB(text)} value={b} />
      <TextInput style={styles.input} placeholder="c" keyboardType="numeric" onChangeText={text => setC(text)} value={c} />
      <Button title="Giải" onPress={solveQuadratic} />
      <Text>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '100%',
  },
});
