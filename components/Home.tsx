import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
// import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color} from 'react-native-elements/dist/helpers';
import { AppContext } from './AppContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface IState {
  rollerimages: any[];
  texts: any[];
  data: any[];
  foods: any[];
  todayMenus: any[];
  restos: any[];
  currentIndex: number;
}
interface IProps {
  navigation?: any;
}
const Tab = createBottomTabNavigator();

export default class Home extends Component<IProps, IState> {
  static contextType=AppContext;
  interval: number;
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentIndex: 0,
      rollerimages: [
        require('../images/home/foodbg.png'),
        require('../images/home/foodbg.png'),
      ],
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
          color: '#FFF3E5',
          quantity:1,
        },
        {
          id: 2,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Pizza',
          price: 150,
          title: 'Naivedhyam Restaurant',
          color: '#FFE5E5',
          top: 10,
          quantity:1,
        },
        {
          id: 3,
          image: require('../images/home/foodimg/CBurger.png'),
          name: 'Biryani',
          price: 249,
          title: 'Barbeque Nation',
          color: '#FFF3E5',
          quantity:1,
        },
        {
          id: 4,
          image: require('../images/home/foodimg/CPizza.png'),
          name: 'Ice-Cream',
          price: 49,
          title: 'Barbeque Nation',
          color: '#FFE5E5',
          quantity:1,
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
      restos: [
        {
          id: 1,
          image: require('../images/resto/r1.png'),
          name: 'Golden Fish Restaurant',
          km: '2.5km',
          address: 'Manish Nagar Ingole Nagar,sonegaon, Nagpur',
        },
        {
          id: 2,
          image: require('../images/resto/r1.png'),
          name: 'Chinese Restaurant',
          km: '3.5km',
          address: 'Manish Nagar Ingole Nagar,sonegaon, Nagpur',
        },
        {
          id: 3,
          image: require('../images/resto/r1.png'),
          name: 'Hariom Restaurant',
          km: '1.5km',
          address: 'Manish Nagar Ingole Nagar,sonegaon, Nagpur',
        },
        {
          id: 4,
          image: require('../images/resto/r1.png'),
          name: 'Manibar and Restaurant',
          km: '2.2km',
          address: 'Manish Nagar Ingole Nagar,sonegaon, Nagpur',
        },
      ],
    };
  }
  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     const {currentIndex, images}: any = this.state;
  //     const nextIndex = (currentIndex + 1) % images.length;
  //     this.setState({currentIndex: nextIndex});
  //   }, 2000);
  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
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
            }}>
            {item.text}
          </Text>
          <Image style={{height: 70, width: 80}} source={item.image} />
        </View>
      </TouchableOpacity>
    );
  };
  renderData = ({item}: any) => {
    const {sendItem} =this.context;
    return (
      <View style={{}}>
        <Image
          style={{
            top: 10,
            left: 10,
          }}
          source={item.image}
          resizeMode="contain"
        />
        <View
          style={{
            height: 200,
            width: 150,
            backgroundColor: item.color,
            marginHorizontal: 15,
            borderRadius: 20,
            top: -20,
            zIndex: -1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'red',
              alignSelf: 'center',
            }}>
            {'\u20B9'}
            {item.price}
          </Text>
          <Image
            style={{height: 25, width: 25, top: 4, tintColor: '#000000'}}
            source={require('../images/menues/dish1.png')}
            resizeMode="stretch"
          />
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                color: '#000000',
                textAlign: 'center',
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addItemButton} onPress={()=>sendItem(item)}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderMenues = ({item}: any) => {
    return (
      <View style={styles.menuesView}>
        <Image
          style={{
            height: 130,
            width: 120,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          source={item.image}
        />
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
              top: 5,
            }}>
            {'\u20B9'}
            {item.price} {'\u20B9'}200
          </Text>
          <View
            style={{
              flexDirection: 'row',
              left: -10,
              marginHorizontal: 5,
              top: 10,
            }}>
            <Image
              style={{height: 30, width: 25, bottom: 3}}
              source={require('../images/menues/dish1.png')}
              resizeMode="stretch"
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                left: 5,
              }}>
              {item.resto}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  renderResto = ({item}: any) => {
    return (
      <ScrollView>
        <View style={styles.restoView}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('NearbyResto')}>
          <Image style={{height: 120, width: '100%'}} source={item.image} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              margin: 15,
            }}>
            {item.name}
          </Text>

          <View style={{flexDirection: 'row', left: 20}}>
            <Image
              style={{height: 20, width: 20, bottom: 3}}
              source={require('../images/resto/locIcon.png')}
              resizeMode="stretch"
            />
            <Text style={styles.km}>{item.km}</Text>
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
          <View style={{height: 50, width: 200, alignSelf: 'center'}}>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.child1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Main')}>
              <Image
                style={styles.profileimg}
                source={require('../images/home/profile.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <View style={styles.nameContent}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
                Hi, Kishor
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 20, width: 20, marginRight: 5}}
                  source={require('../images/home/locationIcon.png')}
                  resizeMode="stretch"
                />
                <Text style={{fontSize: 15, color: '#3e3e3e'}}>
                  Nagpur Maharashtra
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Notification')}>
              <Image
                style={styles.notification}
                source={require('../images/home/notiIcon.png')}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.child2}>
            <View>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => item.id}
              />
            </View>
            <View style={{top: -12}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('AllPizaas')}>
                  <ImageBackground
                    source={require('../images/home/foodbg.png')}
                    resizeMode="stretch"
                    style={{
                      height: 160,
                      width: 380,
                      marginVertical: 20,
                      marginHorizontal: 10,
                    }}>
                    <View style={styles.foodHeading}>
                      <Text style={styles.foodContent}>Super Veg</Text>
                      <Text style={styles.foodContent}>Delicious Pizza</Text>
                      <Text style={{fontSize: 20, color: 'red', top: 15}}>
                        {'\u20B9'}100 {'\u20B9'}200
                      </Text>
                    </View>
                    <Image
                      style={{height: 50, width: 70, bottom: 50, right: -190}}
                      source={require('../images/home/fifty.png')}
                      resizeMode="stretch"
                    />
                  </ImageBackground>
                </TouchableOpacity>
                <ImageBackground
                  source={require('../images/home/foodbg.png')}
                  resizeMode="stretch"
                  style={{
                    height: 160,
                    width: 380,
                    marginVertical: 20,
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.foodHeading}>
                    <Text style={styles.foodContent}>Super Veg</Text>
                    <Text style={styles.foodContent}>Delicious Pizza</Text>
                    <Text style={{fontSize: 20, color: 'red', top: 15}}>
                      {'\u20B9'}100 {'\u20B9'}200
                    </Text>
                  </View>
                  <Image
                    style={{height: 50, width: 70, bottom: 50, right: -190}}
                    source={require('../images/home/fifty.png')}
                    resizeMode="stretch"
                  />
                </ImageBackground>
              </ScrollView>
            </View>
            <View style={styles.pagePoint}>
              <View style={styles.point0}></View>
              <View style={styles.point1}></View>
              <View style={styles.point1}></View>
              <View style={styles.point1}></View>
            </View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000000',
                left: 10,
                top: -5,
              }}>
              Best Choice
            </Text>
            <View>
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
                  top: 20,
                }}>
                <Text style={styles.menuHeading}>Today Special</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ViewAllTodayFood')
                  }>
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
            <View>
              <FlatList
                //horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.todayMenus}
                renderItem={this.renderMenues}
                keyExtractor={(item, index) => item.id}
              />
            </View>
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                  top: 25,
                }}>
                <Text style={styles.menuHeading}>Restaurant Nearby</Text>
                <TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.viewAll}>Map</Text>
                    <Image
                      style={{height: 25, width: 30, marginLeft: 15, top: 5}}
                      source={require('../images/rightArrow.png')}
                      resizeMode="stretch"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height:300,top:20}}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.restos}
                renderItem={this.renderResto}
                keyExtractor={(item, index) => item.id}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  child1: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
  },
  nameContent: {
    top: 15,
    marginHorizontal: 5,
  },
  profileimg: {},
  notification: {
    top: 20,
    left: 100,
  },
  child2: {
    height: '80%',
    width: '100%',
    padding: 10,
    top: -100,
  },
  foodView: {
    height: 70,
    backgroundColor: '#FE5656',
    margin: 5,
    flexDirection: 'row',
    borderRadius: 20,
  },
  foodHeading: {
    margin: 20,
  },
  foodContent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  addfoodView: {
    height: 190,
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
    position: 'absolute',
    backgroundColor: '#ffffff',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 200,
    top: 240,
    left: 70,
    shadowColor: '#FFF3E5',
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  child3: {
    height: '10%',
    width: '100%',
    backgroundColor: '#f5f9ff',
  },
  pagePoint: {
    flexDirection: 'row',
    bottom: 40,
    left: 150,
    top: -18,
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
  menuesView: {
    height: 130,
    backgroundColor: '#ffffff',
    //margin: 5,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 20,
    top: 30,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  restoView: {
    height: 270,
    backgroundColor: '#ffffff',
    //margin: 5,
    marginRight:25,
    borderRadius: 20,
    marginVertical: 10,
    //top: 10,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    //box-shadow: 2px 2px 15px 2px #FFF3E5;
  },
  km: {
    fontSize: 20,
    color: 'red',
    top: -8,
  },
  address: {
    fontSize: 20,
  },
});
