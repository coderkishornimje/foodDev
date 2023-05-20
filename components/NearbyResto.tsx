import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class NearbyResto extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: require('../images/home/foodimg/pizza.png'),
          text: 'Pizza',
          pizzas: [
            {
              id: 1,
              image: require('../images/foods/p1.png'),
              name: 'hawaiian',
              price: 150,
            },
            {
              id: 2,
              image: require('../images/foods/p2.png'),
              name: 'pepperoni',
              price: 120,
            },
            {
              id: 3,
              image: require('../images/foods/p3.png'),
              name: 'margherita',
              price: 100,
            },
            {
              id: 4,
              image: require('../images/foods/p4.png'),
              name: 'vegetarian',
              price: 170,
            },
            {
              id: 5,
              image: require('../images/foods/p1.png'),
              name: 'hawaiian',
              price: 150,
            },
            {
              id: 6,
              image: require('../images/foods/p3.png'),
              name: 'margherita',
              price: 100,
            },
          ],
        },
        {
          id: 2,
          image: require('../images/home/foodimg/burger.png'),
          text: 'Burger',
          burgers: [
            {
              id: 1,
              image: require('../images/foods/b1.png'),
              name: 'hawaiian',
              price: 150,
            },
            {
              id: 2,
              image: require('../images/foods/b2.png'),
              name: 'pepperoni',
              price: 120,
            },
            {
              id: 3,
              image: require('../images/foods/b3.png'),
              name: 'margherita',
              price: 100,
            },
            {
              id: 4,
              image: require('../images/foods/b4.png'),
              name: 'vegetarian',
              price: 170,
            },
            {
              id: 5,
              image: require('../images/foods/b2.png'),
              name: 'pepperoni',
              price: 120,
            },
            {
              id: 6,
              image: require('../images/foods/b3.png'),
              name: 'margherita',
              price: 100,
            },
          ],
        },
        {
          id: 3,
          image: require('../images/home/foodimg/pizza.png'),
          text: 'Chicken',
        },
      ],
      foods: [
        {
          id: 1,
          image: require('../images/home/foodimg/CBurger.png'),
          name: 'Burger',
          price: 99,
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
          image: require('../images/home/foodimg/CBurger.png'),
          name: 'Biryani',
          price: 249,
          title: 'Barbeque Nation',
        },
        {
          id: 4,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Ice-Cream',
          price: 49,
          title: 'Barbeque Nation',
        },
      ],
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
      ],
      
    };
  }
  renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ShowFoods', {item})}>
        <View style={styles.foodView}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 15,
              zIndex:-1
            }}>
            {item.text}
          </Text>
          <Image style={{height: 70, width: 80}} source={item.image} />
        </View>
      </TouchableOpacity>
    );
  };
  renderData = ({item}: any) => {
    return (
      <View style={{top:-20}}>
        <Image
          style={{
            height:130,
            width:130,
            left:20,
            top:20,
          }}
          source={item.image}
          resizeMode="contain"
        />
        <View style={styles.addfoodView}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              alignSelf: 'center',
              fontWeight: 'bold',
              top:20
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'red',
              alignSelf: 'center',
              top:20
            }}>
            {'\u20B9'}
            {item.price}
          </Text>
          <TouchableOpacity style={styles.addItemButton}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
            +
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  renderMenues = ({item}: any) => {
    return (
      <View style={styles.menuesView}>
        <Image style={{height: 130, width: 170}} source={item.image} />
        <View style={{margin: 15}}>
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
            <Text style={styles.heading}>Nearby Restaurant</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ImageBackground
                source={require('../images/resto/r1.png')}
                resizeMode="cover"
                style={{
                  height: 184,
                  width: 420,
                  marginVertical: 10,
                }}></ImageBackground>
              <ImageBackground
                source={require('../images/resto/r1.png')}
                resizeMode="cover"
                style={{
                  height: 184,
                  width: 420,
                  marginVertical: 10,
                }}></ImageBackground>
            </ScrollView>
            <View style={styles.pagePoint}>
              <View style={styles.point0}></View>
              <View style={styles.point1}></View>
              <View style={styles.point1}></View>
              <View style={styles.point1}></View>
            </View>
            <View style={{marginHorizontal: 20, top: 10}}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#000000'}}>
                Golden Fish Restaurant
              </Text>
              <View style={{flexDirection: 'row', left: 20}}>
                <Image
                  style={{height: 20, width: 20, bottom: 3}}
                  source={require('../images/resto/locIcon.png')}
                  resizeMode="stretch"
                />
                <Text style={styles.km}>2.5km</Text>
                <View style={{flexDirection: 'row', marginLeft: 20}}>
                  <Image
                    style={{height: 20, width: 25, bottom: 3}}
                    source={require('../images/resto/star.png')}
                    resizeMode="stretch"
                  />
                  <Image
                    style={{height: 20, width: 25, bottom: 3}}
                    source={require('../images/resto/star.png')}
                    resizeMode="stretch"
                  />
                  <Image
                    style={{height: 20, width: 25, bottom: 3}}
                    source={require('../images/resto/star.png')}
                    resizeMode="stretch"
                  />
                </View>
              </View>
              <View style={{height: 50, width: '100%', alignSelf: 'center'}}>
                <Text style={styles.address}>
                  Manish Nagar, Ingole Nagar, Sonegaon, Nagpur
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              top: 20,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity style={styles.FavButton}>
              <Text style={{fontSize: 20, color: '#ffffff', right: 10}}>
                Favorite
              </Text>
              <Image
                style={{height: 20, width: 20}}
                source={require('../images/+.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ReviewButton}>
              <Text style={{fontSize: 20, color: '#ffffff', right: 10}}>
                Food Reviews
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{top: 30}}>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 20,
                fontWeight: '600',
                color: '#000000',
              }}>
              Category
            </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id}
            />
          </View>
          <View style={{top:30}}>
            <Text  style={{
                fontSize: 20,
                marginHorizontal: 20,
                fontWeight: '600',
                color: '#000000',
                top:10
              }} >Best Choice</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.state.foods}
              renderItem={this.renderData}
              keyExtractor={(item, index) => item.id}
            />
          </View>
          <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={styles.menuHeading}>Today Special</Text>
                <TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.viewAll}>View All</Text>
                    <Image
                      style={{height: 25, width: 30, marginLeft: 15, top: 5}}
                      source={require('../images/rightArrow.png')}
                      resizeMode="stretch"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        <View style={{marginHorizontal:10}}>
              <FlatList
                //horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.todayMenus}
                renderItem={this.renderMenues}
                keyExtractor={(item, index) => item.id}
              />
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    //width: '100%',
    backgroundColor:'#E6E6E6',
  },
  child1: {
    height: '10%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  BackBtn: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  pagePoint: {
    flexDirection: 'row',
    bottom: 40,
    left: 150,
    top: 0,
  },
  point0: {
    borderWidth: 2,
    borderColor: '#94CD00',
    backgroundColor: '#DF201F',
    height: 15,
    width: 15,
    borderRadius: 100,
    marginRight: 10,
  },
  point1: {
    borderWidth: 2,
    borderColor: '#94CD00',
    // backgroundColor:'#DF201F',
    height: 15,
    width: 15,
    borderRadius: 100,
    marginRight: 10,
  },
  km: {
    fontSize: 20,
    color: 'red',
    top: -5,
  },
  address: {
    fontSize: 18,
  },
  FavButton: {
    flexDirection: 'row',
    backgroundColor: '#DF201F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 15,
  },
  ReviewButton: {
    flexDirection: 'row',
    backgroundColor: '#94CD00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 15,
  },
  foodView: {
    //height: 70,
    backgroundColor: '#FE5656',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 20,
  },
  addfoodView: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF3E5',
    marginHorizontal: 15,
    borderRadius: 20,
    top: -40,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemButton: {
    backgroundColor: '#ffffff',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 200,
    top:40
  },
  menuesView: {
    height: 130,
    backgroundColor: '#f2f2f2',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 20,
  },
  menuHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewAll: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});
