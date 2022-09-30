import React from "react";
import axios from "axios";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

function Search() {
  const [meals, setMeals] = useState([]);

  const searchBar = async (e) => {
    try {
      console.log(e.target.value);
      let data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=` + e.target.value
      );
      setMeals(data);
    } catch (error) {}
  };
  return (
    <div className="pt-3 pl-10 pr-10 pb-2 mt-2 grid grid-cols-2">
      <h1 className="text-3xl">All Meals</h1>
      <div className="searh_meals  flex justify-end">
        <Input
          placeholder="Search Meals"
          prefix={<SearchOutlined />}
          onChange={searchBar}
        />
      </div>
    </div>
  );
}

export default Search;
