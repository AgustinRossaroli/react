import React, { Component } from "react";
import "./paneles.css";

class LastProduct extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      lastProduct: null
    };
  }

  getApi = (url, setter) => {
    fetch(url, setter)
      .then(res => res.json())
      .then(json => this.setData(json.products))
      .catch(err => console.log(err));
  }

  async componentDidMount() {
    this.getApi("http://localhost:3000/api/products", this.setData);
  }

  setData = (data) => {
    this.setState({
      products: data,
      lastProduct: data[data.length - 1] // Asigna el último producto al estado
    });
  }

  render() {
    return (
      <div className="panel">
        {this.state.products.length === 0 ? (
          <h4>Cargando...</h4>
        ) : (
          <div>
            <div><strong>Último Producto Creado:</strong></div>
            {this.state.lastProduct && (
              <div>
                <h4>{this.state.lastProduct.name}</h4>
                <p>{this.state.lastProduct.description}</p>
                <p>{this.state.lastProduct.price}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default LastProduct;
