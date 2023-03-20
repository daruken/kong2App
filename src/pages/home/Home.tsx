import React from 'react';
import { Image, ScrollView, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 35 }}>Scroll me plz</Text>
      <Image source={{ uri: "https://fastly.picsum.photos/id/391/200/200.jpg?hmac=eWWXf2lLHPoO-zrpo97Q3ViRD7KFeO4CborOD3CC4AU", width: 64, height: 64 }} />
      <Image source={{ uri: "https://fastly.picsum.photos/id/400/200/300.jpg?hmac=FD74WIE42b0qUFf-QggfWsoHPJqcGgjSatRvUM9dAws", width: 64, height: 64}} />
      <Image source={{ uri: "https://picsum.photos/id/237/200/300", width: 64, height: 64}} />
    </ScrollView>
  );
}

export default Home;
