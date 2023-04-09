import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://fastly.picsum.photos/id/391/200/200.jpg?hmac=eWWXf2lLHPoO-zrpo97Q3ViRD7KFeO4CborOD3CC4AU',
              width: 64,
              height: 64,
            }}
          />
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{fontSize: 24, marginLeft: 20}}>상품명</Text>
        </View>

        <Image
          source={{
            uri: 'https://fastly.picsum.photos/id/400/200/300.jpg?hmac=FD74WIE42b0qUFf-QggfWsoHPJqcGgjSatRvUM9dAws',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://picsum.photos/id/237/200/300',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://picsum.photos/200/300?grayscale',
            width: 64,
            height: 64,
          }}
        />
        <Image
          source={{
            uri: 'https://picsum.photos/200/300/?blur',
            width: 64,
            height: 64,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
