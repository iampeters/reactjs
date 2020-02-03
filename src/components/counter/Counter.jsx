import React, { Component } from "react";
import './Counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.state = {
      count: 0,
      tags: [
        {
          name: "John",
          age: 24
        },
        {
          name: "Jude",
          age: 22
        },
        {
          name: "Peters",
          age: 29
        }
      ]
    };
  }

  decrement() {
    let { count } = this.state;
    if (count !== 0) {
      return this.setState({ count: --count });
    }
  }

  increment() {
    let { count } = this.state;

    return this.setState({ count: ++count });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-3">
            <span className="btn btn-warning small mr-2 p-2">
              {this.state.count}
            </span>
            <button className="btn btn-primary mr-2" onClick={this.increment}>
              +
            </button>
            <button className="btn btn-danger" onClick={this.decrement}>
              -
            </button>

            <ul className="mt-3">
              {this.state.tags.map(tag => {
                return (
                  <li className="nav-item" key={tag}>
                    {tag.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
