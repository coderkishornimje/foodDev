import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

interface IState {
    offersData:any[];
    restoData:any[];
}
interface IProps {
  navigation?: any;
}

export default class Offer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
        offersData:[
            {
                id: 1,
                image: require('../images/offers/offer1.png'),
                name: 'Super Veg Delicious Dish',
                //price: require('../images/menues//p1.png'),
                off:'Get 30% OFF',
                resto: 'Golden Fish Restaurant',
                
              },
              {
                id: 2,
                image: require('../images/offers/offer2.png'),
                name: 'Best Veg Humberger',
                //price: require('../images/menues//p1.png'),
                off:'Get 30% OFF',
                resto: 'Golden Fish Restaurant',
                
              },
              {
                id: 3,
                image: require('../images/offers/offer3.png'),
                name: 'Classic Chicken Wings',
                //price: require('../images/menues//p1.png'),
                off:'Get 30% OFF',
                resto: 'Golden Fish Restaurant',
                
              },
        ],
        restoData: [
            {
              id: 1,
              image: require('../images/menues//s1.png'),
              name: 'Best Veg Dum Biryani',
              //price: require('../images/menues//p1.png'),
              price:'Rs100 Rs200',
              resto: 'Golden Fish Restaurant',
              
            },
            {
              id: 2,
              image: require('../images/menues//s2.png'),
              name: 'Chicken Tikka',
              //price: require('../images/menues//p2.png'),
              price:'Rs100 Rs200',
              resto: 'Barbeque Nation',
            },
            {
              id: 3,
              image: require('../images/menues//s3.png'),
              name: 'Pizza',
              //price: require('../images/menues//p3.png'),
              price:'Rs100 Rs200',
              resto: 'Naivaydyam Restaurant',
            },
            {
              id: 4,
              image: require('../images/menues//s4.png'),
              name: 'Chicken Biryani',
              //price: require('../images/menues//p4.png'),
              price:'Rs100 Rs200',
              resto: 'Saoji Bhojnalaya',
            },
          ],
    };
  }

  renderOffers=({item}:any)=>{
    return(
        <View>
            <ImageBackground
                  source={item.image}
                  resizeMode="stretch"
                  style={{
                    height: 130,
                    width: 380,
                    marginVertical: 8,
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.content}>
                   <Text style={styles.offer}>{item.off}</Text>
                   <View style={{height:50,width:150}}>
                   <Text style={styles.offername}>{item.name}</Text>
                   </View>
                  </View>
                </ImageBackground>
        </View>
    )
  }

  renderResto = ({item}: any) => {
    return (
      <View style={styles.restoView}>
        <Image style={{height: 120, width: 120}} source={item.image} />
        <View style={styles.restochild}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color:'#000000'
          }}>
          {item.name}
        </Text> 
          <Text style={styles.price}>{item.price}</Text>
       <View style={{flexDirection:'row',top:10}}>
       <Image
              style={{height:20,width:20,marginHorizontal:5}}
              source={require('../images/menues/dish1.png')}
              resizeMode="stretch"
         />
        <Text style={styles.name}>{item.resto}</Text>
       </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
       <View style={{backgroundColor:'#ffffff',padding:10}}>
       <Text style={styles.heading}>Best Offers</Text>
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:10}}>
        <FlatList
         data={this.state.offersData}
         renderItem={this.renderOffers}
         />
        </View>
        <Text style={styles.restoheading}>Nearby Restaurant Offers</Text>
        <View>
        <FlatList
         data={this.state.restoData}
         renderItem={this.renderResto}
         />
        </View>
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E6E6E6;',
  },

  heading:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000000',
  },
  content:{
    margin:30
  },
  offer:{
    color:'#ffffff',
    fontSize:15,
  },
  offername:{
    color:'#ffffff',
    fontSize:20,
  },
  restoView:{
    flexDirection:'row',
    padding:10,
    marginVertical:5,
    marginHorizontal:10,
    borderRadius:10,
    backgroundColor:'#ffffff'

  },
  restochild:{
    marginHorizontal:20,
    marginVertical:5,
  },
  price:{
   fontSize:15,
   color:'red'
  },
  name:{
  fontWeight:'bold'
  },
  restoheading:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000000',
    marginLeft:10
  }
 
});
