// import {Text, StyleSheet, View} from 'react-native';
// import React, {Component} from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// interface IState {}
// interface IProps {
//   navigation?: any;
// }
// export default class CustomTabBar extends Component<IProps, IState> {
//   constructor(props:IProps){
//     super(props);
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.Activetab}
//           //onPress={() => this.props.navigation.navigate('Home')}
//           >
//           <Icon name="home" size={25} color="#000" />
//           <Text style={styles.ActivetabText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.Inactivetab}>
//           <Icon name="search" size={25} color="#000" />
//           <Text style={styles.InactivetabText}>Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.Inactivetab}>
//           <Icon name="cart" size={25} color="#000" />
//           <Text style={styles.InactivetabText}>Cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.Inactivetab}
//          // onPress={() => this.props.navigation.navigate('Offer')}
//           >
//           <Icon name="gift" size={25} color="#000" />
//           <Text style={styles.InactivetabText}>Offer</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     height: 60,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//   },
//   Activetab: {
//     alignItems: 'center',
//     backgroundColor: '#DF201F',
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 13,
//     borderRadius: 50,
//   },
//   Inactivetab: {
//     alignItems: 'center',
//   },
//   ActivetabText: {
//     fontSize: 15,
//     marginTop: 5,
//     color: '#ffffff',
//   },
//   InactivetabText: {
//     fontSize: 12,
//     marginTop: 5,
//   },
// });

import React from 'react';
import {Platform} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

interface Iprops {
  state?: any;
  navigation?: any;
}
const {height, width} = Dimensions.get('window');

class CustomBottom extends React.Component<Iprops> {
  render(): React.ReactNode {
    const {state, navigation, descriptors}: any = this.props;
    return (
      <View style={styles.outerlayercontainer}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.maincontainer,
                {
                  backgroundColor: isFocused ? '#df201f' : '#ffffff',
                  marginHorizontal: isFocused ? 20 : 0,
                  marginVertical: isFocused ? 20 : 0,
                },
              ]}>
              {isFocused ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {label == 'Home' ? (
                    <Image
                      source={require('../images/tabbarimages/Home.png')}
                      style={styles.imagestyle}
                    />
                  ) : label == 'Search' ? (
                    <Image
                      source={require('../images/tabbarimages/Search.png')}
                      style={styles.imagestyle}
                    />
                  ) : label == 'Cart' ? (
                    <Image
                      source={require('../images/tabbarimages/Cart.png')}
                      style={styles.imagestyle}
                    />
                  ) : (
                    <Image
                      source={require('../images/tabbarimages/Offer.png')}
                      style={styles.imagestyle}
                    />
                  )}
                  <Text style={styles.textstyle}>{label}</Text>
                </View>
              ) : (
                <View>
                  {label == 'Home' ? (
                    <Image
                      source={require('../images/tabbarimages/Home.png')}
                      style={styles.imgsize}
                    />
                  ) : label == 'Search' ? (
                    <Image
                      source={require('../images/tabbarimages/Search.png')}
                      style={styles.imgsize}
                    />
                  ) : label == 'Cart' ? (
                    <Image
                      source={require('../images/tabbarimages/Cart.png')}
                      style={styles.imgsize}
                    />
                  ) : (
                    <Image
                      source={require('../images/tabbarimages/Offer.png')}
                      style={styles.imgsize}
                    />
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default CustomBottom;

const styles = StyleSheet.create({
  outerlayercontainer: Platform.select({
    ios: {
      width,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      height: 70,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      elevation: 30,
      shadowRadius: 10,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowColor: 'red',
    },
    android: {
      width,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      height: 60,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      elevation: 30,
      shadowRadius: 10,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowColor: 'red',
    },
  }),
  maincontainer: {
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  imagestyle: {tintColor: '#ffffff', height: 17, width: 17},
  imgsize: {height: 25, width: 25},
  textstyle: {
    fontSize: 15,
    lineHeight: 40,
    fontWeight: 700,
    color: '#ffffff',
    left: 5,
  },
});

