import React, { Component } from 'react';
import api  from '../../services/api'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import logoweb from '../../assets/logo.svg'

export default class Main extends Component {
  state = {
    newBox : ''
  };
  handleSignIn = async e => {
    
    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.navigation.navigate('Box');
    
  }

  render() {
    return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logoweb}/>
        <TextInput 
        style={styles.input}
        placeholder="Crie uma box"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        value={this.state.newBox}
        onChangeText={text => this.setState({newBox: text})}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignIn} >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
    </View>
    );
  }
}
