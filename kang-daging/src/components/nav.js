import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import "./comp.css";
import axios from "axios";
import { GiForkKnifeSpoon } from "react-icons/gi";

import Categories from "./category";
const { Header } = Layout;
// `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
function Navbar() {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      console.log(res);
      setCategory(res.data.categories[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  // let { strCategory } = useParams();

  const navigate = useNavigate();
  return (
    <Layout>
      <Header
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="nav grid grid-cols-2 cursor-pointer ">
          <div
            className="logo text-2xl text-white  font-bold p-3 flex flex-wrap "
            onClick={() => navigate("/")}
          >
            <div className="logo p-1">
              <GiForkKnifeSpoon />
            </div>
            <h1 className=" text-white ml-2"> Kang Daging</h1>
          </div>
          {category && (
            <div className="list place-items-end flex flex-wrap text-lg font-light  text-white justify-end content-center ">
              <button
                className=" hover:bg-sky-500 h-16 w-20"
                onClick={() => navigate(`category/Beef`)}
              >
                Beef
              </button>
              <button
                className=" hover:bg-sky-500 h-16 w-20"
                onClick={() => navigate(`category/Pork`)}
              >
                Pork
              </button>
              <button
                className=" hover:bg-sky-500 h-16 w-20"
                onClick={() => navigate(`category/Dessert`)}
              >
                Desert
              </button>
            </div>
          )}
        </div>
      </Header>
    </Layout>
  );
}

export default Navbar;
