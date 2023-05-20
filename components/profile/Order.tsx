import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IState {
  foods: any[];
  restos: any[];
}
interface IProps {
  navigation?: any;
}
export default class Order extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      foods: [
        {
          id: 1,
          image: require('../../images/home/foodimg/CBurger.png'),
          name: 'Hamburger',
          price: 100,
          title: 'Barbeque Nation',
        },
        {
          id: 2,
          image: require('../../images/home/foodimg/CPizza.png'),
          name: 'Pizza',
          price: 150,
          title: 'Barbeque Nation',
        },
        {
          id: 3,
          image: require('../../images/home/foodimg/CBurger.png'),
          name: 'Burger',
          price: 99,
          title: 'Barbeque Nation',
        },
      ],
      restos: [
        {
          id: 1,
          image: [
            require('../../images/resto/r1.png'),
            require('../../images/resto/r1.png'),
            require('../../images/resto/r1.png'),
          ],
          name: 'Golden Fish Restaurant',
          km: '2.5km',
          address: 'Manish Nagar Ingole Nagar,sonegaon, Nagpur',
        },
      ],
    };
  }
  renderData = ({item}: any) => {
    return (
      <View style={styles.foodsData}>
        <Image
          style={{
            height: 58.97,
            width: 105.03,
          }}
          source={item.image}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.listName}>{item.name}</Text>
          <Text style={styles.listPrice}>
            {'\u20B9'}
            {item.price}
          </Text>
        </View>
      </View>
    );
  };
  renderResto = ({item}: any) => {
    return (
      <View style={styles.restoView}>
        {/* <Image style={{height: 120, width: 220}} source={item.image[0]} /> */}
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {item.image.map(img => {
              return (
                <View>
                  <Image style={{height: 120, width: 270}} source={img} />
                </View>
              );
            })}
          </ScrollView>
        </View>
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
            source={require('../../images/resto/locIcon.png')}
            resizeMode="stretch"
          />
          <Text style={styles.km}>{item.km}</Text>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Image
              style={{height: 20, width: 25, bottom: 3}}
              source={require('../../images/resto/star.png')}
              resizeMode="stretch"
            />
            <Image
              style={{height: 20, width: 25, bottom: 3}}
              source={require('../../images/resto/star.png')}
              resizeMode="stretch"
            />
            <Image
              style={{height: 20, width: 25, bottom: 3}}
              source={require('../../images/resto/star.png')}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={{height: 50, width: 400, left: '2%'}}>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child1}>
          <TouchableOpacity
            style={styles.orderBackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Order</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.child2}>
            <View>
              <Text style={styles.content1}>Order# ORD00003</Text>
              <Text style={styles.content2}>25 March, 03:25 PM</Text>
            </View>
            <Text style={styles.content3}>Track Order</Text>
          </View>
          <View style={{top: '4%'}}>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                left: 10,
                bottom: '5%',
                fontWeight: '600',
              }}>
              Order Items
            </Text>
            <FlatList
              horizontal={true}
              data={this.state.foods}
              renderItem={this.renderData}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.billView}>
            <View style={styles.billContent}>
              <Text style={styles.billcontent1}>Total Bill</Text>
              <Text style={styles.billcontent1}>{'\u20B9'}300</Text>
            </View>
            <View
              style={{
                height: 1,
                width: '90%',
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#D3D3D3',
                borderStyle: 'dotted',
                marginHorizontal: '5%',
              }}
            />
            <View style={styles.secondbillContent}>
              <Text style={styles.billcontent2}>Delivery Charges</Text>
              <Text style={styles.billcontent2}>{'\u20B9'}0.00</Text>
            </View>
            <View style={styles.secondbillContent}>
              <Text style={styles.billcontent2}>Packing Charges</Text>
              <Text style={styles.billcontent2}>{'\u20B9'}9</Text>
            </View>
            <View style={styles.secondbillContent}>
              <Text style={styles.billcontent2}>Tax Amount(5.0%)</Text>
              <Text style={styles.billcontent2}>{'\u20B9'}15</Text>
            </View>
            <View style={styles.secondbillContent}>
              <Text style={styles.billcontent2}>Tax Amount(5.0%)</Text>
              <Text style={styles.billcontent2}>{'\u20B9'}0.00</Text>
            </View>
            <View
              style={{
                height: 1,
                width: '90%',
                borderRadius: 1,
                borderWidth: 1,
                borderColor: '#D3D3D3',
                borderStyle: 'dotted',
                marginHorizontal: '5%',
              }}
            />
            <View style={styles.billContent}>
              <Text style={styles.billcontent1}>Grand Total</Text>
              <Text style={styles.billcontent1}>{'\u20B9'}324</Text>
            </View>
          </View>
          <View style={{marginVertical: '5%', marginTop: '10%'}}>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                left: 10,
                fontWeight: '600',
              }}>
              Restaurant Details
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.state.restos}
              renderItem={this.renderResto}
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
    backgroundColor: '#E6E6E6;',
  },
  child1: {
    height: '10%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  child2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  orderBackBtn: {
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
  content1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  content2: {
    fontSize: 15,
    fontWeight: 'bold',
    //color:'#000000',
    marginTop: '2%',
  },
  content3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#94CD00',
  },
  foodsData: {
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  listName: {
    fontSize: 20,
    color: '#000000',
  },
  listPrice: {
    fontSize: 15,
    color: 'red',
  },
  billView: {
    top: '5%',
  },
  billContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '2%',
  },
  secondbillContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '2%',
  },
  billcontent1: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  billcontent2: {
    fontSize: 15,
    fontWeight: '600',
    //color:'#000000'
  },
  restoView: {
    backgroundColor: '#ffffff',
    margin: 5,
    borderRadius: 20,
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
