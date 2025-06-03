import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { UseStateExample } from '../../hooks/useStateExemplo';
import { UseEffectExample } from '../../hooks/useEffectExemplo';
import useContagemRegressiva from "../../hooks/useefectregressiva"; // ajuste o caminho se necessário

import { UseRefExample } from '../../hooks/useRefExemplo';
import { UseMemoExample } from '../../hooks/useMemo';
import { UseCallbackExample } from '../../hooks/useCallbackExemplo';

import { useMensagem } from '../../hooks/useMessage';
import { useUsuarioFake } from './../../hooks/useUsuarioFake';


export default function App() {
  const tempo = useContagemRegressiva(100); // Começa com 10 segundos

  
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
     {/* <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample />
      <useMensagem/>
      <useUsuarioFake/>*/}
      <UseMemoExample />
      {/* contagem regressiva */}
        <View style={styles.container}>
  {/* Título principal da tela */}
  <Text style={styles.titulo}>⏳ Contagem Regressiva</Text>

  {/* Exibe o tempo restante e ajusta o plural de "segundo(s)" dinamicamente */}
  <Text style={styles.tempo}>
    Tempo restante: {tempo} segundo{tempo !== 1 ? "s" : ""}
  </Text>

  {/* Quando o tempo chegar a 0, exibe uma mensagem de finalização */}
  {tempo === 0 && <Text style={styles.finalizado}>🎉 Tempo esgotado!</Text>}
</View>


    

      <UseEffectExample/>
      <UseRefExample />
     
      
      
      {/*
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>
        {finalizado ? 'Tempo esgotado!' : formatarTempo(tempoRestante)}
      </Text>
    </View>*/}
    {/* contagem regressiva */}
{/* usuario fake */}
       
    {/* usuario fake */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#2ecc71', // verde claro moderno
    flexGrow: 1,               // para preencher toda a tela mesmo se conteúdo for pequeno
  },
   ttitulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tempo: {
    fontSize: 24,
  },titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  finalizado: {
    marginTop: 20,
    fontSize: 20,
    color: "green",
  },
});
