import React, { Component } from "react";
import "./paneles.css";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalProducts: 0,
      totalServices: 0,
    };
  }

  getApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setData(json);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getApi("http://127.0.0.1:3000/api/products");
  }

  setData = (data) => {
    this.setState({
      products: data.products,
      totalProducts: data.totalProducts,
      totalServices: data.countByCategory.totalServices,
    });
    console.log(data);
  };

  render() {
    return (
      <div className="panel">
        <div>
          <strong>Total de productos por categoría:</strong>{" "}
          {this.state.totalProducts}
        </div>
        <div>
          <strong>Total de servicios por categoría:</strong>{" "}
          {this.state.totalServices}
        </div>
      </div>
    );
  }
}

export default ProductList;
