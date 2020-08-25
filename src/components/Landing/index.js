import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class  extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/react-firebase-authentic-4d611.appspot.com/o/product1.jpg?alt=media&token=9ab8b3c7-7481-45e7-91a5-22e93bea81e8"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Paslode Nail Gun</h3>
      <p>Sign up now to view all products on offer!</p>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/react-firebase-authentic-4d611.appspot.com/o/product13.jpg?alt=media&token=f0eac57b-432f-4b3e-b47c-034ab4dde592"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Hitachi Screw Gun</h3>
      <p>Sign up now to view all products on offer!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/react-firebase-authentic-4d611.appspot.com/o/product12.jpg?alt=media&token=938aef51-9b76-4390-9303-671624b0f284"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>DeWalt Screw Drivers</h3>
      <p>Sign up now to view all products on offer!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}


