import {FlatList} from "react-native";
import ListItem from "./ListItem";
import {useEffect, useState} from "react";
import {fetch} from "react-native/Libraries/Network/fetch";

const apiUrl = 'https://media.mw.metropolia.fi/wbma/'


const List = () => {
  const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';

  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(apiUrl + 'media?limit=5');
      const json = await response.json();
      console.log(json);
      const allMediaData = json.map(async (mediaItem) => {
        const response = await fetch(apiUrl + 'media/' + mediaItem.file_id);
        return await response.json();

      });
      setMediaArray(await Promise.all(allMediaData));
    } catch (error) {
      console.log('media fetch failed', error);
      // TODO kerrohan käyttäjälle jotain
    }
  }

  useEffect(() => {
    loadMedia();
  }, []);


  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item}/>}
    />
  );
};

export default List;
