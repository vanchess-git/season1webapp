import {FlatList} from "react-native";
import ListItem from "./ListItem";
import {useMedia} from "./ApiHooks";

// const apiUrl = 'https://media.mw.metropolia.fi/wbma/'

const List = () => {
  // const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
  const {mediaArray} = useMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item}/>}
    />
  );
};

export default List;
