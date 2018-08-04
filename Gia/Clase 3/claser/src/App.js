import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Result from './components/Result';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { //Todo lo que esta aca es la data disponible para usar luego
      name: "",
      apellido: "",
      personas: [], 
      counter: 0, 
    }
    this.handleInputChange = this.handleInputChange.bind(this) //Con esto bindeamos a this, para que no nos de undefined.
    this.sumarUnoalCounter = this.sumarUnoalCounter.bind(this) 
  }

  componentWillMount(){
    console.log("paso por componentWillMount")
  }

  componentDidMount(){ //ACA hacemos pedidos de info por API
    console.log("paso por componentDidMount")
    let result
      // ACA MODIFICO STATE
      fetch("https://randomuser.me/api")
        .then(function(response){
          return response.json();
        })
        .then(function(myJson){
          result = myJson.results;
          console.log(result);
        });
      
      this.setState(
        {
          personas: result
        },
        () => {
          console.log("este es mi state");
          console.log(this.state);
        }
      )
  }


  handleInputChange(e) { //Esta es la funcion de "agarrá la info"
    console.log(e) 
    console.log(e.target.value)
    // Cannot read property 'setState' of undefined
    this.setState({
      name: e.target.value
    })
    this.sumarUnoalCounter = this.sumarUnoalCounter.bind(this)
  }

  sumarUnoalCounter () {
    this.setState({ // this.state devuelve lo que tengo adentro del objeto.
      counter: this.state.counter + 1
    })
  }


  render() { //En el espoacio entre render y return, defino variables, etc.
    const {counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <input type="text" onChange={this.handleInputChange} /> 
      <p>Hello {this.state.name} </p>
      <Button handleClick={this.sumarUnoalCounter}> </Button>  {/*paso la funcion sumarUnoalCounter como prop al hijo*/}
      <Result resultado= { counter }> </Result>  {/*llamamos counter que viene de state*/}
      </div>
    );
  }
}

export default App;