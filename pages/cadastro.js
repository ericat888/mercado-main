import React from 'react';
import { View, Image, StyleSheet, TextInput, email, setEmail } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logoCadastro.png')} style={styles.logo} />
      <TextInput
          style={[styles.inputNome, styles.marginInput]}
          placeholder="Nome"
      />
      <TextInput
          style={[styles.inputSobrenome, styles.marginInput]}
          placeholder="Sobrenome"
      />
      <TextInput
          style={[styles.inputEmailOuTelefone, styles.marginInput]}
          placeholder="E-mail ou Telefone"
      />
      <TextInput
          style={[styles.inputConfirmar, styles.marginInput]}
          placeholder="Confirmar e-mail ou telefone"
      />
      <TextInput
          style={[styles.inputSenha, styles.marginInput]}
          placeholder="Senha"
      />
      <TextInput
          style={[styles.inputConfirmarSenha, styles.marginInput]}
          placeholder="Confirmar senha"
      />
      <TouchableOpacity style={styles.botaoCadastrar} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
  },
  logo: {
    width: 120,
    height: 110,
    marginTop: 75,
  },
  inputNome: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: 35
  },
  marginInput: {
    marginBottom: 20,
  },
  inputSobrenome: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: -10
  },
  inputEmailOuTelefone: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: -10
  },
  inputConfirmar: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: -10
  },
  inputConfirmarSenha: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: -10
  },
  inputSenha: {
    height: 40,
    width: '80%',
    borderRadius: 59.96,
    padding: 10,
    backgroundColor: '#E6F0D0',
    placeholderTextColor: '#B6C88F',
    marginTop: -10
  },
  botaoCadastrar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 59.96,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
