import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {mediaUrl} from "../utils/Variables";


const ListItem = ({singleMedia, navigation}) => {
  // console.log('ListItem: ', singleMedia);
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}
    >
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;

//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     padding: 10,
//     width: 150,
//     height: 150
//   },
//   touchOpa: {
//     marginTop: 5,
//     backgroundColor: '#00ff26',
//     flexDirection: 'row',
//     padding: 10
//   },
//   textBox: {
//     flexWrap: 'nowrap',
//     marginRight: 150,
//     marginLeft: 5
//   },
//   textTitle: {
//     textAlign: 'justify',
//     color: '#ff8c00'
//   },
//   textMain: {
//     flexWrap: 'wrap',
//     color: '#ffff00'
//   }
// });
