import React, { Component } from 'react';

class Button extends Component{
    render() {

        return(
            <div className="Button"> 
                <button onClick={ this.props.handleClick }> [+] </button> {/* traer funcion de prop handleClick onClick*/}
            </div>
        );
    }
}

export default Button;