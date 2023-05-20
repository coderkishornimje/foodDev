import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

interface IState {
  interval: number;
  images: any[];
  texts: any[];
  childimage: any[];
  currentIndex: number;
}
interface IProps {
  navigation?: any;
}
export default class OnboardScreen extends Component<IProps, IState> {
  interval: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      images: [
        require('../images/chef1.png'),
        require('../images/pizzaboy.png'),
        require('../images/foodimg1.png'),
        require('../images/foodimg2.png'),
      ],
      texts: [
        'We have Quality Chef',
        'Swift Delivery',
        'Choose your Tasty Food',
        '10% Discount On first order',
      ],
      childimage: [require('../images/burger.png')],
      currentIndex: 0,
      
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const {currentIndex, images}: any = this.state;
      const nextIndex = (currentIndex + 1) % images.length;
      this.setState({currentIndex: nextIndex});
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const {images, texts, currentIndex, childimage}: any = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <ImageBackground
            source={require('../images/bgColor.png')}
            resizeMode="stretch"
            style={styles.imagebg}>
            <View style={{height: '100%', width: '100%'}}>
              <Image
                style={styles.chefimg}
                //source={require('../images/chef1.png')}
                resizeMode="stretch"
                source={images[currentIndex]}
              />
            </View>
            {currentIndex == 0 ? (
              <Image
                style={styles.burgerimg}
                //source={require('../images/burger.png')}
                source={childimage[currentIndex]}
              />
            ) : null}
          </ImageBackground>
          <TouchableOpacity testID='skip-btn'
            style={styles.skipbutton}
            onPress={() => this.props.navigation.navigate('AllowLocation')}>
            <Image
              style={{height: 20, width: 20, alignSelf: 'center'}}
              source={require('../images/skip.png')}
            />
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.child2}>
          <View style={styles.circle1}>
            <Image
              style={{height: 20, width: 20, alignSelf: 'center', top: 30}}
              source={require('../images/Vector.png')}
            />
          </View>
          <View style={styles.childpart}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000000',
                alignSelf: 'center',
              }}>
              {texts[currentIndex]}
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
              It is a long established fact that
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>
              A reader will be distracted
            </Text>
          </View>
          <View style={styles.pagePoint}>
            <View
              style={currentIndex == 0 ? styles.point0 : styles.point1}></View>
            <View
              style={currentIndex == 1 ? styles.point0 : styles.point1}></View>
            <View
              style={currentIndex == 2 ? styles.point0 : styles.point1}></View>
            <View
              style={currentIndex == 3 ? styles.point0 : styles.point1}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  child1: {
    //position: 'absolute',
    height: 600,
    width: '100%',
    backgroundColor: '#d9eda8',
  },
  child2: {
    height: 526,
    width: 550,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 526 / 2,
    top: 500,
    left: -70,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagebg: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  chefimg: {
    height: '100%',
    width: '100%',
    //marginTop: 30,
  },
  burgerimg: {
    height: 120,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 50,
    bottom: 150,
  },
  mainCircle: {
    // height:4200,
    // borderRadius:75,
    // backgroundColor:'red',
  },
  circle1: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 50,
    top: -32,
  },
  childpart: {
    bottom: 100,
  },
  pagePoint: {
    flexDirection: 'row',
    bottom: 40,
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
  skip: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  skipbutton: {
    backgroundColor: 'white',
    right: 0,
    left: 310,
    //bottom: 450,
    top:-550,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
  },
});
