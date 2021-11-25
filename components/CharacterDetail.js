import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/** URL Tutorial : https://www.youtube.com/watch?v=xVOT0cxFhzA */

export default class CharacterDetail extends React.Component {
 render() {  
        return (
            <View style={styles.container}>
              
              <View style = {styles.detailsContainer}>
                <Text style = {styles.title}> Title </Text>
                <Text style = {styles.subtitle} > subti </Text>
                <Text style = {styles.description} > zafer lap marser !! </Text>
              </View>

              <View style = {styles.speakerContainer}>
                <Image
                style = {styles.image}
                source = {{uri: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441"}}
                />

                <View>
                  <Text style = {styles.speakerName}> Breaking Bad </Text>
                  <Text style = {styles.speakerBio}> is Working haha</Text>
                </View>
              </View>

            </View>
          );
    } 
}

const IMAGE_SIZE = 80;

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
    borderRadius: IMAGE_SIZE/2,
    backgroundColor: "grey",
    marginRight: 10,
  },

  speakerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500',
  },

  speakerBio: {
    fontSize: 13,
  },

});
