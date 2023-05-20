import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native-elements';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IState {
  foods: any[];
}
interface IProps {
  navigation?: any;
}
export default class AllPizaas extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      foods: [
        {
          id: 1,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Veg Pizza',
          price: 150,
          resto: 'Naivedhyam Restaurant',
        },
        {
          id: 2,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Veg Pizza',
          price: 100,
          resto: 'elaichi Restaurant',
        },
        {
          id: 3,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Veg Pizza',
          price: 99,
          resto: 'Infinity Kitchen Restaurant',
        },
        {
          id: 4,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Veg Pizza',
          price: 150,
          resto: 'Babbars Kitchen',
        },
        {
          id: 5,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Veg Pizza',
          price: 150,
          resto: 'Babbars Kitchen',
        },
      ],
    };
  }
  renderData = ({item}: any) => {
    return (
      <View style={{}}>
         <Image
            style={{
              height: 120,
              width: 150,
              left:20,
              top:28
            }}
            source={item.image}
            resizeMode="contain"
          />
      <View style={styles.foodView}>
        <View style={styles.contentView}>
          <Text style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600', color: 'red'}}>
          {'\u20B9'}{item.price}
          </Text>
          <Image
              style={{height: 30, width: 25, bottom: 3}}
              source={require('../images/menues/dish1.png')}
              resizeMode="stretch"
            />
          <View style={{height:50,width:140,alignSelf:'center'}}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000000'}}>
            {item.resto}
          </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addItemButton} onPress={()=>console.log("press")}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height:'20%'}}>
          <ImageBackground
            source={require('../images/home/foodbg.png')}
            resizeMode="cover"
            style={{
              height: 200,
              width: '100%',
              //marginVertical: 20,
              //marginHorizontal: 10,
            }}>
            <View style={styles.backBtn}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TabContainer')}>
                <Image
                  style={{height: 15, width: 15}}
                  source={require('../images/back.png')}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.foodHeading}>
              <Text style={styles.foodContent}>Super Veg</Text>
              <Text style={styles.foodContent}>Delicious Pizza</Text>
              <Text style={{fontSize: 20, color: 'red', width: '60%'}}>
                {'\u20B9'}100 {'\u20B9'}200
              </Text>
            </View>
            <Image
              style={{height: 60, width: 70, left: 210,}}
              source={require('../images/home/fifty.png')}
              resizeMode="stretch"
            />
          </ImageBackground>
          </View>
          <View style={{height:'80%',zIndex:-1,top:20}}>
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              data={this.state.foods}
              renderItem={this.renderData}
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
    backgroundColor: '#ffffff',
  },
  child1: {
    height: '30%',
  },
  foodHeading: {
    margin: 20,
    width: '75%',
    top: 40,
    //backgroundColor:'red'
  },
  foodContent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  child2: {
    height:'80%',
   //top: 50,
  },
  backBtn: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    padding: 15,
    borderRadius: 100,
    left: 20,
    top: 10,
  },
  foodView: {
    //height:120,
    backgroundColor: '#FFE5E5',
    //marginVertical: 10,
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    top:-30,
    zIndex:-1
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    top:25
  },
  addItemButton:{
    backgroundColor:'#ffffff',
    padding:10,
    paddingHorizontal:17,
    borderRadius:100,
    top:30,
  }
  
});
