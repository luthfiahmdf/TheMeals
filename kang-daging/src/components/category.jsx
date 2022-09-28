import Navbar from "./components/nav";
import { Card, Layout } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "./components/search";

const { Content } = Layout;

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
const { Meta } = Card;
function App() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const loadData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const showMeals = meals.map((item) => {
    console.log(item);
    return <li key={item.strMeal}>{item.strMeal}</li>;
  });
  const showImage = meals.map((item) => {
    return (
      <img key={item.strMealThumb} alt="img">
        {item.strMealThumb}
      </img>
    );
  });
  const Id = meals.map((item) => {
    return <p key={item.idMeal}>{item.idMeal}</p>;
  });
  const showCategory = meals.map((item) => {
    return <p key={item.strCategory}>{item.strCategory}</p>;
  });

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
              <Meta title={item.strMeal} description={item.strCategory} />
            </Card>
          ))}
      </Content>
    </Layout>
  );
}

export default App;
