import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p>PRODUCTS</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>NAME OF PRODUCT</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>PRICE</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>QUANTITY</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>REMOVE</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>TOTAL</p>
          </div>
        </div>
      </div>
    );
  }
}