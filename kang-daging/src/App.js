import { Card, Layout, Input } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
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
  // const [search, setSearch] = useState([]);
  // getData

  const loadData = async () => {
    try {
      let res = await axios.get(url);
      // console.log(res);
      setMeals(res.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [setMeals]);

  // SearchBar;
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
