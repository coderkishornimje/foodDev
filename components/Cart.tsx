import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { AppContext } from './AppContext';

const deleteIcon = <Icon name="delete" size={20} color="#ffffff" />;

interface IState{
 foods:any[];
}
interface IProps{
  navigation?:any;
}
const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default class Cart extends Component <IProps,IState>{
static contextType=AppContext;

constructor(props:IProps){
  super(props);
  this.state={
    foods: [
      {
        id: 1,
        image: require('../images/home/foodimg/CBurger.png'),
        name: 'HamBurger',
        price: 100,
        title: 'Barbeque Nation',
      },
      {
        id: 2,
        image: require('../images/home/foodimg/CPizza.png'),
        name: 'Pizza',
        price: 150,
        title: 'Barbeque Nation',
      },
      {
        id: 3,
        image: require('../images/home/foodimg/CBiryani.png'),
        name: 'Biryani',
        price: 249,
        title: 'Barbeque Nation',
      },
      
    ],
  }
}

renderData=({item}:any)=>{
  const {quantityInc,quantityDec,deleteItem}:any=this.context;
  return(
        <View style={styles.cartView}>
          <Image
            style={{
              height: 90,
              width: 120,
              top:10
            }}
            resizeMode='contain'
            source={item.image}
          />
          <View style={styles.addfoodView}>
            <Text
              style={{
                fontSize: 20,
                color: '#000000',
                //alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                //alignSelf: 'center',
                marginVertical:5
              }}>
              {'\u20B9'}{item.price} {'\u20B9'}200
            </Text>
          <View style={{flexDirection:'row'}}>
          <View style={styles.addItemButton}>
          <TouchableOpacity onPress={()=>quantityDec(item)} disabled={item.quantity<2}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000',marginRight:15}}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
             {item.quantity}
            </Text>
          <TouchableOpacity onPress={()=>quantityInc(item)}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000',marginLeft:15}}>
              +
            </Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.deleteBtn} onPress={()=>deleteItem(item)}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {deleteIcon}
            </Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
      );
}

  render() {
    const {myCartData}:any=this.context;
    console.log(myCartData);
    return (
      <View style={styles.container}>
         <View style={styles.child1}>
           <Text style={styles.heading}>Cart</Text>
         </View>
         <View style={styles.child2}>
          <FlatList 
           data={myCartData}
           renderItem={this.renderData}
           keyExtractor={(item, index) => index.toString()}
          />
         </View>
         <View style={styles.child3}>
           <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
           </TouchableOpacity>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#E6E6E6',
  },
  child1:{
    backgroundColor:'#ffffff',
    paddingHorizontal:10,
    paddingVertical:20,
  },
  child2:{
    height:'80%',
    width:'100%',
  },
  heading:{
  fontSize:20,
  fontWeight:'bold',
  color:'#000000'
  },
  child3:{
    height:'10%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  addItemButton:{
    backgroundColor:'#FFE5E5',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
  },
  cartView:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#ffffff',
    marginHorizontal:20,
    marginVertical:10,
    paddingVertical:10,
    borderRadius:10
  },
  deleteBtn:{
    backgroundColor:'red',
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginLeft:10,
  },
  checkoutButton:{
   backgroundColor:'#94CD00',
   paddingHorizontal:130,
   paddingVertical:20,
   borderRadius:50,
   top:-20,
  },
  checkoutText:{
   fontSize:20,
   fontWeight:'bold',
   color:'#ffffff'
  },

})