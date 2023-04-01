import {SearchBar} from 'react-native-elements';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

const Search = (): React.ReactElement => {
  const [search, setSearch] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const updateSearch = async (search: string) => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/yogurts/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            keyword: search,
          }),
        },
      );
      const responseJson = await response.json();
      setSearch(responseJson);
    } catch (e) {
      console.log('Failed to fetch...');
    }

    setSearch(search);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={styles.view}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <SearchBar
        placeholder="검색어를 입력해주세요"
        onChangeText={updateSearch}
        value={search}
        platform={'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default Search;
