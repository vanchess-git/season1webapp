import {Platform, SafeAreaView, StyleSheet, StatusBar, View, ImageBackground, Text} from 'react-native';
import List from "./components/List";


const App = () => {
  return (
    <>
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.topView}>
          <ImageBackground
            source={{uri: 'http://www.placekitten.com/1200/300'}}
            style={styles.topImage}>
            <View style={styles.topImageTextHolder}>
              <Text style={styles.topText}>#LostKitteh</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.listView}>
          <List/>
        </View>
      </SafeAreaView>
      <StatusBar style='auto'/>
    </>
  );
};
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#303040',
    // paddingTop: Platform.OS === 'android' ? 31 : 0
  },
  topView: {
    flex: 1,
    paddingBottom: 3,
  },
  topImage: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    // opacity: 0.1,
    borderBottomEndRadius: 100,
    position: 'relative',
  },
  topImageTextHolder: {
    position: "absolute",
    top: '40%',
    left: '40%',
  },
  topText: {
    color: 'white',
    opacity: 0.5,
    fontSize: 60,
    // left: 20,
    // bottom: 60,
    position: 'absolute',
    alignSelf: 'center',
    margin: 'auto',
  },
  listView: {
    flex: 2,
  },
});

export default App;


/**button basics*/
// import React, { Component } from 'react';
// import { Button, StyleSheet, View } from 'react-native';
//
// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });
/**list basics*/
// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });
//
// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//       />
//     </View>
//   );
// }
//
// export default FlatListBasics;

/**mega advanced list*/
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })
//
// const SectionListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <SectionList
//         sections={[
//           {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//           {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//         keyExtractor={(item, index) => `basicListEntry-${item.title}`}
//       />
//     </View>
//   );
// }
//
// export default SectionListBasics;

//width: Dimensions.get('window').width / 2.2
