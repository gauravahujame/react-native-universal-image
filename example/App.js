/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import UniversalImage from 'react-native-universal-image';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        id: 1,
        thumbnail: 'https://i.imgur.com/xjOm5vo.jpg',
        image: 'https://i.imgur.com/66pKKsp.jpg',
        text: 'Lorem ipsum'
      },
      {
        id: 2,
        thumbnail: 'https://i.imgur.com/Qax30GR.jpg',
        image: 'https://i.imgur.com/ZdDvfJa.jpg',
        text: 'Ipsum lorem'
      },
    ]
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.items}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderRadius: 3, backgroundColor: 'white', elevation: 2 }}>
              <UniversalImage
                indicator
                indicatorColor="#1AD2EF"
                indicatorSize="large"
                thumbnailSource={{ uri: item.thumbnail }}
                imageSource={{ uri: item.image }}
                defaultHeight={350}
                thumbnailFadeDuration={5000}
                imageFadeDuration={2000}
              />
            </View>
          )}
          keyExtractor={(item, index) => item.id} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
});
