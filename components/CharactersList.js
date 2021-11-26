import React, { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-navigation';

const CharacterList = () => {

const [data, setData] = useState([]);

//API call to fetch 
const fetchDataUsingGet = () => {

  //GET request
  fetch('https://breakingbadapi.com/api/characters', {
    method: 'GET',
    //Request Type
  })

    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success
      const json = JSON.stringify(responseJson);
      setData(json);
      //alert(json); //This creates a dialog 
    })

    //If response is not in json then in error
    .catch((error) => {
      //Error
      console.error(error);
    });

};

const ItemCharacter = ({ name, img }) => (
  <View style={styles.item}>

    <Text style={styles.title}>{name}</Text>

    <Image 
     style = {styles.image}
     source= {{ uri: img }}/>
  </View>
);

const renderItem = ({ item }) => (
  <ItemCharacter name = {item.name, item.img} />
);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={fetchDataUsingGet}>
            <Text style={styles.textStyle}>Get Data Using GET</Text>
          </TouchableOpacity>

          <FlatList
            data = {data}
            renderItem = { item => renderItem(item) }
            keyExtractor={ item => item.char_id }
          />

        </View>

      </View>
    </SafeAreaView>
  );
  
}

export default CharacterList;

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
