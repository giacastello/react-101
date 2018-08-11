import React, { Component } from "react";
import "./App.css";
import  ItemList  from "./Component/ItemList";
const bebida = "bebida";
const comida = "comida";
//clonamos la clase Component ara hacer una nueva clase (App) para poder usar las instancias y sus métodos (instanciamiento)
class App extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      // array de items (objetos)
      productosOriginales: [ 
        {
          id: 1,
          category: "bebida",
          description: "fernet",
          rangeOfPrice: [150, 180, 200]
        },
        {
          id: 2,
          category: "bebida",
          description: "coca",
          rangeOfPrice: [45, 50, 70]
        },
        {
          id: 3,
          category: "bebida",
          description: "fanta",
          rangeOfPrice: [35, 55, 60]
        },
        {
          id: 4,
          category: "comida",
          description: "papitas",
          rangeOfPrice: [35, 45, 60]
        },
        {
          id: 5,
          category: "comida",
          description: "manice",
          rangeOfPrice: [35, 45, 60]
        }
      ],
      productosFiltrados: [],
      isFiltered: false
    };
    this.filtrarPorBebida = this.filtrarPorBebida.bind(this);
    this.filtrarPorComida = this.filtrarPorComida.bind(this);
    this.mostrarTodos = this.mostrarTodos.bind(this);
  }
  componentDidMount() {
    // Este ciclo de vida se ejecuta solo una vez
    // Cuando el componente se monta
    // ACA es donde llamamos a las apis y hacemos otras huevadas
    const { productosOriginales } = this.state;
    console.log("component did mount");
    console.log("aca esta vacio", this.state.productosFiltrados);
    this.setState(
      {
        productosFiltrados: [...productosOriginales]
      },
      () => {
        console.log("aca deberia estar lleno", this.state.productosFiltrados);
      }
    );
  }
  mostrarTodos() {
    // 1. agarrar los originales
    const { productosOriginales } = this.state;
    // 2. pisar filtrados con los originales
    this.setState({
      productosFiltrados: [...productosOriginales]
    });
  }
  filtrarPorBebida() {
    // 1. agarrar mis productos
    const { productosOriginales } = this.state;
    // 2. filtrarlos por categoria === bebida
    const bebidas = productosOriginales.filter(
      item => item.category === bebida
    );
    // 3. mostrarlos
    this.setState({
      productosFiltrados: bebidas,
      isFiltered: true
    });
  }
  filtrarPorComida() {
    // 1. agarrar mis productos
    const { productosFiltrados, productosOriginales } = this.state;
    // 2. filtrarlos por categoria === comida
    const comidas = productosOriginales.filter(
      item => item.category === comida
    );
    // 3. mostrarlos
    this.setState({
      productosFiltrados: comidas,
      isFiltered: true
    });
  }
  filtrarPorDescripcion(event) {
    // 1. agarrar la tecla que el usuario presiono
    const inputDeUsuario = event.target.value;
    // 2. filtrar mi state por descripcion que tenga la tecla
    const { productos } = this.state;
    const itemsFiltrados = productos.filter(item =>
      item.description.includes(inputDeUsuario)
    );
    // 3. actualizar el state
    this.setState({
      productos: itemsFiltrados
    });
    console.log(itemsFiltrados);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.filtrarPorBebida}>Filtrar por Bebida</button>
        <button onClick={this.filtrarPorComida}>Filtrar por Comida</button>
        {this.state.isFiltered && (
          <button onClick={this.mostrarTodos}>Mostrar Todos</button>
        )}
        {/* { this.state.isFiltered ? <button onClick={this.mostrarTodos}>Mostrar Todos</button> : null} */}
        <input type="text" onChange={this.filtrarPorDescripcion} />
        <ItemList lista={this.state.productosFiltrados} />
      </div>
    );
  }
}
export default App;