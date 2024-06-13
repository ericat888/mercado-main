import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    if (email.trim() === '' || password.trim() === '') {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/backgroundLogin.png')} style={styles.backgroundImage}>
        <Image source={require('../assets/images/logoLogin.png')} style={styles.logo} />
        <TextInput
          style={[styles.inputEmail, styles.marginInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.inputSenha, styles.marginInput]}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            if (validateFields()) {
              navigation.navigate('Home');
            } else {
              alert('Por favor, preencha todos os campos.');
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.button}
        >
          <Text style={styles.buttonCadastro}>Ainda não tem uma conta? Cadastre-se!</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 210,
    marginBottom: 20,
  },
  inputEmail: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#F4F4F4',
    placeholderTextColor: '#B6C88F',
  },
  inputSenha: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#F4F4F4',
    placeholderTextColor: '#B6C88F',
  },
  marginInput: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B6C88F',
    borderRadius: 59.96,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonCadastro: {
    color: 'white',
  },
});

export default App;
