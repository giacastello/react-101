import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        const { resultado } = this.props
        return(
            <div className="Result"> 
                <p> The result is {resultado} </p>
            </div>
        );
    }
}