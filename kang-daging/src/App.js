import { Card, Layout } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./components/search";
import Navbar from "./components/nav";
const { Content } = Layout;
const { Meta } = Card;

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
function App() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  let showMeals = meals;
  const loadData = async () => {
    try {
      let res = await axios.get(url);
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
        {showMeals.map((item) => (
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
