import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover" />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    marginVertical: 30,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  },
  image: {
    width:'100%',
    height: '100%'
  }
});

export default GameOverScreen;
