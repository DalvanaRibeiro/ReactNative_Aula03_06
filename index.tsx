import React from 'react'
import{ScrollView, StyleSheet} from 'react-native'

import EstadoObjeto from '../../components/EstadocomObjeto'

export default function App(){
  return(
  <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom:40}}>
    <EstadoObjeto/>
  </ScrollView>
)}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ccffcc',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  })
