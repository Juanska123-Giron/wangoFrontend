import { SafeAreaView, Image, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function Wango() {
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Email:', email, 'Password:', password);
    };
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
          <Image className="-mt-24 w-3/4 h-40" source={require('../assets/images/logo.png')} />
          <Text className="-mt-2 text-base font-semibold opacity-75 text-gray-900">¡Ingresa con tus datos!</Text>

          <View className="flex flex-row flex-wrap justify-between w-11/12 mt-6 max-w">
                <View className="w-2/3 -mr-10">
                <Text className="my-2 text-base font-bold leading-5 text-gray-900">Identificación*</Text>
                <TextInput
                    className="content-center rounded-lg shadow-sm text-base font-medium text-gray-500 border text-base border-gray-500 p-2.5 mb-4 leading-5"
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />
                </View>

                <View className="w-1/3 pl-2">
                <Text className="mt-8 my-2 text-base font-bold leading-5 text-gray-900">Tipo*</Text>
                <Picker
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 8,
                    marginBottom: 10,
                    }}
                    selectedValue={tipo}
                    onValueChange={(itemValue) => setTipo(itemValue)}
                >
                    <Picker.Item label="CC" value="CC" />
                    <Picker.Item label="TI" value="TI" />
                    <Picker.Item label="CE" value="CE" />
                </Picker>
                </View>

                <View className="w-full">
                <Text className="mt-8 my-2 text-base font-bold leading-5 text-gray-900">Contraseña*</Text>
                <TextInput
                    className="rounded-lg shadow-sm text-base font-medium text-gray-500 border text-base border-gray-500 p-2.5 mb-2 leading-5"
                    placeholder="Contraseña"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                </View>
          </View>
        </SafeAreaView>
    );
}
