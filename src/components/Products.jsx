import React, { Component } from "react";
import "./paneles.css";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  getApi = (url, setter) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setter(json.products))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getApi("http://127.0.0.1:3000/api/products", this.setData);
  }

  setData = (data) => {
    this.setState({
      products: data,
    });
  };

  render() {
    return (
      <div className="panel">
        <div><strong>Total de productos:</strong> {this.state.products.length}</div>
        {this.state.products.length === 0 ? (
          <h4>Cargando...</h4>
        ) : (
          this.state.products.map((el) => {
            return (
              <div key={el.id}>
                <p>{el.name}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Products;
