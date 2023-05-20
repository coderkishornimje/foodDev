import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';

interface IState {
  todayMenus: any[];
}
interface IProps {
  navigation?: any;
}
export default class ViewAllTodayFood extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todayMenus: [
        {
          id: 1,
          image: require('../images/menues//s1.png'),
          name: 'Best Veg Dum Biryani',
          //price: require('../images/menues//p1.png'),
          price: 100,
          resto: 'Golden Fish Restaurant',
        },
        {
          id: 2,
          image: require('../images/menues//s2.png'),
          name: 'Chicken Tikka',
          //price: require('../images/menues//p2.png'),
          price: 100,
          resto: 'Barbeque Nation',
        },
        {
          id: 3,
          image: require('../images/menues//s3.png'),
          name: 'Pizza',
          //price: require('../images/menues//p3.png'),
          price: 100,
          resto: 'Naivaydyam Restaurant',
        },
        {
          id: 4,
          image: require('../images/menues//s4.png'),
          name: 'Chicken Biryani',
          //price: require('../images/menues//p4.png'),
          price: 100,
          resto: 'Saoji Bhojnalaya',
        },
        {
          id: 5,
          image: require('../images/menues//s2.png'),
          name: 'Chicken Tikka',
          //price: require('../images/menues//p2.png'),
          price: 100,
          resto: 'Barbeque Nation',
        },
      ],
    };
  }

  renderMenues = ({item}: any) => {
    return (
      <View style={styles.menuesView}>
        <Image style={{height: 130, width: 120}} source={item.image} />
        <View style={{margin: 25}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#DF201F',
            }}>
            {'\u20B9'}
            {item.price} {'\u20B9'}200
          </Text>
          <View style={{flexDirection: 'row', left: -10, marginHorizontal: 5}}>
            <Image
              style={{height: 30, width: 25, bottom: 3}}
              source={require('../images/menues/dish1.png')}
              resizeMode="stretch"
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              {item.resto}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child1}>
          <TouchableOpacity
            style={styles.BackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Today Special</Text>
          </TouchableOpacity>
        </View>
        <View style={{height:580}}>
          <FlatList
            //horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.state.todayMenus}
            renderItem={this.renderMenues}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E6E6E6',
  },
  child1: {
    height: '10%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    //paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  BackBtn: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  menuesView:{
    backgroundColor: '#ffffff',
    marginHorizontal:15,
    marginVertical:8,
    borderRadius: 20,
    flexDirection:'row',
    top:'2%'
  }
});
