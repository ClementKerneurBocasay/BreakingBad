import React,{ useState }  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

/** URL Tutorial : https://www.youtube.com/watch?v=xVOT0cxFhzA */

export default class CharacterDetail extends React.Component {

  constructor(props) { 
    super(props)

    this.state = {  
      isLoading: true,
      characterQuote: []
    }
  }

  componentDidMount () {
    this.fetchCharacterQuote()
  }

  renderOccupation = ({item,index}) => {
    return (
      <View>
          <Text style = {styles.description} >{item}</Text>
      </View>
    )
  }

  fetchCharacterQuote () {
    fetch('https://breakingbadapi.com/api/quotes', {
      method: 'GET',
      //Request Type
    })
  
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          characterQuote: responseJson
        })

      })
  
      //If response is not in json then in error
      .catch((error) => {
        //Error
        console.error(error);
      });
  }

  render() {
    const characterData = this.props.route.params

    return (
      <View style={styles.container}>

        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{ uri: characterData.img }}
          />

          <View>
            <Text style={styles.speakerName}> {characterData.name} </Text>
            <Text style={styles.speakerBio}> Portrayed by {characterData.portrayed}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} > Birthday : {characterData.birthday} </Text>
          <Text style={styles.description} > Nickname : {characterData.nickname} </Text>
          <Text style={styles.description} > Current Status : {characterData.status} </Text>


          <Text style={styles.description} > Occupation :</Text>
          <FlatList style={styles.description} 
            data = {characterData.occupation}
            renderItem = {this.renderOccupation}
            keyExtractor={(item, index) => index.toString()}/> 

        </View>

      </View>
    );
  }
}

const IMAGE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "black"
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 4
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12
  },

  description: {
    fontSize: 13
  },

  speakerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: "grey",
    marginRight: 10,
  },

  speakerName: {
    color: 'purple',
    fontSize: 30,
    fontWeight: '500',
  },

  speakerBio: {
    fontSize: 15,
    fontWeight: "500"
  },

});
