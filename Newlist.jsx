import React from "react";
export default class Newlist extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=276170a85746bbaefe88a4ce71f60084&pref=PREF13&name=",
            list: []
        }
    }
    componentDidMount() {
        fetch(this.state.url + this.props.keyword)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    list: data.rest
                })
            })
    }
    componentDidUpdate(prevProps) {
        console.log(this.props.keyword)
        if (this.props.keyword !== prevProps.keyword) {
            fetch(this.state.url + this.props.keyword)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    this.setState({
                        list: data.rest
                    })
                })
        }
    }
    render() {
        const { list } = this.state;
        console.log(this.state.list)
        return (
            <div >
                {
                            list.map((element, index) => {
                                return (
                                    <ul>
                                        <li className="box3">
                                            <h3>{element.name}</h3>
                                            <div className="container">
                                                <div className="item">{element.access.line+element.access.station}徒歩{element.access.walk}分</div>
                                                <div className="item">{element.category}</div>
                                            </div>
                                        </li>
                                    </ul>

                                )
                            })
                 }

                <style>{`
                    ul {
                        list-style: none;
                    }
                    h3{  
                        margin-top:10px ;
                        margin-bottom:0;
                        margin-left:30px;
                        font-size:25px;
                    }

                    .item{
                        background: #FFF;
                        margin:10px;
                        padding:5px;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                    }

                    .container{
                        margin-left:20px;
                        display:flex;
                    }

                    .box3 {
                        width:700px;
                        background: #FFF;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                        margin-top:10px ;
                        margin-bottom:10px;
                    }
                `}</style>
            </div >
        )
    }
}