import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';

interface IState {
  pizzas: any[];
}
interface IProps {
  navigation?: any;
  route?: any;
}
export default class ShowFoods extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  renderPizzas = ({item}: any) => {
    return (
      <View>
        <Image
          style={{height: 100, width: 150,top:20,left:12}}
          source={item.image}
          resizeMode="contain"
        />
      <View style={styles.foodView}>
      
        <Text style={{fontSize: 20, fontWeight: '600', color: '#000000',top:10}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 15, fontWeight: '600', color: 'red',top:10}}>
          {'\u20B9'}
          {item.price}
        </Text>
        <TouchableOpacity style={styles.addItemButton} onPress={()=>console.log("press")}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  };
  renderBurgers = ({item}: any) => {
    return (
      <View>
        <Image
          style={{height: 100, width: 120,top:20,left:25}}
          source={item.image}
          resizeMode="contain"
        />
      <View style={styles.foodView}>
      
        <Text style={{fontSize: 20, fontWeight: '600', color: '#000000',top:10}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 15, fontWeight: '600', color: 'red',top:10}}>
          {'\u20B9'}
          {item.price}
        </Text>
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
    const {item} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.props.navigation.navigate('TabContainer')}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../../images/back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              {item.text}
            </Text>
          </View>
          <Image
            style={{height: 200, width: 200, bottom: 3}}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.child2}>
          <View>
            <FlatList showsVerticalScrollIndicator={false}
              numColumns={2}
              data={item.pizzas}
              renderItem={this.renderPizzas}
              keyExtractor={item => item.id}
            />
            <FlatList showsVerticalScrollIndicator={false}
              numColumns={2}
              data={item.burgers}
              renderItem={this.renderBurgers}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  child1: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FE5656',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  child2: {
    height: '80%',
    justifyContent:'center',
    alignItems:'center'
  },
  backBtn: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 100,
    top:-15
  },
  content: {
    left: 10,
    top: 30,
  },
  foodView: {
    height:120,
    backgroundColor: '#FFE5E5',
    marginVertical: 10,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    paddingHorizontal:20,
    top:-30,
    zIndex:-1
  },
  addItemButton:{
    backgroundColor:'#ffffff',
    padding:10,
    paddingHorizontal:17,
    borderRadius:100,
    top:30,
  }
});
