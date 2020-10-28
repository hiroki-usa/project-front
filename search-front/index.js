import Head from 'next/head'

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
    <table>
      <tr style={css1}>
       <th>店名</th>
       <th>電話番号</th>
    </tr>
     {props.shops.map((shop) => 
      <tr style={css2} ><td>{shop.name}</td><td>{shop.call}</td></tr>
      )}
    </table>
  );
}

// export default function Home(){
//   return(
// <>
// <form id ="form1" action="1">
//   <label>
//   ジャンル：
//   <input type="text" id="input_message" placeholder="ここに入力"/>
//   <input type="button" onclick="func1()" value="検索する"/>
//   </label>
// </form>
// <style>{'table,th,td {border:1px solid black;}'}</style>
// <ShopList shops={shops}></ShopList>
// <ShopList shops={shops2}></ShopList>
// </>
//   )
// }

// import Link from 'next/link'
// export default function OtherPage() {
//     return (
//         <>
//             <h1>This is an other page.</h1>
//             <Link href="/"><a>Go to a top page!</a></Link>
//         </>
//     );
// }

import { useState } from 'react';
import Link from 'next/link'

// const [shops, setShops] = useState(props.shops);
// const addUshop =
//     function () {
//       const tempShops = JSON.parse(JSON.stringify(shops));
//       tempShops.push({ name: "あああ", age: 20 })
//       setShops(tempShops); 
//     };
//   return (

export default function Home() {
  return (
    <html>
      <Head>
        <style>{`table{border: 1px solid red;}`}</style>
      </Head>
      <body>
      <form id ="form1" action="1">
          <label>
          ジャンル：
          <input type="text" id="input_message" placeholder="ここに入力"/>
          <input type="button" onclick="func1()" value="検索する"/>
          </label>
      </form>
      <form>
          <label>
            店名:
            <input type="text" name="name" />
          </label>
          <label>
            電話番号:
            <input type="text" name="call" />
          </label>
          <button>追加</button>
      </form>
        <style>{'table,th,td {border:1px solid black;}'}</style>
        <ShopList shops={shops}></ShopList>

        <br></br>
        <Link href="/other"><a>next shop list</a></Link>
        
      </body>
    </html>
  )
}