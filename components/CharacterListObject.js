import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

export default class CharacterListObject extends React.Component { 
    render () {
        const { navigate, characterObject, horizontal, full, style, imageStyle } = this.props;
        const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle]

        return (
          <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>

                <TouchableWithoutFeedback onPress={() => navigate('CharacterDetail')}>

                    <Block flex style={[styles.imageContainer, styles.shadow]}>
                        <Image source={{ uri: characterObject.img }} style={imageStyles} />
                    </Block>

                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('CharacterDetail')}>

                    <Block flex space="between" style={styles.productDescription}>
                        <Text size={14} style={styles.productTitle}>{characterObject.name}</Text>
                    </Block>

                </TouchableWithoutFeedback> 
                
          </Block>       
        );

    }
};

const styles = StyleSheet.create({
    product: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE,
      borderWidth: 0,
      minHeight: 114,
    },

    productTitle: {
      flex: 1,
      flexWrap: 'wrap',
      paddingBottom: 6,
    },

    productDescription: {
      padding: theme.SIZES.BASE / 2,
    },

    imageContainer: {
      elevation: 1,
    },

    image: {
      borderRadius: 3,
      marginHorizontal: theme.SIZES.BASE / 2,
      marginTop: -16,
    },

    horizontalImage: {
      height: 122,
      width: 'auto',
    },

    fullImage: {
      height: 215,
      width: 'auto' - theme.SIZES.BASE * 3,
    },

    shadow: {
      shadowColor: theme.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.1,
      elevation: 2,
    },

  });