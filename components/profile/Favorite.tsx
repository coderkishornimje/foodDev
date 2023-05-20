import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Image } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';

interface IState{
 todayMenus:any[];
}
interface IProps{
 navigation?:any;
}
export default class Favorite extends Component <IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            todayMenus: [
                {
                  id: 1,
                  image: require('../../images/menues//s1.png'),
                  name: 'Best Veg Dum Biryani',
                  //price: require('../images/menues//p1.png'),
                  price: 'Rs100 Rs200',
                  resto: 'Golden Fish Restaurant',
                },
                {
                  id: 2,
                  image: require('../../images/menues//s2.png'),
                  name: 'Chicken Tikka',
                  //price: require('../images/menues//p2.png'),
                  price: 'Rs100 Rs200',
                  resto: 'Barbeque Nation',
                },
                {
                  id: 3,
                  image: require('../../images/menues//s3.png'),
                  name: 'Pizza',
                  //price: require('../images/menues//p3.png'),
                  price: 'Rs100 Rs200',
                  resto: 'Naivaydyam Restaurant',
                },
                {
                  id: 4,
                  image: require('../../images/menues//s4.png'),
                  name: 'Chicken Biryani',
                  //price: require('../images/menues//p4.png'),
                  price: 'Rs100 Rs200',
                  resto: 'Saoji Bhojnalaya',
                },
              ],
        }
    }
    renderData = ({item}: any) => {
        return (
          <View style={styles.addfoodView}>
            <Image
              style={{
                height: 100,
                width: 120,
                borderRadius:10
              }}
              source={item.image}
            />
            <View style={{margin:20}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000000',
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#000000',
                }}>
                Rs {item.price}
              </Text>
            </View>
          </View>
        );
      };
  render() {
    return (
        <View style={styles.container}>
        <View style={styles.child1}>
        <TouchableOpacity
            style={styles.favBackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Favorite</Text>
          </TouchableOpacity>
        </View>
        <View>
        <FlatList
                showsHorizontalScrollIndicator={false}
                data={this.state.todayMenus}
                renderItem={this.renderData}
                keyExtractor={(item, index) => item.id}
              />
        </View>
        </View>
    )
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
        flexDirection:'row',
      },
      heading: {
         fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,
      },
      addfoodView:{
        flexDirection:'row',
        top:10,
        marginHorizontal:10,
        marginVertical:5,
        backgroundColor:'#ffffff',
        borderRadius:10,
      },
      favBackBtn:{
        top: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
      },
})