import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {  
    const { navigate } = this.props.navigation

      return (
        <View style={styles.container}>
          <Text>character list</Text>

          <Button
            title = "View Characters" /** change CharacterDetail to CharacterList */
            onPress={() => navigate('CharacterList')} />

          <StatusBar style="auto" />
        </View>
      );

    } 
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
