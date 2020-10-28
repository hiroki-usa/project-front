import Link from 'next/link'
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
  
export default function OtherPage() {
    return (
        <>
            <a>This is new shop list</a>
            <style>{'table,th,td {border:1px solid black;}'}</style>
            <ShopList shops={shops2}></ShopList>
            <br></br>
            <Link href="/"><a>Go to a top page!</a></Link>
        </>
    );
}