import React, { useRef, useState } from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View, Text, Image } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import { Button } from '~/components/Button';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData);
      setCameraOpen(false);
    }
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Solicitando permissão da câmera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Permissão da câmera é necessária para usar esta funcionalidade.</Text>
        <Button title="Conceder permissão" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        {!cameraOpen && !photo && (
          <Button title="Abrir câmera" onPress={() => setCameraOpen(true)} />
        )}
        {cameraOpen && (
          <CameraView style={styles.camera} facing="back" ref={cameraRef}>
            <View style={styles.cameraButtonContainer}>
              <Button title="Bater foto" onPress={takePicture} />
            </View>
          </CameraView>
        )}
        {photo && !cameraOpen && (
          <View style={styles.previewContainer}>
            <Image source={{ uri: photo.uri }} style={styles.preview} />
            <View style={styles.buttonRow}>
              <Button
                className="flex"
                title="Enviar foto"
                onPress={() => {
                  /* ação de envio */
                }}
              />
              <Button
                title="Tirar outra"
                onPress={() => {
                  setPhoto(null);
                  setCameraOpen(true);
                }}
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    width: '100%',
    aspectRatio: 9 / 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  previewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: 250,
    height: 400,
    borderRadius: 12,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
    paddingHorizontal: 20,
  },
});
