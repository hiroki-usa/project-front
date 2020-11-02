import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { render } from "react-dom";
import axios from 'axios'
import React, { Component } from 'react';
//react_チュートリアル↓
//const name = 'usami';
//const element = <h1>Hello,{name}</h1>
//const numbers = [1, 2, 3, 4, 5];
//const numbers2 = [1,2,3,4,5];
//const listItems = numbers2.map((number) => <li>{number}</li>);
//const doubled = numbers.map((number) => number * 2);
//function formatName(user){
//  return user.firstName + ' ' + user.lastName;
//}
//const user = {
//  firstName:'Usami',
//  lastName :'Hiroki'
//};
//const element2 = (
//  <h1>
//    Hello,{formatName(user)}!
//  </h1>
//)

// 最初のコード
// const users = [{name:"usami",age:20},{name:"usami",age:20},{name:"usami",age:20}]
// const listUsers = users.map((user) => <tr><td>{user.name}</td><td>{user.age}</td></tr>);
// let css1 = {backgroundColor:"teal"};
//  constructor(props) {
//      super(props);
//       this.state = {
//         rooms: [],
//       };
//   　}
// componentDidMount() {
//       const url = "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=276170a85746bbaefe88a4ce71f60084&name=焼肉";
//       axios.get(url).then((res) => {
//         console.log(res.data);
//         this.setState({ rooms: res.data });
//       });
//   　}
// export default function Home() {
//   return (
//   <>
//   <style>{'table,th,td {border:1px solid black;}'}</style>
//   <table>
//     <tr style={css1}>
//       <th>店名</th>
//       <th>電話番号</th>
//     </tr>
//   {listUsers}
//   </table>
//   </>
//   )
// }

const shops = [{ name: "ああああ", call: 111}, { name: "いいいい", call: 222}, { name: "うううう", call: 333}, { name: "ええええ", call: 444}];
const shops2 = [{ name: "おおおお", call: 111}, { name: "いいいい", call: 222}, { name: "うううう", call: 333}, { name: "ええええ", call: 444}];
let css1 = {backgroundColor:"#CCFFFF"};
let css2 = {backgroundColor:"#FFFFCC"};

function ShopList(props){
  return(
    <>
      <table>
        <tr style={css1}>
        <th>店名</th>
        <th>電話番号</th>
       </tr>
       {props.shops.map((shop) => 
        <tr style={css2} ><td>{shop.name}</td><td>{shop.call}</td></tr>
        )}
      </table>
    </>
  );
}

class GenruForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {genru: ""};
    this.handleChange = this.handleGenruChange.bind(this);
  }
  handleGenruChange(event) {
    this.setState({genru: event.target.value});
  }
  render(){
    return (
      <form>
        <label>
        ジャンル：
        <input type="text" value = {this.state.genru} placeholder="ここに入力" onChange = {this.handleGenruChange}/>
        <input type="button" onClick={() => this.props.onClick()} value="検索する"/>
        </label>
      </form>
    )
  }
}

export default function Home() {
  console.log('test'); 
    function loadGurunavi(props){
      return(
      axios.get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=276170a85746bbaefe88a4ce71f60084&name='+props.state.genru+'&pref=PREF13')
      .then(function(response){
        var restrans = restrans.data.rest;
        const tempShops = [{}];
        for (var n = 0; n < restrants.length; n++) {
          tempShops.push({ name: restrants[n].name, call: restrants[n].tel });
        }
        setShops(tempShops)
        // handle success
        console.log(response);
      })
      .catch(function (error) {
          // handle error
        console.log(error);
      })
      .finally(function () {
          // always executed
      })
      )
    }

  return (
    <>
      <GenruForm onClick={(genru) => loadGurunavi(this.props)} />
      <style>{'table,th,td {border:1px solid black;}'}</style>
      <ShopList shops={shops}></ShopList>
      <br></br>
      <Link href="/other"><a>next shop list</a></Link>
    </>
  )
}