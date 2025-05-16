import { Stack } from 'expo-router';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useStore } from '../../store/store';
import { Heart } from 'lucide-react-native';

export default function Favorites() {
  const animals = useStore((state) => state.animals.filter((a) => a.favorite));
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Favoritos</Text>
        {animals.length === 0 ? (
          <Text style={{ color: '#888' }}>Nenhum animal favoritado ainda.</Text>
        ) : (
          animals.map((animal) => (
            <View
              key={animal.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#f8f8ff',
                borderRadius: 10,
                padding: 12,
                marginVertical: 8,
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowRadius: 4,
                shadowOffset: { width: 0, height: 2 },
              }}>
              <Image
                source={animal.image}
                style={{ width: 64, height: 64, borderRadius: 8, marginRight: 12 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{animal.breed}</Text>
                <Text style={{ color: '#555', fontSize: 13 }}>{animal.description}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleFavorite(animal.id)}>
                <Text style={{ fontSize: 28, color: animal.favorite ? '#e11d48' : '#aaa' }}>
                  <Heart />
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
});
