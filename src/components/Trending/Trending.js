import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';

const Width = Dimensions.get('screen').width / 3 - 5;
let Height = Dimensions.get('screen').height;

const Trending = () => {
  const [helper, setHelper] = useState([[], 0, true]);

  // const [counter,setCounter] = useState(0)
  // const [loader,setLoader] = useState(true);

  useEffect(() => {
    const counter = helper[1];
    console.log('useffect');
    const apiurl = `http://api.giphy.com/v1/gifs/trending?api_key=aNNVv3aWJDKDsAYKwc6AsNE652xQlHPR&limit=12&offset=${counter}`;
    const trendfetch = async () => {
      const resultsdata = await (await fetch(apiurl)).json();
      const arr = helper[0].concat(resultsdata.data);
      console.log(resultsdata.pagination.offset);
      setHelper([arr, helper[1], false]);
    };
    trendfetch();
  }, [helper[1]]);

  return (
    <View>
      <FlatList
        data={helper[0]}
        keyExtractor={(item, index) => item.id}
        horizontal={false}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 130,
          backgroundColor: '#e6f0ef',
        }}
        ListFooterComponent={
          helper[2] && (
            <View style={{alignSelf: 'center'}}>
              <Image
                source={require('../../assets/images/index.gif')}
                style={{width: 50, height: 50}}
              />
            </View>
          )
        }
        onEndReachedThreshold={0.01}
        onEndReached={() => {
          console.log('End reach');

          if (helper[1] > 50) {
            return;
          }

          if (helper[1] < 50) {
            setTimeout(() => {
              setHelper([helper[0], helper[1] + 12, true]);
            }, 3000);
          }
        }}
        renderItem={({item, index}) => {
          return (
            <View style={{margin: 1, borderWidth: 0.7, borderColor: '#fff'}}>
              <Image
                source={{uri: item.images.fixed_height_still.url}}
                style={{width: Width, height: Width}}
                PlaceholderContent={
                  <Image
                    source={require('../../assets/images/index.gif')}
                    style={{width: Width, height: Width}}
                  />
                }
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Trending;
