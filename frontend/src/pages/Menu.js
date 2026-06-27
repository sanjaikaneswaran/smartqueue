
import React, { useState } from "react";
import "./Menu.css";
import { FaArrowLeft, FaShoppingCart, FaPlus, FaSearch } from "react-icons/fa";

import roll from "../assests/roll.png";
import brinjal from "../assests/brinjal.png";
import pastry from "../assests/pastry.png";
import dal from "../assests/dal.jpg";
import beans from "../assests/beans.png";
import pinnapplejuice from "../assests/pinnapplejuice.png";
import Lime from "../assests/Lime.png";
import falooda from "../assests/falooda.png";
import orange from "../assests/orange.png";
import patis from "../assests/patis.png";
import bananaflower from "../assests/bananaflower.png";
import fishbun from "../assests/fishbun.png";
import avacado from "../assests/avacado.png";
import woodapple from "../assests/woodapple.png";
import potato from "../assests/potato.png";
import chicken from "../assests/chicken.png";




const categories = [
  "All",
  "Rice",
  "Roti",
  "Snacks",
  "Breakfast",
  "Vegetable",
  "Beverages"
];
 
const foods = [


  {
    id: 1,
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
  },

  {
    id: 2,
    name: "Kottu Roti",
    category: "Roti",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
  },
  {
    id: 3,
    name: "Chicken Submarine",
    category: "Snacks",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    outOfStock: true,
  },

  {
    id: 4,
    name: "Egg Fried Rice",
    category: "Rice",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
  },
{
   id: 5,
    name: "Pastry",
    category: "Snacks",
    price: 250,
    image:pastry

  },

  {
   id: 6,
    name: "Dal curry",
    category: "Vegetable",
    price: 250,
   image: dal

  },

    {
   id: 7,
    name: "Bringal curry",
    category: "Vegetable",
    price: 250,
   image: brinjal

  },
  {
   id: 8,
    name: "Beans curry",
    category: "Vegetable",
    price: 250,
   image: beans

  },

    {
   id: 9,
    name: "Rolls",
    category: "Snacks",
    price: 250,
   image: roll

  },

    {
   id: 10,
    name: "Pinnapple Juice",
    category: "Beverages",
    price: 250,
   image: pinnapplejuice

  },

     {
   id: 11,
    name: "Lime Juice",
    category: "Beverages",
    price: 250,
   image: Lime

  },

  {
   id: 12,
    name: "Falooda",
    category: "Beverages",
    price: 250,
   image: falooda

  },

   {
   id: 13,
    name: "Orange Juice",
    category: "Beverages",
    price: 250,
   image: orange

  },

   {
   id: 14,
    name: "Patis",
    category: "Snacks",
    price: 250,
   image: patis

  },
   {
   id: 15,
    name: "Bananaflower Curry",
    category: "Vegetable",
    price: 250,
   image: bananaflower


  },

  {
   id: 16,
    name: "Fish Bun",
    category: "Snacks",
    price: 250,
   image: fishbun


  },

  
  {
   id: 17,
    name: "Avacado Juice",
    category: "Beverages",
    price: 250,
   image: avacado

  },

    {
   id: 18,
    name: "Woodapple Juice",
    category: "Beverages",
    price: 250,
   image: woodapple

  },

      {
   id: 19,
    name: "Potato Curry",
    category: "Vegetable",
    price: 250,
   image: potato

  },
    {
   id: 20,
    name: "Chicken Curry",
    category: "Vegetable",
    price: 250,
   image: chicken

  },





  

  
];
export default function Menu() {


  const [selectedCategory, setSelectedCategory] = useState("All");

const filteredFoods =
  selectedCategory === "All"
    ? foods
    : foods.filter(food => food.category === selectedCategory);
  return (
    <div className="menu-page">

      {/* Header */}

      <div className="menu-header">

        <div className="top-row">
          <button className="icon-btn">
            <FaArrowLeft />
          </button>

          <button className="cart-btn">
            <FaShoppingCart />
            <span className="badge">1</span>
          </button>
        </div>

        <h2>Samaja</h2>

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for food..."
          />
        </div>

      </div>

      {/* Categories */}

      <div className="category-list">
  {categories.map((item) => (
    <button
      key={item}
      className={selectedCategory === item ? "active" : ""}
      onClick={() => setSelectedCategory(item)}
    >
      {item}
    </button>
  ))}
</div>

      {/* Food Cards */}

      <div className="food-grid">

        {filteredFoods.map((food) => (

          <div className="food-card" key={food.id}>

            <div className="image-box">

              {food.outOfStock && (
                <span className="stock">
                  Out of Stock
                </span>
              )}

              <img
                src={food.image}
                alt={food.name}
              />

            </div>

            <div className="food-info">

              <h3>{food.name}</h3>

              <p>{food.category}</p>

              <div className="bottom-row">

                <span>Rs. {food.price}</span>

                <button className="add-btn">
                  <FaPlus />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}








