import React from "react";
import HeaderComponent from "../HeaderComponent";
import SearchBar from "../SearchBar";
import Shoplist from "../Shoplist";


export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            childrenMsg: '',
            keyword:"",
        }
    }
   
    //SearchBarからキーワードを取得
    getChildrenMsg = (result, keyword) => {
        this.setState({
            childrenMsg: keyword
        })
    }

    handleChange(e){
        this.setState({
          text: e.target.value
        })
      }

    handleClick(){
        this.props.history.push({
            pathname: '/result',
            search:'q=' + this.state.text,
            state: { text: this.state.text }
        });
    }

    // {this.props.location.state.text}
    render() {
        return (
            <>
                {/* <HeaderComponent /> */}
                <div className="search">
                    <input type='text' value={this.state.text} onChange={this.handleChange}　className="searchbox"></input>
                    <button onClick={this.handleClick} className="searchbutton">検索</button>
                </div>

                
                <div className="shoplist">
                    <style>{'table,th,td {border:1px solid black;}'}</style>
                    <Shoplist keyword={this.state.childrenMsg}/>
                </div>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>

                <style jsx>{`
                    .search{
                        text-align: center;
                        margin-top:10px;
                        margin-bottom:20px;
                    }

                    .shoplist{
                        text-align: center;
                    }

                    .searchbox{
                        width: 360px;
                        padding: 5px 8px;
                        border-radius: 6px;
                        border-top: 1px solid #aaa;
                        border-left: 1px solid #aaa;
                        border-right: 2px solid #aaa;
                        border-bottom: 2px solid #aaa;
                        background-image: none
                        background-color: #ddd;
                        font-size: 20px;
                    }
                    .searchbutton{
                        position: relative;
                        display: inline-block;
                        padding: 5px 8px;
                        text-decoration: none;
                        color: #FFF;
                        background: #fd9535;/*背景色*/
                        border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
                        border-radius: 4px;/*角の丸み*/
                        box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
                        font-weight: bold;
                    }
                    .searchbutton:active{
                        border-bottom: solid 2px #fd9535;
                        box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
                    }

                    footer{
                        background: #432;
                        text-align: center;
                        padding: 15px 0;
                    }
                    footer p{
                        color: #fff;
                        font-size:0.875rem
                    }
                `}</style>
            </>
        )
    }
}