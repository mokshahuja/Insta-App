import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Trending from '../../components/Trending/Trending';

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <View>
      <SearchBar
        placeholder="Time to see some gifs"
        onChangeText={(value) => setSearch(value)}
        value={search}
      />
      {search.length == 0 && (
        <View>
          <Trending />
        </View>
      )}
    </View>
  );
}
