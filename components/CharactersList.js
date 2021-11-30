import React, { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';

export default class CharacterList extends React.Component {

  constructor(props) { 
    super(props)

    this.state = {  
      isLoading: true,
      dataSource: []
    }
  }

   componentDidMount() {
    fetch('https://breakingbadapi.com/api/characters', {
      method: 'GET',
      //Request Type
    })
  
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson
        })

      })
  
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
    }

  _renderItem = ({item,index}) => {
    const { navigate } = this.props.navigation

    return (
      <TouchableOpacity onPress = { () => navigate('CharacterDetail', item ) } >

        <View>
        
          <Image 
           style = {styles.image}
           source = {{uri: item.img}}/>
          <Text style = {styles.speakerBio}  >{item.name}</Text>

      </View>

      </TouchableOpacity>
    )
  }

  render () { 
    let { dataSource, isLoading} = this.state
    

    if(isLoading){ 
      return (
        <View style={styles.container} >
          <ActivityIndicator size="large" animating />
        </View>
      ) 
    } 

    return (
      <View style={styles.container}>
        <FlatList
          data = {dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )

   }

} 

const IMAGE_SIZE = 80;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  textStyle: {
    fontSize: 18,
    color: 'white',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },

  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE/2,
    backgroundColor: "grey",
    marginRight: 10,
  },

});
