import React from 'react';
import { Container, Figure, Card } from 'react-bootstrap';
import logo from './img/logo.jpg'
import StoreImage1 from './img/store1.jpeg'
import StoreImage2 from './img/store2.jpeg'

/*
On your About component, make use of the React Bootstrap figures
component to display:
○ your store's logo (image),
○ a short description of your store,
○ two fictional images of your store
○ and how to contact you.
*/


const About = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Figure>
            <Figure.Image src={logo} alt="Store Logo" className="logo" />
            <Figure.Caption>
              <h2>About Our Store</h2>
              <p>
              Welcome to our online shoppib platform, we provide you a differnet options that meets with your needs with a good price, 
              who ever you are you are our customer, also we have a delivery option with extra charges, 
              our delivery service is locally not outside the region
              </p>
            </Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image src={StoreImage1} width={600} height={600} style={{margin: "20px"}} alt="Inside with front door" />
            <Figure.Caption>
              <p><center>Inside view of the store With front</center></p>
            </Figure.Caption>
          </Figure>

          <Figure>
          <Figure.Image src={StoreImage2} width={540} height={540} alt="Inside the store" />
            <Figure.Caption>
              <p><center>Inside view of the store</center></p>
            </Figure.Caption>
          </Figure>

          <h3>Contact Us</h3>
          <p>Phone: [+252 615 311115]</p>
          <p>Email: [info.store@lulaluxry.so]</p>
          <p>Customer Support: Visit our website and click on the "Contact Us" page to access our online customer support form.</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;