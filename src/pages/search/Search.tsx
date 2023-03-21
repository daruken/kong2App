import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const Search = (): React.ReactElement => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="검색어를 입력해주세요"
        onChangeText={updateSearch}
        value={search}
        platform={'default'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default Search;
