// import React from 'react';
// import Component, { Button } from 'Button';
// export default class button

import React, { Component } from 'react'

export default class Button extends Component {
    constructor (props) {
        super(props)
        this.state = { counter: 10 }
        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        const {counter} = this.state
        return (
            <button> {counter} </button>
        )
    }
}
