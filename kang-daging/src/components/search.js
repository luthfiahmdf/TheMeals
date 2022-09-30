import React from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Search() {
  return (
    <div className="pt-3 pl-10 pr-10 pb-2 mt-2 grid grid-cols-2">
      <h1 className="text-3xl">All Meals</h1>
      <div className="searh_meals  flex justify-end">
        <Input placeholder="Search Meals" prefix={<SearchOutlined />} />
      </div>
    </div>
  );
}

export default Search;
