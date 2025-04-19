import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Home() {
  const [instituicao, setInstituicao] = React.useState('');
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <View className="rounded-[6px] p-5 shadow-[2.5px_2.5px_6px_2px_rgba(0,0,0,0.3)]">
          <Text className="text-[20px] font-medium">
            Olá,<span className="text-[#500878]">Sejam bem vindos</span>
          </Text>
          <Text className="text-sm font-medium">
            Explore perfis de cães e gatos adoráveis que esperam por um lar. Seu novo amigo pode
            estar aqui.
            <Image source={require('../../assets/patas.png')} style={{ width: 20, height: 20 }} />
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
                  backgroundColor: '#fee2e2',
                  padding: 8,
                  borderRadius: 6,
                },
                inputAndroid: {
                  fontSize: 14,
                  backgroundColor: '#fee2e2',
                  padding: 8,
                  borderRadius: 6,
                },
              }}
            />
          </View>

          <TouchableOpacity className="mx-2 items-center justify-center rounded bg-violet-300 px-3 py-2">
            <Image source={require('../../assets/patas.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity className="mx-2 items-center justify-center rounded bg-violet-300 px-3 py-2">
            <Image source={require('../../assets/patas.png')} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>

          <TouchableOpacity className="mx-2 items-center justify-center rounded">
            <Image source={require('../../assets/icon.png')} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
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
