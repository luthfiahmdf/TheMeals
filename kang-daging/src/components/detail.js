import { Layout, Menu } from "antd";
import { Image } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./nav";
import React from "react";
import "antd/dist/antd.css";
import "./comp.css";
import axios from "axios";
import { useState, useEffect } from "react";

const { Header, Content, Footer } = Layout;

function Details() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [meals, setMeals] = useState([]);
  const data = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${id}`
      );
      console.log(res);
      setMeals(res.data.meals[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <Layout className="layout">
      <Navbar />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {meals && (
          <div className="container-lg bg-white  pl-12 pt-12 m-12">
            <div className="_grid">
              <div className="">
                <Image
                  src={meals.strMealThumb}
                  alt={meals.strMeal}
                  className=" rounded-lg h-70 "
                />
              </div>

              <div className=" w-9/12  p-10  ml-12 h-65">
                <h3 className="text-2xl text-neutral-700 ">{meals.strMeal}</h3>
                <h3 className="text-xl font-semibold ">Category</h3>
                <p>{meals.strCategory}</p>
                <h3 className="text-2xl font-semibold">Ingredient</h3>
                <ul className="">
                  <li>{meals.strIngredient1}</li>
                  <li>{meals.strIngredient2}</li>
                  <li>{meals.strIngredient3}</li>
                  <li>{meals.strIngredient4}</li>
                  <li>{meals.strIngredient5}</li>
                  <li>{meals.strIngredient6}</li>
                  <li>{meals.strIngredient7}</li>
                  <li>{meals.strIngredient8}</li>
                  <li>{meals.strIngredient9}</li>
                  <li>{meals.strIngredient10}</li>
                  <li>{meals.strIngredient11}</li>
                  <li>{meals.strIngredient12}</li>
                  <li>{meals.strIngredient13}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ini CopyRight
      </Footer>
    </Layout>
  );
}

export default Details;
