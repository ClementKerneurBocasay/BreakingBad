import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {StyleSheet, Dimensions} from 'react-native';
import { Block, theme } from 'galio-framework';

import CharacterListObject from '../components/CharacterListObject'
import characterObject from '../constants/CharactersModel'

const { width }  = Dimensions.get('window').width

export default class CharacterList extends React.Component {
  renderCharacters = () => {        
      return (

        <ScrollView
          showsVerticalScrollIndicator = {true}
          contentContainerStyle={styles.products}
        >

          <Block flex row>
            <CharacterListObject characterObject = {characterObject[0]} horizontal />
            
            <Block flex row>
              <CharacterListObject characterObject={characterObject[1]} style={{ marginRight: theme.SIZES.BASE }} />
              <CharacterListObject characterObject={characterObject[2]} />
            </Block>

            <CharacterListObject characterObject={characterObject[3]} horizontal />
            <CharacterListObject characterObject={characterObject[4]} full />

          </Block>

        </ScrollView>
      );
    } 

    render() {
      return (
        <Block flex center style={styles.home}>
          {this.renderCharacters()}
        </Block>
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

  home: {
    width: 'auto',    
  },

  search: {
    height: 48,
    width: 'auto' - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },

  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },

  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },

  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: 'auto' * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },

  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },

  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },

  products: {
    width: 'auto' - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },

});
