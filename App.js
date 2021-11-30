import React from 'react';
import Home from './components/Home'
import CharacterList  from './components/CharactersList'
import CharacterDetail from './components/CharacterDetail'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator()

export default class App extends React.Component {
    render() {  
        return (
          <NavigationContainer>
           
            <RootStack.Navigator initialRouteName="Home">
              <RootStack.Screen name = "Home" component = { Home } options={{ title: 'Welcome :D ' }}/>
              <RootStack.Screen name = "CharacterList" component = { CharacterList } options={{ title: 'Character List Screen' }}/>
              <RootStack.Screen name = "CharacterDetail" component = { CharacterDetail } options={{ title: 'Character Detail Screen' }}/>
            </RootStack.Navigator>

          </NavigationContainer>
          );
    } 
}