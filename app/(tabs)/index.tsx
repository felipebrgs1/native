import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Heart } from 'lucide-react-native';
import { useStore } from '../../store/store';

export default function Home() {
  const [instituicao, setInstituicao] = React.useState('');
  const [selectedAnimal, setSelectedAnimal] = React.useState<'cat' | 'dog' | 'both' | null>(null);

  const animals = useStore((state) => state.animals);
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <View className="rounded-[6px] p-5 shadow-[2.5px_2.5px_6px_2px_rgba(0,0,0,0.3)]">
          <Text className="text-[20px] font-medium">
            <Text className="text-[#500878]">Sejam bem vindos</Text>
          </Text>
          <Text className="text-sm font-medium">
            Explore perfis de fsdfsdfráveis que esperam por um lar. Seu novo amigo pode estar aqui.
            <Image source={require('../../assets/both.png')} style={{ width: 20, height: 20 }} />
          </Text>
        </View>
        <View className="mt-4 flex-row items-center justify-center text-sm">
          <View className="max-w-[60%] flex-1">
            <RNPickerSelect
              onValueChange={setInstituicao}
              value={instituicao}
              placeholder={{ label: 'Selecione a instituição', value: '' }}
              items={[
                { label: 'Instituição 1', value: 'inst1' },
                { label: 'Instituição 2', value: 'inst2' },
                { label: 'Instituição 3', value: 'inst3' },
              ]}
              style={{
                inputIOS: {
                  fontSize: 14,
                  backgroundColor: '#fff',
                  padding: 8,
                  borderRadius: 6,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                },
                inputAndroid: {
                  fontSize: 14,
                  backgroundColor: '#fff',
                  padding: 8,
                  borderRadius: 6,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                },
                inputWeb: {
                  fontSize: 14,
                  backgroundColor: '#fff',
                  padding: 8,
                  borderRadius: 6,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                },
              }}
            />
          </View>

          <TouchableOpacity
            className={`mx-2 items-center justify-center rounded-[6px] border px-3 py-2 ${selectedAnimal === 'cat' ? 'border-violet-700 bg-violet-400' : 'border-violet-500 bg-white'}`}
            onPress={() => setSelectedAnimal('cat')}>
            <Image source={require('../../assets/cat.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity
            className={`mx-2 items-center justify-center rounded-[6px] border px-3 py-2 ${selectedAnimal === 'dog' ? 'border-violet-700 bg-violet-400' : 'border-violet-400 bg-white'}`}
            onPress={() => setSelectedAnimal('dog')}>
            <Image source={require('../../assets/dog.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity
            className={`mx-2 items-center justify-center  rounded-[6px] border px-3 py-2 ${selectedAnimal === 'both' ? 'border-violet-700 bg-violet-400' : 'border-violet-500 bg-white'}`}
            onPress={() => setSelectedAnimal('both')}>
            <Image source={require('../../assets/both.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        </View>

        <View>
          {/* Lista de cards de animais */}
          {animals
            .filter(
              (animal) =>
                !selectedAnimal || selectedAnimal === 'both' || animal.type === selectedAnimal
            )
            .map((animal) => (
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
                    {animal.favorite ? <Heart /> : <Heart color="#aaa" />}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
