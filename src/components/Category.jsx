import React, { Component } from "react";
import "./paneles.css";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      totalCategories: 0,
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          totalCategories: this.countProperties(data.countByCategory),
        });
      })
      .catch((error) => console.log(error));
  }

  countProperties = (obj) => {
    return Object.keys(obj).length;
  };

  render() {
    return (
      <div className="panel">
        <div>
          <strong>Total de Categorías:</strong> {this.state.totalCategories}
        </div>
      </div>
    );
  }
}

export default Category;
