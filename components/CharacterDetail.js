import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, TextInput } from 'react-native-gesture-handler';

/** URL Tutorial : https://www.youtube.com/watch?v=xVOT0cxFhzA */

export default class CharacterDetail extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      quote: "",
      characterQuote: [],
      userComment: "",
    }
  }

  componentDidMount() {
    this.fetchCharacterQuotes()
    this.getData()
  }

  setData(data){
    if(data === "") alert('Please feed data before saving!')
    else { 
      AsyncStorage.setItem('userComment',data) 
      alert('saved')}
  }

  getData(){
   this.setState({
      userComment: AsyncStorage.getItem('userComment')
    })
  }

  renderOccupation = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.description} >{item}</Text>
      </View>
    )
  }

  /** Fetch Quote for character from API */
  fetchCharacterQuotes() {
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

  /** Fetch random value from array */
  fetchRandomValue(filteredCharacterQuotes) {
    this.setState({
      quote: filteredCharacterQuotes[Math.floor(Math.random()*filteredCharacterQuotes.length)].quote
    })
  }

  /** Save comment inserted by user */
  saveUserComment(textInput){
    this.setState({
      userComment: textInput
    })
  }

  saveCommentLocally(){
   const userComment =  this.state.userComment
   if(userComment === ""){ alert("Please insert a comment before saving!") }
  }

  render() {
    const characterData = this.props.route.params
    /** Filter quotes by character */
    const filteredCharacterQuotes = this.state.characterQuote.filter(i => i.author === characterData.name)

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
            data={characterData.occupation}
            renderItem={this.renderOccupation}
            keyExtractor={(item, index) => index.toString()} />
        </View>

        <View>
          <Text style={styles.subtitle} > Quote </Text>
          <Text style={styles.quote} > {this.state.quote}</Text>
          <Button
            title= "Refresh Quote"
            onPress = { () => this.fetchRandomValue(filteredCharacterQuotes) } />
        </View>

        <View>
          <Text style={styles.subtitle} > Insert a comment </Text>

          <TextInput
            multiline
            keyboardType = 'default'
            value = { this.state.userComment}
            onChangeText = { (text) => this.saveUserComment(text) }
            style = {styles.input}/>

          <Button 
            title = "Save Comment" 
            onPress = { () => this.setData(this.state.userComment) }/>
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

  quote: {
    fontSize: 12,
    marginLeft: 10
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

  input: {
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    height: 100,
    width: 'auto',
  },

});

