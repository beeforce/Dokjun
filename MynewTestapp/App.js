

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';


class Dokjun extends Component {

  renderspace(num, max){
    var textList_ = [];
    var lenth = max - num
    for(let i = 0; i < lenth; i ++){
      textList_.push(
        <View key = {i}>
      <Text style = {styles.textDokjun}> </Text>
      </View>
      )
    }
    return textList_;
  }
  renderDok(num){
    var textList_ = [];
    for(let i = 0; i < num; i ++){
      textList_.push(
        <View key = {i}>
      <Text style = {styles.textDokjun}>*</Text>
      </View>
      )
    }
    return textList_;
  }

  render() {
    return (
      <View style = {{flexDirection:'row', alignSelf:'center'}}>
      {this.renderspace(this.props.number,this.props.maxlenth)}
      {this.renderDok(this.props.number)}
      {this.renderspace(this.props.number,this.props.maxlenth)}
      </View>
    )
  }
}

export default class App extends Component {

  
constructor(props) {
  super(props);
  this.state = {
    index: 0,
  };
} 

  renderText(){
    var textList = [];
    for(let i = this.state.index; i > 0; i --){
      textList.push(
      <View key = {i}>
      <Dokjun number = {i} maxlenth = {this.state.index} />
      </View>
      )
    }
    return textList;
  }


  render() {
    const {index} = this.state
    return (
      <ScrollView>
      <View style = {styles.container}>
      {this.renderText()}
      <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity onPress = {()=>{
        this.setState({
          index: index+1
        })
      }}
      style = {{ width: 50, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 25}}
      >
        <Text style = {styles.textDokjun}>+</Text>
      </TouchableOpacity>

      <Text>{index}</Text>

      <TouchableOpacity onPress = {()=>{
        if(index > 0){
          this.setState({
          index: index-1
        })
        }
      }}
      style = {{ width: 50, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 25}}
      >
        <Text style = {styles.textDokjun}>-</Text>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20
  },
  textDokjun:{
    fontSize: 20,
    color: '#000'
  }

});
