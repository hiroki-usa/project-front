import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Newlist from "../Newlist";

export default class Newlist_p extends React.Component {
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

    render() {
        return (
            <>
                <div className="b">
                    <style>{'table,th,td {border:1px solid black;}'}</style> 
                    <Newlist　keyword={this.state.childrenMsg}/>
                </div>
                <footer>
                    z<div>
                        <p>卒研</p>
                    </div>
                </footer>

                <style jsx>{`
                
                .b{
                    margin:5px 30px 5px 20%;
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