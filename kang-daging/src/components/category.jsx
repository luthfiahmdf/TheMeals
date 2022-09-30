import { Card, Layout, Input } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "./nav";
const { Content } = Layout;
const { Meta } = Card;

function Categories() {
  let { category } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} `
      );
      console.log(res);
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const searchBar = async (e) => {
    try {
      console.log(e.target.value);
      let res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=` + e.target.value
      );
      setMeals(res.data.meals);
    } catch (error) {}
  };

  return (
    <Layout className="layout">
      <Navbar />
      <div className="pt-3 pl-10 pr-10 pb-2 mt-2 grid grid-cols-2">
        <h1 className="text-3xl">All Meals</h1>
        <div className="searh_meals  flex justify-end">
          <Input
            placeholder="Search Meals"
            prefix={<SearchOutlined />}
            onChange={(e) => searchBar(e)}
          />
        </div>
      </div>
      <Content className="grid grid-cols-4 p-5 place-items-center gap-y-5 mt-2">
        {meals.map((item) => (
          <Card
            hoverable
            cover={<img alt="example" src={item.strMealThumb} />}
            key={item.idMeal}
            className="w-4/5"
            onClick={() => navigate(`/${item.idMeal}`)}
          >
            <Meta title={item.strMeal} />
          </Card>
        ))}
      </Content>
    </Layout>
  );
}

export default Categories;
