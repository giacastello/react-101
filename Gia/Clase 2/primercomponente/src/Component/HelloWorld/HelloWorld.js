//import React, { Component } from 'react';

import React from 'react'
export const HelloWorld = params => { 
    console.log(params)
    return (<p> Holi Mundi {params.nombre} {params.apellido} </p>)
}

// export default class 'HelloWorld' extends Component {
//     render () {
//         return <p> Hello World </p>
//     }
// }