import React, { Component } from "react";
import "./paneles.css";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalCategories: 0,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data.products,
          totalCategories: this.countCategories(data.products),
        });
      })
      .catch((error) => console.log(error));
  }

  countCategories = (products) => {
    const categories = products.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);
    return categories.length;
  };

  render() {
    return (
      <div className="panel">
        <div><strong>Total de Categorías:</strong> {this.state.totalCategories}</div>
      </div>
    );
  }
}

export default Category;