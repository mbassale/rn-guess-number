import React, {useState} from 'react';
import {View, Text, Button, TouchableWithoutFeedback, StyleSheet, Keyboard} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect='none' keyboardType='number-pad'
                 maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button color={Colors.accent} title="Reset" onPress={() => {
            }}/></View>
            <View style={styles.button}><Button color={Colors.primary} title="Confirm" onPress={() => {
            }}/></View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center',
  }
});

export default StartGameScreen;
