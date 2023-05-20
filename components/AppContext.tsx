import {Text, StyleSheet, View, Alert} from 'react-native';
import React, {Component, createContext} from 'react';

interface IState {
  image: any;
  foodName: string;
  foodPrice: string;
  cartProducts: any[];
}

interface IProps {
  navigation?: any;
  children?: any;
}

export const AppContext = createContext({});

export default class AppContextProvider extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      image: '',
      foodName: '',
      foodPrice: '',
      cartProducts: [],
    };
  }

  handleCartDetails = (item: any) => {
    //console.log(item);
    const val = this.state.cartProducts.find(ele => {
      return ele.id === item.id;
    });

    if (val === undefined) {
      //   this.state.cartProducts.push(item);
      this.setState({
        cartProducts: [...this.state.cartProducts, item],
      });
      //console.log('somthing', this.state.allItem);
      console.log(
        'HI===============================>',
        this.state.cartProducts,
      );
    } else {
      Alert.alert('data alredy added');
    }
  };

  handleIncrement=(item:any)=>{
   this.setState({
    cartProducts:this.state.cartProducts.map((ele)=>{
      if(ele.id===item.id)
      {
        ele.quantity=item.quantity+1;
      }
      return ele;
    })
   })
  }

  handleDecrement=(item:any)=>{
   this.setState({
    cartProducts:this.state.cartProducts.map((ele)=>{
      if(ele.id===item.id)
      {
        ele.quantity=item.quantity-1;
      }
      return ele;
    })
   })
  }
 deleteHandler=(item:any)=>{
  console.log("deleted")
  const {cartProducts}=this.state;

  const updatedItems = cartProducts.filter((ele) => ele.id !== item.id);
  this.setState({ cartProducts: updatedItems });
 }

  render() {
    return (
      <AppContext.Provider
        value={{
          sendItem: this.handleCartDetails,
          myCartData: this.state.cartProducts,
          quantityInc:this.handleIncrement,
          quantityDec:this.handleDecrement,
          deleteItem:this.deleteHandler,
        }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});
