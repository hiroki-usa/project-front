import React from "react";
import HeaderComponent from "../HeaderComponent";

export default class Bookmark extends React.Component {
    render() {
        return (
            <>
                <h2　className="bookmark">ブックマークした論文</h2>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>
                <style>{`
                .bookmark{
                    text-align: center;
                    margin:20px 30% 20px 30%;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
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