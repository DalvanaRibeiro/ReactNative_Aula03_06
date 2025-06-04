import React from 'react';
import { View, ScrollView, StyleSheet, Text  } from 'react-native';
import ClassificadorAnime from '../../components/anime';
import MostrarOcultar from '../../components/MostrarOcultar';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={{ fontSize: 20 }}>
        Classificador de Anime:
          
        </Text>
      {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
       {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>

         
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
       {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
      backgroundColor: '#e0f2f1',
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});
