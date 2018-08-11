import React, {Component} from "react";

export default class Item extends Component{
    render(){
        const {dataDelItem} = this.props
        return (
            <div>
                <p>{dataDelItem.description}</p>
                <p>{dataDelItem.category}</p>
            </div>
        )
    }
}