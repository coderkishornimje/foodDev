import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {Image, SearchBar} from 'react-native-elements';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

interface IState {
  searchValue: string;
  searchMenus: any[];
}
interface IProps {
  navigation?: any;
}
const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default class Search extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchValue: '',
      searchMenus: [
        {
          id: 1,
          image: require('../images/menues//s1.png'),
          name: 'Best Veg Dum Biryani Rise',
          //price: require('../images/menues//p1.png'),
          price: 'Rs100 Rs200',
          resto: 'Golden Fish Restaurant',
        },
        {
          id: 2,
          image: require('../images/menues//s2.png'),
          name: 'Chicken Tikka',
          //price: require('../images/menues//p2.png'),
          price: 'Rs100 Rs200',
          resto: 'Barbeque Nation',
        },
        {
          id: 3,
          image: require('../images/menues//s3.png'),
          name: 'Pizza',
          //price: require('../images/menues//p3.png'),
          price: 'Rs100 Rs200',
          resto: 'Naivaydyam Restaurant',
        },
        {
          id: 4,
          image: require('../images/menues//s4.png'),
          name: 'Chicken Biryani',
          //price: require('../images/menues//p4.png'),
          price: 'Rs100 Rs200',
          resto: 'Saoji Bhojnalaya',
        },
      ],
    };
  }
  handleSearchInputChange = (value: any) => {
    this.setState({searchValue: value}, () => {
      //this.fetchData();
    });
  };
  renderData = ({item}: any) => {
    return (
      <View style={styles.menuesView}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 10,
            backgroundColor: '#ffffff',
            borderRadius: 20,
          }}>
         
          <Image
            style={{
              height: 100,
              width: 150,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            source={item.image}
          />
        <View style={{width:'70%'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginHorizontal: 15,
              marginVertical: 30,
              color: '#000000',
            }}>
            {item.name}
          </Text>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <SearchBar
            round
            style={{fontSize: 20}}
            placeholder="Food"
            onChangeText={this.handleSearchInputChange}
            value={this.state.searchValue}
            autoCorrect={false}
            lightTheme
          />
        </View>
        <ScrollView>
          <View style={styles.child2}>
            <Text style={styles.heading}>History</Text>
            <View style={styles.history}>
              <Text style={styles.hh1}>food shop</Text>
              <Text style={styles.hh2}>Best Biryani Near By</Text>
              <Text style={styles.hh3}>Best Restaurant</Text>
            </View>
          </View>
          <View style={{height:'100%'}}>
            <FlatList
              //scrollEnabled={false}
              data={this.state.searchMenus}
              renderItem={this.renderData}
              keyExtractor={(item, index) => index.toString()}
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
    backgroundColor: '#E6E6E6',
  },
  child1: {
    height: '10%',
    marginHorizontal: 10,
    marginVertical: 30,
  },
  child2: {
    paddingHorizontal: 15,
    height:'10%'
    //top: -10,
  },
  heading: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    //top:-10,
    bottom: 5,
  },
  hh1: {
    backgroundColor: '#EDEDED',
    color: '#A2A3A5',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  hh2: {
    backgroundColor: '#EDEDED',
    color: '#A2A3A5',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    left: 150,
  },
  hh3: {
    backgroundColor: '#EDEDED',
    color: '#A2A3A5',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    top: 50,
  },
  history: {
    flexDirection: 'row',
  },
  menuesView: {
    top: 100,
  },
});
