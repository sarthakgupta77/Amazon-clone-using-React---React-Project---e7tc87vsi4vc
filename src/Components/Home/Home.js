import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81OWxWu553L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 13 Pro Max (512GB) - Silver"
            price={1199.99}
            image="https://m.media-amazon.com/images/I/61D84NtVgVL._SX679_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Prestige IRIS Plus 750 watt mixer grinder eith set of 5 pcs - Black colour"
            price={29.0}
            image="	https://m.media-amazon.com/images/I/51HfqyUaHyL._SL1000_.jpg"
            rating={2}
          />
          <Product
            id="49538064"
            title="Faber 4 Burner Glass Cooktop Power 4BB BK Manual Ignition Gas Stove (Black)"
            price={69.0}
            image="https://m.media-amazon.com/images/I/61N-bBiHbSL._SY450_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="3D Moon Lamp 7 Colour Changeable Sensor Moon Night Light Lamp, Touch Control, Moonlight Lamp with Stand & USB for Bedrooms Valentine Gifts,Festival Gifts,Corporate Gifts, Wedding Gifts (15 cm)"
            price={10.99}
            image="https://m.media-amazon.com/images/I/51pX0BOy4DS._SX466_.jpg"
            rating={4}
          />
          <Product
            id="41098920"
            title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living Paperback – 8 October 2018"
            price={8.79}
            image="https://m.media-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="Bennett Mystic 15.6 inch(39.6cm) Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={39.9}
            image="https://m.media-amazon.com/images/I/71Pk6o+INCL._SX569_.jpg"
            rating={3}
          />
          <Product
            id="53641267"
            title="Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 15.6"
            price={349.9}
            image="https://m.media-amazon.com/images/I/71acOQV0elL._SX679_.jpg"
            rating={4}
          />
          <Product
            id="53641267"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X75K (Black) (2022 Model) | with Alexa Compatibility"
            price={649.9}
            image="https://m.media-amazon.com/images/I/71+7bU+fkVL._SX569_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
