import { Card, Layout } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "./search";

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

  return (
    <Layout className="layout">
      <Navbar />
      <Search />
      <Content className="grid grid-cols-4 p-5 place-items-center gap-y-5 mt-2">
        {meals.length > 0 &&
          meals.map((item) => (
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
